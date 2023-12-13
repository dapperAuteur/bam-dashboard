"use client"

import ScheduleSocialPost from '@/app/(components)/(ocoya)/ScheduleSocialPost'
import React, { useEffect, useState } from 'react'

const ScheduledSocialPost = () => {
  const [scheduledPosts, setScheduledPosts] = useState([]);
  useEffect(() => {
    const fetchScheduledSocialPosts = async () => {
      const response = await fetch("/api/ocoya/schedule-social-posts")
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network fetchScheduledSocialPosts response was not ok: ${response.statusText}`)
          }
          return response.json();
        })
        .then(data => {
          console.log('data from server :>> ', data);
          setScheduledPosts(data.data);
        })
        .catch(error => {
          console.log('error fetchScheduledSocialPosts data :>> ', error);
          return <div>No Social Profiles Yet</div>
        })
    }
    fetchScheduledSocialPosts();
  }, []);
  
  return (
    <div>
      <h1>Scheduled Social Post</h1>
      {
        scheduledPosts?.map((scheduledPost) => {
          // console.log('scheduledPost :>> ', scheduledPost);
          return (
            <ScheduleSocialPost key={scheduledPost.id} data={scheduledPost}/>
          )
        })
      }
    </div>
  )
}

export default ScheduledSocialPost