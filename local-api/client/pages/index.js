import MsgList from '../components/MsgList';
import { fetcher } from '../queryClient';
import {GET_MESSAGES} from "../graphql/message"
import {GET_USERS} from "../graphql/user"

const Home = ({smsgs, users}) => (
  <>
    <h1>Message List</h1>
    <MsgList smsgs={smsgs} users={users} />
  </>
);

export const getServerSideProps = async () => {
  const [{ messages: smsgs }, { users }] = await Promise.all([
    fetcher(GET_MESSAGES),
    fetcher(GET_USERS)
  ]);

  return {
    props: {smsgs, users}
  }
}

export default Home;

