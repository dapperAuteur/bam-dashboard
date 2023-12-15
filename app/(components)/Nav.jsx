import Link from "next/link";
import { getServerSession } from 'next-auth';
import { options } from './../api/auth/[...nextauth]/options';

const Nav = async () => {
  const session = await getServerSession(options);

  return (
    <div className="bg-gray-600">
      <nav className="flex justified-between items-center w-full px-10 py-4">
        <div>Dashboard</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/create-user">Create User</Link>
          <Link href="/client-member">Client Member</Link>
          <Link href="/member">Member</Link>
          <Link href="/public">Public</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/ocoya/create-ocoya-post">Create Post</Link>
          <Link href="/ocoya/social-profiles">Social Profiles</Link>
          <Link href="/ocoya/scheduled-posts">Scheduled Posts</Link>
          {
            session ? (
              <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
            ) : (
              <Link href="/api/auth/signin">Login</Link>
            )
          }
        </div>
      </nav>
    </div>
  )
}

export default Nav;