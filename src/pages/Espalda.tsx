import React, { useState } from 'react';
import { exercisesData } from '../Data/exercises';
import ExerciseCard from '../components/ExerciseCard';
import Link from 'next/link';
import Head from 'next/head';

const EspaldaPage = () => {
  const [filters, setFilters] = useState({
    difficulty: ''
  });

  const filteredExercises = exercisesData.espalda.filter(exercise => {
    if (filters.difficulty && exercise.difficulty !== filters.difficulty) {
      return false;
    }
    return true;
  });

  return (
    <>
      <Head>
        <title>Ejercicios de Espalda | Guía Fitness</title>
        <meta name="description" content="Ejercicios para desarrollar la espalda" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb y título */}
          <div className="mb-8">
            <Link href="/" className="text-blue-600 hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Volver al inicio
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ejercicios de Espalda</h1>
          <p className="text-gray-600 mb-8">{filteredExercises.length} ejercicios disponibles</p>

          {/* Filtros */}
          <div className="bg-white p-4 rounded-lg shadow mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Filtrar por dificultad</h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setFilters({ difficulty: '' })}
                className={`px-4 py-2 rounded-md ${!filters.difficulty ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilters({ difficulty: 'Principiante' })}
                className={`px-4 py-2 rounded-md ${filters.difficulty === 'Principiante' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Principiante
              </button>
              <button
                onClick={() => setFilters({ difficulty: 'Intermedia' })}
                className={`px-4 py-2 rounded-md ${filters.difficulty === 'Intermedia' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Intermedia
              </button>
              <button
                onClick={() => setFilters({ difficulty: 'Avanzado' })}
                className={`px-4 py-2 rounded-md ${filters.difficulty === 'Avanzado' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'}`}
              >
                Avanzado
              </button>
            </div>
          </div>

          {/* Lista de ejercicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((exercise) => (
              <ExerciseCard key={exercise.id} {...exercise} />
            ))}
          </div>

          {filteredExercises.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No se encontraron ejercicios con los filtros seleccionados</p>
              <button 
                onClick={() => setFilters({ difficulty: '' })}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Mostrar todos
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EspaldaPage;