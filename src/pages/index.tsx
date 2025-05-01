import React from "react";
import HomeLayout from "../components/HomeLayout";
import Head from "next/head";
import MuscleGroupGrid from "../components/MuscleGroupGrid";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <HomeLayout>
      <Head>
        <title>Guía de Ejercicios Fitness</title>
        <meta name="description" content="Aprenda ejercicios adecuados" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Contenido principal (con máximo ancho) */}
      <main className="relative z-10 py-12 px-4 min-h-[calc(100vh-200px)]">
        {" "}
        {/* Ajusta la altura mínima según necesites */}
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6 text-white">
            Ejercicios
          </h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-200">
            ¿<strong className="text-white">Nuevo en el gym</strong>? ¿
            <strong className="text-white">Ya tienes experiencia</strong>? Aquí
            hay algo para ti.
          </p>
          <MuscleGroupGrid />
        </div>
      </main>

      {/* Footer (fuera del contenedor principal, ancho completo) */}
      <footer className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="text-black">&copy; 2025 Fitgo </p>
          <p className="text-rigth text-black ">design by: Arm </p>
          <a href="#" className="text-black hover:text-gray-600 no-underline">
              fitgosport.mx@gmail.com
          </a>
          

        </div>
      </footer>
    </HomeLayout>
  );
}
