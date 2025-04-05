import React from 'react';

interface ExerciseFilterProps {
  currentDifficulty: string;
  onDifficultyChange: (difficulty: string) => void;
}

const ExerciseFilter: React.FC<ExerciseFilterProps> = ({ 
  currentDifficulty, 
  onDifficultyChange 
}) => {
  const difficulties = ['Principiante', 'Intermedia', 'Avanzado'];

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-8">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Filtrar por dificultad</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onDifficultyChange('')}
          className={`px-3 py-1 rounded-md text-sm ${
            !currentDifficulty ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Todos
        </button>
        {difficulties.map((difficulty) => (
          <button
            key={difficulty}
            onClick={() => onDifficultyChange(difficulty)}
            className={`px-3 py-1 rounded-md text-sm ${
              currentDifficulty === difficulty 
                ? difficulty === 'Principiante' 
                  ? 'bg-green-600 text-white'
                  : difficulty === 'Intermedia'
                    ? 'bg-yellow-500 text-white'
                    : 'bg-red-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {difficulty}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExerciseFilter;