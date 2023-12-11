"use client"

import React from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/ocoyaCall';



const SocialProfiles = () => {

  const { data, error, isLoading } = useSWR('social-profiles', fetcher,)

  if (error) {
    return <div>Failed to load</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data) {
    console.log('NO data :>> ', data);
    return null
  }
  console.log('data :>> ', data);

  return (
    <div>SocialProfiles</div>
  )
}

export default SocialProfiles