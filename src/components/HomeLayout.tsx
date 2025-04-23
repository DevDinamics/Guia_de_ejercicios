import React, { ReactNode } from 'react';
import Head from 'next/head';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Guía de Ejercicios</title>
        <meta name="description" content="Guía completa de ejercicios para el gimnasio" />
      </Head>
      
      <div className="min-h-screen bg-gray-900 text-white relative">
        <div className="fixed inset-0 bg-[url('/images/gym-background.jpg')] bg-cover bg-center opacity-30 z-0" />
        <div className="fixed inset-0 bg-black/60 z-0" />
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </>
  );
};

export default HomeLayout;