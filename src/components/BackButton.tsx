import React from 'react';
import { useRouter } from 'next/router';

const BackButton: React.FC = () => {
  const router = useRouter();
  
  return (
    <button 
      onClick={() => router.push('/')}
      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6 group"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path 
          fillRule="evenodd" 
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
          clipRule="evenodd" 
        />
      </svg>
      Volver al inicio
    </button>
  );
};

export default BackButton;