"use client"
import React, { useEffect, useState } from 'react';
import PostApi from '../types/PostApi';
import { postApi } from '../services/userService';

const PostsApi = () => {
  const [posts, setPosts] = useState<PostApi[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await postApi();
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded shadow-md bg-white">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsApi;
