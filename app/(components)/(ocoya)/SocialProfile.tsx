import { SocialProfileInterface } from '@/lib/types';
import React from 'react'

interface SocialProfilesProps {
  socialProfiles: SocialProfileInterface;
}

const SocialProfile: React.FC<SocialProfilesProps> = ({data}) => {
  // console.log('data :>> ', data);
  return (
    <div>
      <h2>{data?.provider} Profile</h2>
      <h2>- <span>{data?.name}</span></h2>
    </div>
  )
}

export default SocialProfile