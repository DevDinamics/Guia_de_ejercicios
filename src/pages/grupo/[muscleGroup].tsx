import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { exercisesData } from '../../Data/exercises';
import ExerciseCard from '../../components/ExerciseCard';
import ExerciseFilter from '../../components/ExerciseFilter';
import Link from 'next/link';
import Head from 'next/head';

export default function MuscleGroupPage() {
  const router = useRouter();
  const { muscleGroup } = router.query;
  const [difficulty, setDifficulty] = useState<string>('');

  if (!router.isReady) return <div>Cargando...</div>;
  if (!muscleGroup || typeof muscleGroup !== 'string') {
    return <div>Grupo no encontrado</div>;
  }

  const exercises = exercisesData[muscleGroup] || [];
  const filteredExercises = difficulty
    ? exercises.filter(ex => ex.difficulty === difficulty)
    : exercises;

  return (
    <>
      <Head>
        <title>Ejercicios de {muscleGroup}</title>
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-block mb-6 text-blue-600 hover:underline">
            ← Volver al inicio
          </Link>
          
          <h1 className="text-3xl font-bold capitalize mb-2">
            Ejercicios de {muscleGroup}
          </h1>
          
          <ExerciseFilter 
            currentDifficulty={difficulty}
            onDifficultyChange={setDifficulty}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((exercise) => (
              <ExerciseCard key={exercise.id} {...exercise} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}