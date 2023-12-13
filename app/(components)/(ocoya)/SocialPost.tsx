import { SocialPostInterface } from '@/lib/types';
import React from 'react'

interface SocialPostsProps {
  socialPosts: SocialPostInterface;
}

const SocialPost: React.FC<SocialPostsProps> = ({data}) => {
  console.log('data :>> ', data);
  return (
    <div>
      <span>SocialPost</span>
      <h2>{data?.provider} - <span>{data?.name}</span></h2>
    </div>
  )
}

export default SocialPost