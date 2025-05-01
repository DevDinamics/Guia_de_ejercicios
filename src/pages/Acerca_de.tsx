import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import ScrollToTopButton from '../components/ScrollToTopButton';


const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Acerca de la Guía Fitgo Smart Guide</title>
        <meta
          name="description"
          content="Información sobre la guía de ejercicios Fitgo"
        />
      </Head>

      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 relative">
              <Image
                src="https://github.com/DevDinamics/baco_de_imagenes_guia/blob/main/images/logo_fitgo.png?raw=true"
                alt="Logo Fitgo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Acerca de la guía 
          </h1>

          <div className="bg-white p-6 rounded-lg shadow-md prose max-w-none">
            <p className="text-lg mb-4">
              Fitgo Smart Guide es una guía 100% digital pensada para ayudarte a entrenar de
              forma segura y efectiva.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">
              ¿Para qué sirve?
            </h2>
            <p className="mb-4">
              Aquí no vas a encontrar rutinas ni programas complicados. Lo que
              sí vas a encontrar es una biblioteca clara y visual con ejercicios
              explicados paso a paso. Cada ejercicio incluye:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Una ilustración que te muestra cómo se hace</li>
              <li>Los músculos que trabaja</li>
              <li>El equipo necesario</li>
              <li>Una guía breve con consejos importantes</li>
            </ul>

            <p className="mb-4">
              Ideal si eres principiante o si quieres asegurarte de estar
              haciendo bien cada movimiento.
            </p>

            <p className="mb-4">
              La guía está diseñada para que puedas consultarla desde cualquier
              dispositivo, ya sea en casa o en el gym. Así puedes aprender,
              repasar y mejorar tu técnica sin perder tiempo buscando
              información confusa.
            </p>

            <p className="font-medium">
              Fitgo es simple, directa y creada por entrenadores que saben lo
              que necesitas para empezar con confianza.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" legacyBehavior>
              <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200">
                ⬅︎ Volver al inicio
              </a>
            </Link>
          </div>
        </div>
      </div>


      <footer className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="text-black">&copy; 2025 Fitgo </p>
          <p className="text-rigth text-black ">design by: Arm </p>
          <a href="#" className="text-black hover:text-gray-600 no-underline">
              fitgosport.mx@gmail.com
          </a>
          

        </div>
      </footer>
      <ScrollToTopButton />

    </>
  );
};

export default AboutPage;
