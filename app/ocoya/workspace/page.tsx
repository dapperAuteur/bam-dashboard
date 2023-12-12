"use client"

import WorkspaceCard from "@/app/(components)/(ocoya)/Workspace";
import { WorkspaceInterface } from "@/lib/types";
import React, { useEffect, useState } from 'react';

interface WorkspaceProps {
  workspace: WorkspaceInterface
}

const Workspace: React.FC<WorkspaceProps> = () => {
  const [workspace, setWorkspace] = useState({});
  useEffect(() => {
    const fetchWorkspace = async () => {
      const response = await fetch("/api/ocoya/workspace")
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network fetchWorkspace response was not ok: ${response.statusText}`)
          }
          return response.json();
        })
        .then(data => {
          // console.log('fetchWorkspace data from server:>> ', data);
          setWorkspace(data.workspace);
        })
        .catch(error => {
          console.log('error fetchWorkspace data :>> ', error);
          return <div>No Workspace Yet</div>
        })
    }
  
    fetchWorkspace();
  }, []);
  // console.log('workspace :>> ', workspace);
  return (
    <>
      <div>
        <h1>Workspace</h1>
        <WorkspaceCard data={workspace}/>
      </div>
    </>
  )
}

export default Workspace;