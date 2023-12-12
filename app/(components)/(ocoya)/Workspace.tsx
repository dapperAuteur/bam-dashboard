import { WorkspaceInterface } from "@/lib/types";
import Link from "next/link";
import React from "react";

interface WorkspaceProps {
  data: WorkspaceInterface;
}

const WorkspaceCard: React.FC<WorkspaceProps> = ({data}) => {
  // console.log('data :>> ', data);
  return (
    <>
      <Link href='/ocoya/social-profiles'>
        <h3>Name: {data?.name}</h3>
        <h3>Email: {data?.owner?.email}</h3>
      </Link>
    </>
  )
}

export default WorkspaceCard;