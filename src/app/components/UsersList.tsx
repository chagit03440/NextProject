"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import useUserStore from '../store/usersListStore';
import User from '../types/user';

const UsersList = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const users = useUserStore((state) => state.users);
  const addUser = useUserStore((state) => state.addUser);
  const deleteUser = useUserStore((state) => state.deleteUser);

  const handleAddUser = () => {
    if (firstName && lastName && email && image) {
      const newUser: User = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        image,
      };
      addUser(newUser);
      setFirstName('');
      setLastName('');
      setEmail('');
      setImage('');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-16 mb-6">Users List</h1>
      <div className="flex gap-8 items-start w-full max-w-4xl">
        <div className="flex flex-col gap-4 max-w-xs">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            className="border border-gray-300 rounded-md p-2"
          />
          <button
            onClick={handleAddUser}
            className="bg-green-500 text-white rounded-md p-2 hover:bg-green-600"
          >
            Add User
          </button>
        </div>
        
        <ul className="flex-1 space-y-4">
          {users.map((user: User) => (
            <li key={user.id} className="flex items-center gap-4 p-4 border border-gray-300 rounded-md">
              <Image src={user.image} alt={`${user.firstName} ${user.lastName}`} width={50} height={50} className="rounded-full" />
              <div className="flex flex-col">
                <p className="font-semibold">{user.firstName} {user.lastName}</p>
                <p className="text-gray-500">{user.email}</p>
              </div>
              <button
                onClick={() => deleteUser(user.id)}
                className="ml-auto bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;
