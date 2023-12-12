"use client"

import { SocialProfileInterface } from '@/lib/types';
import React, { useEffect, useState } from 'react';

interface SocialProfilesProps {
  socialProfiles: SocialProfileInterface;
}

const SocialProfiles: React.FC<SocialProfilesProps> = () => {
  const [socialProfiles, setSocialProfiles] = useState([])
  useEffect(() => {
    const fetchSocialProfiles = async () => {
      const response = await fetch("/api/ocoya/social-profiles")
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`)
          }
          return response.json();
        })
        .then(data => {
          // console.log('data from server :>> ', data);
          setSocialProfiles(data.socialProfiles);
        })
        .catch(error => {
          console.log('error fetching data :>> ', error);
          return <div>No Social Profiles Yet</div>
        })
    }
    fetchSocialProfiles();
  }, []);
  let socProf = socialProfiles.map((socialProfile: any) => {
    // console.log('socialProfile :>> ', socialProfile);
    return (
      <div color='red' key={socialProfile?.id}>
        <h2>{socialProfile?.provider} - <span>{socialProfile?.name}</span></h2>
      </div>
    )
  })

  return (
    <div>
      <h1>SocialProfiles</h1>
      {socProf}
    </div>
  )
}

export default SocialProfiles