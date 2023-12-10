import React from 'react'
import VideoPlayer from '../(components)/VideoPlayer'
import { useRouter } from 'next/navigation'

const VideoTitle = (findMedia) => {
  console.log('findMedia :>> ', findMedia);
  const router = useRouter();
  const { video } = router?.query;
  console.log('video :>> ', video);
  return (
    <div>
      <h1>Video Title</h1>
      <VideoPlayer data={findMedia}/>
    </div>
  )
}

export default VideoTitle