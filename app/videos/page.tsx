"use client"

import useSWR from 'swr';
import { fetcher } from '../../lib/serverCall';
import MediaCard from '../(components)/MediaCard';
import { MediaInterface } from '@/lib/types';

const queryMedia = `
  {
    findMedia(limit: 10) {
      media {
        _id
        duration
        media_link
        media_type
        thumbnail_url
        title
        externalMediaFile
      }
    }
  }
`

interface MediaListInterface {
  data: MediaInterface[];
  video: MediaInterface;
}

export default function Videos(){
  const { data, error, isLoading } = useSWR(queryMedia, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
  if (error) {
    return <div>Failed to load</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data) {
    console.log('data :>> ', data);
    return null
  }

  const { findMedia } = data;
  const { media } = findMedia;

  return (
    <>
      <div>Videos</div>
      {
        media.map((video: MediaInterface) => {
          return(
            <MediaCard key={video._id} data={video}/>
          )
        })
      }
    </>
  )
}

// export default Videos