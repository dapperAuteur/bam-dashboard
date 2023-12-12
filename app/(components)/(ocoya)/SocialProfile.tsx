import { SocialProfileInterface } from '@/lib/types';
import React from 'react'

interface SocialProfilesProps {
  socialProfiles: SocialProfileInterface;
}

const SocialProfile: React.FC<SocialProfilesProps> = ({data}) => {
  // console.log('data :>> ', data);
  return (
    <div>
      <span>SocialProfile</span>
      <h2>{data?.provider} - <span>{data?.name}</span></h2>
    </div>
  )
}

export default SocialProfile