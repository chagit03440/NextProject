import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin">
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;