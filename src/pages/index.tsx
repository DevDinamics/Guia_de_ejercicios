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
          <h1 className="text-4xl font-bold text-center mb-9"> Ejercicios </h1>
          <p className="text-xl text-center mb-10 max-w-3xl mx-auto">
          ¿<strong>Nuevo en el gym</strong>? ¿<strong>Ya tienes experiencia</strong>? Aquí hay algo para ti.
          </p>
          <MuscleGroupGrid />
        </div>
      </main>
    </>
  );
}