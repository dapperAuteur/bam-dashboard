"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/users", {
      method: 'POST',
      body: JSON.stringify({formData}),
      "content-type": "application/json",
    });
    if (!res.ok){
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push('/');
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2">
          <h1>Create New User</h1>
          <label>Username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
            required={false}
            value={formData.username}
            className="m-2 bg-slate-400 rounded"/>
          <label>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            required={false}
            value={formData.email}
            className="m-2 bg-slate-400 rounded"/>
          <label>Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            required={false}
            value={formData.password}
            className="m-2 bg-slate-400 rounded"/>
            <label>Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              required={false}
              value={formData.confirmPassword}
              className="m-2 bg-slate-400 rounded"/>
            <input
              type="submit"
              value="Create User"
              className="bg-blue-300 hover:bg-blue-100"/>
      </form>
      <p className="text-red-500">{errorMessage}</p>
    </>
  )
}

export default UserForm;