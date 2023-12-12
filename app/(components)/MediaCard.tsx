import { MediaInterface } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface VideoListProps {
  data: MediaInterface;
}

const MediaCard: React.FC<VideoListProps> = ({data}) => {
  // console.log('data :>> ', data);
  return (
    <div>
      {/* <Link href={{
        pathname: `videos/${data.title}`,
        query: {
          video: {
            // _id: data._id,
            title: data.title,
            description: data.description,
            duration: data.duration,
            thumbnail_url: data.thumbnail_url,
            tags: data.tags
          }
        }}}> */}
        <h1>{data.title}</h1>
        <Image src={data.thumbnail_url} alt={data.title} width={100} height={100}/>
      {/* </Link> */}
    </div>
  )
}

export default MediaCard;