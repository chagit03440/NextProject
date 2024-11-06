"use client"
import PostApi from '@/app/types/PostApi';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Page = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/api/apigroup');
      if (!response.ok) {
        throw new Error('Error fetching posts:');
      }
      return response.json(); 
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  return (
    <ul>
      {data.posts.map((post:PostApi) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Page;
