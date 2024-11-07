import User from '../types/user';
import PostApi from '@/app/types/PostApi';
import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control':"no-cache"
  },
});

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await instance.get('/users');
    // Map and filter only the required properties for each user
    const users = response.data.users.map((user: User) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      image: user.image,
    }));
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; 
  }
};

// Function to get a specific user by ID
export const getUser = async (userId:number): Promise<User> => {
  try {
    const response = await instance.get(`/users/${userId}`);
    // Map the user data to match the User interface
    const user: User = {
      id: response.data.id,
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      email: response.data.email,
      image: response.data.image,
    };
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error; 
  }
};

export const postApi = async (): Promise<PostApi[]> => {
  try {
    const response = await fetch('http://localhost:3000/api/apigroup', {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.statusText}`);
    }

    const data = await response.json();

    // Access the `posts` array from the response and map it to `PostApi` structure
    const posts: PostApi[] = data.posts.map((post: PostApi) => ({
      id: post.id,
      title: post.title,
      body: post.body,
    }));

    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; // Re-throw to allow handling in the calling component
  }
};

export const createUser = async (user: { username: string; email: string; password: string }) => {
  try {
    const response = await fetch('/api/mongoRoute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    
    if (!response.ok) {
      throw new Error(`Error creating user`);
    }

    const data = await response.json();
    console.log('User Created:', data);
  } catch (error) {
    console.error('Error creating user:', error);
    throw error; 
  }
};

