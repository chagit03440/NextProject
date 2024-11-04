import React from 'react';
import User from '../types/user';
import Image from 'next/image';

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        width={120}
        height={120}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
