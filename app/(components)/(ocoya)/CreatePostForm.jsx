"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreatePostForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    "caption": "I'm building my first tool, a dashboard to manage my content and share it using the #Ocoya API, https://l.witus.online/ocoya-facebook-community #iWriteCode",
    "mediaUrls": [
      "https://res.cloudinary.com/devdash54321/image/upload/v1702504554/iwritecode/iwritecode-logo-twice-gbig9rravnf4lb6cakfq.png"
    ],
    "socialProfileIds": [
      "clbkbkp2y0028mi0fkeygttez"
    ],
    "scheduledAt": "2024-01-01T00:30:00.000Z",
    "isShadow": false
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit =async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/ocoya/create-post", {
      method: 'POST',
      body: JSON.stringify({formData}),
      'Content-Type': 'application/json'
    });
    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.errorMessage);
    } else {
      router.refresh();
      // router.push('/ocoya/scheduled-posts')
      router.push('/ocoya/create-post');
    }
  }

  return (
    <>
      <p className="text-red-500">{errorMessage}</p>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2">
          <h1>Create New Social Media Post</h1>
          <label>Caption</label>
          <input
            id="caption"
            name="caption"
            type="text"
            onChange={handleChange}
            required={true}
            value={formData.caption}
            className="m-2 bg-slate-400 rounded"/>
            <label>Media Urls (images and/or videos)</label>
            <input
              id="mediaUrls"
              name="mediaUrls"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.mediaUrls}
              className="m-2 bg-slate-400 rounded"/>
              <label>Social Profile(s) (May use more than one per post.)</label>
              <input
                id="socialProfileIds"
                name="socialProfileIds"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.socialProfileIds}
                className="m-2 bg-slate-400 rounded"/>
                <label>Schedule To Post:</label>
                <input
                  id="scheduledAt"
                  name="scheduledAt"
                  type="date"
                  onChange={handleChange}
                  required={true}
                  value={formData.scheduledAt}
                  className="m-2 bg-slate-400 rounded"/>
                <input
                  type="submit"
                  value="Create Post"
                  className="bg-blue-300 hover:bg-blue-100"/>
      </form>
    </>
  )
}

export default CreatePostForm;