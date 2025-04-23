import React from 'react';

const ImageLoader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
      <div className="animate-pulse flex space-x-2">
        <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
};

export default ImageLoader;