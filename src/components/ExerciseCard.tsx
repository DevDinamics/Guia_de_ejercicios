import React from 'react';
import Image from 'next/image';

interface ExerciseCardProps {
  id: number;
  title: string;
  difficulty: 'Principiante' | 'Intermedia' | 'Avanzado';
  muscles: string[];
  equipo: string;
  steps: string[];
  tip: string;
  imageUrl?: string;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  title,
  difficulty,
  muscles,
  equipo,
  steps,
  tip,
  imageUrl
}) => {
  const difficultyColors = {
    Principiante: 'bg-green-600',
    Intermedia: 'bg-yellow-500',
    Avanzado: 'bg-red-600'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all equipo-300 h-full flex flex-col">
      {/* Cabecera */}
      <div className={`${difficultyColors[difficulty]} p-4 text-white`}>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center mt-2">
          <span className="text-sm font-medium">🔥 {difficulty}</span>
        </div>
      </div>
      
      {/* Contenido */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-4">
          <p className="flex items-center text-gray-700">
            <span className="mr-3">💪🏻</span>
            <span><strong>Músculos:</strong> {muscles.join(', ')}</span>
          </p>
          <p className="flex items-center text-gray-700 mt-2">
            <span className="mr-3">🏋🏼</span>
            <span><strong>Equipo:</strong> {equipo}</span>
          </p>
        </div>
        
        {/* Imagen */}
        {imageUrl && (
          <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden flex-shrink-0">
            {imageUrl.startsWith('http') ? (
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            ) : (
              <Image
                src={imageUrl}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform equipo-300"
              />
            )}
          </div>
        )}
        
        {/* Pasos */}
        <div className="mb-4 flex-grow">
          <h3 className="font-semibold text-lg text-gray-900 mb-2">Guía paso a paso:</h3>
          <ul className="space-y-2">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">📌</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Consejo */}
        <div className="bg-blue-50 p-3 rounded-md border-l-4 border-blue-500 mt-auto">
          <p className="text-blue-800">
            <span className="font-medium">💡 Consejo:</span> {tip}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;