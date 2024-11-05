import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UserCardProps from '../types/UserCardProps';



const UserCard: React.FC<UserCardProps> = ({ user, showButton = true }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        width={120}
        height={120}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
      {showButton && ( 
        <div className='bg-black w-full flex justify-center items-center py-4'>
          <Link className='text-white text-center text-lg' href={`/pages/${user.id}`}>
            Show User
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserCard;
