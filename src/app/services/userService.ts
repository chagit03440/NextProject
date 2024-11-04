import User from '@/app/types/user';
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