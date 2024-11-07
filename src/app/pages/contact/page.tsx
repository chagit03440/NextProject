"use client"
import React, { useState } from 'react';
import { createUser } from '@/app/services/userService'; 

const ContactPage = () => {

  const [newUser, setNewUser] = useState({ username: '', email: '', password: '' });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleAddUser = async () => {
    try {
      await createUser(newUser);
      setNewUser({ username: '', email: '', password: '' });
      
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Contact Page</h1>
      
      <h2 className="text-lg font-semibold mb-2">Add a New User</h2>
      <div className="mb-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={newUser.username}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={newUser.password}
          onChange={handleInputChange}
          className="border p-2 mr-2"
        />
        <button onClick={handleAddUser} className="bg-blue-500 text-white p-2">
          Add User
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
