import { MediaInterface } from '@/lib/types';
import React from 'react'

interface VideoListProps {
  data: MediaInterface;
}

const VideoPlayer: React.FC<VideoListProps> = ({data}) => {
  console.log('data :>> ', data);
  return (
    <div>VideoPlayer</div>
  )
}

export default VideoPlayer