'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import User from '@/app/types/user';
import { getUser } from '@/app/services/userService';
import UserCard from '@/app/components/UserCard';
import Link from 'next/link';

const Page = () => {
  const params = useParams();
  const [user, setUser] = useState<User | null>(null);
  const postId = params?.postId as string; // Cast postId to string type

  useEffect(() => {
    const fetchUserData = async () => {
      if (!postId) return;
      try {
        const userData: User = await getUser(Number(postId)); // Convert postId to number
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [postId]);

  return (
    <div className='mt-20 flex justify-center items-center flex-col'>
      {user ? (
        <UserCard user={user} showButton={false} />
      ) : (
        <p>Loading user data...</p>
      )}
      <Link
        href="/pages/users"
        className="bg-red-500 text-white mt-5 px-4 py-2 rounded-md text-center"
      >
        Back
      </Link>
    </div>
  );
};

export default Page;
