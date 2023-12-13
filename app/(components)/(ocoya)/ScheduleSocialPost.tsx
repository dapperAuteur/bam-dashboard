import { ScheduledSocialPostInterface } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

interface ScheduleSocialPostProps {
  data: ScheduledSocialPostInterface;
}

const ScheduleSocialPost: React.FC<ScheduleSocialPostProps> = ({data}) => {
  // console.log('ScheduleSocialPostProps data :>> ', data.postGroup.posts[0].creatives[0]);
  return (
    <div>
      <h2>Past Post</h2>
      {
        data.postGroup.posts[0].creatives[0]?.image ?
        <Image src={data.postGroup.posts[0].creatives[0]?.image} alt='Image for Post' width={100} height={100}/> : null
      }
      
      {
        data.postGroup.posts[0].creatives[0]?.video ?
        <video controls src={data.postGroup.posts[0].creatives[0]?.video}></video> :
        null
      }
      <h4>{data.postGroup.posts[0].caption}</h4>
      <p>{data.scheduledAt}</p>
    </div>
  )
}

export default ScheduleSocialPost