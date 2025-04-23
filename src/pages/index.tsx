import React from 'react';
import HomeLayout from '../components/HomeLayout';
import Head from 'next/head';
import MuscleGroupGrid from '../components/MuscleGroupGrid';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <HomeLayout>
      <Head>
        <title>Guía de Ejercicios Fitness</title>
        <meta name="description" content="Aprenda ejercicios adecuados" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      
      <main className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6 text-white">Ejercicios</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-200">
            ¿<strong className="text-white">Nuevo en el gym</strong>? ¿<strong className="text-white">Ya tienes experiencia</strong>? Aquí hay algo para ti.
          </p>
          
          <MuscleGroupGrid />
          
          <footer className="mt-16 text-center text-gray-300  items-center px-4">

           

           <p className="py-8">&copy; 2025 Fitgo | design by: Arm</p>

           
          </footer>
        </div>
      </main>
    </HomeLayout>
  );
}