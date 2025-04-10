import React from 'react';

interface ExerciseFilterProps {
  currentDifficulty: string;
  onDifficultyChange: (difficulty: string) => void;
}

const ExerciseFilter: React.FC<ExerciseFilterProps> = ({ 
  currentDifficulty, 
  onDifficultyChange 
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-lg font-medium text-gray-900 mb-3">Filtrar por dificultad</h2>
      <div className="flex flex-wrap gap-2">
        {['', 'Principiante', 'Intermedia', 'Avanzado'].map((level) => (
          <button
            key={level || 'all'}
            onClick={() => onDifficultyChange(level)}
            className={`px-4 py-2 rounded-md text-sm transition-colors ${
              currentDifficulty === level
                ? level === 'Principiante'
                  ? 'bg-green-600 text-white'
                  : level === 'Intermedia'
                    ? 'bg-yellow-500 text-white'
                    : level === 'Avanzado'
                      ? 'bg-red-600 text-white'
                      : 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {level || 'Todos'}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExerciseFilter;