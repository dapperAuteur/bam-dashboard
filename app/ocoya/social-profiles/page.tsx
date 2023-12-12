"use client"

import React, { useEffect, useState } from 'react';
// import useSWR from 'swr';
// import { fetcher } from '@/lib/ocoyaCall';



const SocialProfiles = () => {
  const [socialProfiles, setSocialProfiles] = useState([])
  useEffect(() => {
    const fetchSocialProfiles =async () => {
      const response = await fetch("/api/ocoya/social-profiles");
      const socialProfiles = await response.json();
      console.log('socialProfiles :>> ', socialProfiles);
      setSocialProfiles(socialProfiles);
    }
  
    // return () => {
    //   second
    // }
    fetchSocialProfiles();
  }, []);
  

  return (
    <div>
      <h1>SocialProfiles</h1>
      
    </div>
  )
}

export default SocialProfiles