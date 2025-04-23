import React, { useState } from 'react';
import Image from 'next/image';

interface ExerciseCardProps {
  id: number;
  title: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  muscles: string[];
  equipo: string;
  steps: string[];
  tip: string;
  imageUrl?: string;
}

const FacebookLoader = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="h-full w-full bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer" 
         style={{
           backgroundSize: '200% 100%',
           animation: 'shimmer 1.5s infinite linear'
         }}>
    </div>
  </div>
);

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  title,
  difficulty,
  muscles,
  equipo,
  steps,
  tip,
  imageUrl
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const difficultyColors = {
    Principiante: 'bg-black',
    Intermedio: 'bg-black',
    Avanzado: 'bg-black'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col font-sans">
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
        
        {/* Imagen con Loader al estilo Facebook */}
        {imageUrl && (
          <div className="relative aspect-[4/3] w-full mb-4 rounded-md overflow-hidden">
            {isLoading && !imageError && <FacebookLoader />}
            
            <Image
              src={imageUrl}
              alt={`Ejercicio ${title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={`object-cover transition-all duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100 hover:scale-105'
              }`}
              quality={85}
              unoptimized={imageUrl.startsWith('http')}
              onLoadingComplete={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setImageError(true);
              }}
            />
            
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <span className="text-gray-400 text-sm">Ups.. imagen no disponible</span>
              </div>
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
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Consejo */}
        <div className="bg-orange-50 p-3 rounded-md border-l-4 border-orange-500 mt-auto">
          <p className="text-orange-800">
            <span className="font-medium">💡 Consejo:</span> {tip}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;