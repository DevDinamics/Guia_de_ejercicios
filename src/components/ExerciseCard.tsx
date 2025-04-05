import React from 'react';
import Image from 'next/image';


interface ExerciseCardProps {
  title: string;
  difficulty: 'Principiante' | 'Intermedia' | 'Avanzado';
  muscles: string[] | string;
  duration: string;
  imageUrl?: string;
  steps: string[];
  tip: string;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  title,
  difficulty,
  muscles,
  duration,
  imageUrl,
  steps,
  tip,
}) => {
  const normalizeMuscles = (musclesInput: string[] | string): string[] => {
    if (Array.isArray(musclesInput)) return musclesInput;
    if (typeof musclesInput === 'string') return musclesInput.split(',').map(m => m.trim());
    return [];
  };

  const musclesArray = normalizeMuscles(muscles);

  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Principiante': return 'bg-green-600';
      case 'Intermedia': return 'bg-yellow-500';
      case 'Avanzado': return 'bg-red-600';
      default: return 'bg-blue-600';
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Header con color según dificultad */}
      <div className={`${getDifficultyColor()} p-4 text-white`}>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center mt-2">
          <span className="text-sm font-medium">🔥 {difficulty}</span>
        </div>
      </div>
      
      {/* Contenido */}
      <div className="p-4">
        <div className="mb-4">
          <p className="flex items-center text-gray-700">
            <span className="mr-1">🏋🏼</span>
            <span>Músculos principales {musclesArray.join(', ')}</span>
            <span className="mr-1">🏋🏼</span>
            <span>Músculos secundarios {musclesArray.join(', ')}</span>

          </p>
          <p className="flex items-center text-gray-700 mt-1">
            <span className="mr-2">🕒</span>
            <span>Duración: {duration}</span>
          </p>
        </div>
        
        {imageUrl && (
          <div className="relative h-48 mb-4 rounded-md overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">Guía para realizar el ejercicio</h3>
          <ul className="space-y-2">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">📌</span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
          <p className="flex items-start text-blue-800">
            <span className="mr-2">💡</span>
            <span className="font-medium">Consejo:</span>
            <span className="ml-1">{tip}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;