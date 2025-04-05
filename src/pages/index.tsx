import React from 'react';
import Head from 'next/head';
import MuscleGroupGrid from '../components/MuscleGroupGrid';

export default function Home() {
  return (
    <>
      <Head>
        <title>Guía de Ejercicios Fitness</title>
        <meta name="description" content="Aprenda ejercicios adecuados" />
      </Head>
      <main className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6"> Ejercicios </h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Base de datos con más de 100 guías de ejercicios
          </p>
          <MuscleGroupGrid />
        </div>
      </main>
    </>
  );
}