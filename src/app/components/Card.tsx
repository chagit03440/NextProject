import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="w-[300px] h-[400px] bg-white shadow-lg rounded-lg text-center flex flex-col justify-between space-y-6">
      <div>
        <Image
          src="/images/avatar.jpg"
          alt="Woman Avatar"
          height={200} 
          width={200} 
          className="rounded-full mx-auto"
        />
        <h2 className="text-3xl font-bold text-gray-800 mt-4">Chagit Orenstein</h2>
        <p className="text-xl text-gray-500">Fullstack Developer</p>
        <a
          href="https://www.linkedin.com/in/chagit-orenstein-887560226/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 text-blue-500 hover:text-blue-700 mt-4"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <div className="bg-black py-2 rounded-b-lg">
        <p className="text-white text-center">Contact</p>
      </div>
    </div>
  );
};

export default Card;
