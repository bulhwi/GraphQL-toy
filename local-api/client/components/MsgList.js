import { useEffect, useState, useRef } from 'react';
import {useRouter} from 'next/router';
import { useQuery } from 'react-query';
import MsgItem from './MsgItem';
import MsgInput from './MsgInput';
import { fetcher, QueryKeys } from '../queryClient';
import { GET_MESSAGES } from '../graphql/message';
// import useInfiniteScroll from '../hooks/useInfiniteScroll';

const MsgList = ({smsgs, users}) => {
  const {query} = useRouter();
  const userId = query.userId || query.userid || '';
  const [msgs, setMsgs] = useState(smsgs);
  const [editingId, setEditingId] = useState(null);
  // const [hasNext, setHasNext] = useState(true);
  // const fetchMoreEl = useRef(null);
  // const intersecting = useInfiniteScroll(fetchMoreEl);

  const onCreate = async (text) => {
    const newMsg = await queryClient('post', '/messages', { text, userId });

    if(!newMsg) {
      throw Error('something wrong');
    }

    setMsgs(msgs => [newMsg, ...msgs]);
  };

  const onUpdate = async (text, id) => {
    const newMsg = await queryClient('put', `/messages/${id}`, {text, userId});

    if(!newMsg) {
      throw Error('something wrong');
    }

    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === id);
      if (targetIndex < 0) {
        return msgs;
      }
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, newMsg);
      return newMsgs;
    });
    doneEdit();
  };

  const onDelete = async (id) => {
    const receviedId = await queryClient('delete', `/messages/${id}`, {params: { userId }});
    setMsgs(msgs => {
      const targetIndex = msgs.findIndex(msg => msg.id === receviedId + '');
      if (targetIndex < 0) {
        return msgs;
      }

      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  }

  const doneEdit = () => setEditingId(null);

  const { data, error, isError } = useQuery(QueryKeys.MESSAGES, () => fetcher(GET_MESSAGES));

  console.log(data, error, isError);

  const getMessages = async () => {
    let params = {
      cursor: msgs[msgs.length - 1]?.id || '',
    }
    const newMsgs = await queryClient('get', '/messages', {params});
    if(newMsgs.length === 0) {
      setHasNext(false);
      return;
    }
    setMsgs(msgs => [...msgs, ...newMsgs]);
  }

  // useEffect(() => {
  //   if(intersecting && hasNext) {
  //     getMessages();
  //   }
  // }, [intersecting]);

  return (
    <>
      {userId && <MsgInput mutate={onCreate} />}
      <ul className='messages'>
        {msgs.map(x =>
          <MsgItem key={x.id} {...x}
                   onUpdate={onUpdate}
                   onDelete={() => onDelete(x.id)}
                   startEdit={() => setEditingId(x.id)}
                   isEditing={editingId === x.id}
                   myId={userId}
                   user={users.find(x => userId === x.id)}
          />
        )}
      </ul>
      {/*<div ref={fetchMoreEl} />*/}
    </>
  );
};


export default MsgList;