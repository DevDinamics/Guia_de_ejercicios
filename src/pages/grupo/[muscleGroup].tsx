import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { exercisesData } from '../../Data/exercises';
import ExerciseCard from '../../components/ExerciseCard';
import SearchBar from '../../components/SearchBar';
import BackButton from '../../components/BackButton';
import Head from 'next/head';

const MuscleGroupPage: React.FC = () => {
  const router = useRouter();
  const { muscleGroup } = router.query;
  const [searchTerm, setSearchTerm] = useState<string>('');

  if (!router.isReady) return <div>Cargando...</div>;
  if (!muscleGroup || typeof muscleGroup !== 'string') {
    return <div>Grupo muscular no encontrado</div>;
  }

  const exercises = exercisesData[muscleGroup] || [];
  
  const filteredExercises = exercises.filter(ex => 
    ex.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ex.muscles.some(m => m.toLowerCase().includes(searchTerm.toLowerCase())) ||
    ex.equipo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Ejercicios de {muscleGroup} | Guía Fitness</title>
      </Head>

      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <BackButton />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-6 capitalize">
            Ejercicios de {muscleGroup}
          </h1>
          
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder={`Buscar en ${muscleGroup}...`}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.length > 0 ? (
              filteredExercises.map((exercise) => (
                <ExerciseCard key={exercise.id} {...exercise} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 mb-4">No se encontraron ejercicios</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Mostrar todos
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MuscleGroupPage;