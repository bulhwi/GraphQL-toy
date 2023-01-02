import * as React from 'react';
import { Image } from '@chakra-ui/react';
import  { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/black-and-white.css'

interface CutImageProps {
  src: string;
  id: number;
};

export const CutImage = (cutImage: CutImageProps): React.ReactElement => {
  return (
    <LazyLoadImage
      alt={"testing"}
      src={cutImage.src}
      effect="black-and-white"
      useIntersectionObserver={true}
    />
    // <Image src={cutImage.src} key={cutImage.id} />
  );
};