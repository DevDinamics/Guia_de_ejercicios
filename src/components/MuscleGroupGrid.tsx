import React from 'react';
import Link from 'next/link';

const muscleGroups = [
  { name: 'Abdominales', icon: '🔄', count: 15 },
  { name: 'Bíceps', icon: '💪', count: 12 },
  { name: 'Espalda', icon: '🧱', count: 18 },
  { name: 'Gemelos', icon: '🦵', count: 8 },
  { name: 'Hombro', icon: '🏋️', count: 14 },
  { name: 'Pectorales', icon: '🏋️‍♂️', count: 16 },
  { name: 'Pierna', icon: '🦿', count: 20 },
  { name: 'Tríceps', icon: '💪', count: 10 },
];

export default function MuscleGroupGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {muscleGroups.map((group) => (
        <Link 
          key={group.name}
          href={`/grupo/${group.name.toLowerCase()}`}
          passHref
        >
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center">
              <span className="text-3xl mr-4">{group.icon}</span>
              <div>
                <h3 className="text-lg font-medium">{group.name}</h3>
                <p className="text-sm text-gray-500">{group.count} ejercicios</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}