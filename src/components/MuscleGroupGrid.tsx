import React from 'react';
import Link from 'next/link';

const muscleGroups = [
  { name: 'Abdominales', icon: '➜', count: 8 },
  { name: 'Bíceps', icon: '➜', count: 15 },
  { name: 'Espalda', icon: '➜', count: 12 },
  { name: 'Gemelos', icon: '➜', count: 2 },
  { name: 'Hombro', icon: '➜', count: 16 },
  { name: 'Pectorales', icon: '➜', count: 13 },
  { name: 'Pierna', icon: '➜', count: 34 },
  { name: 'Tríceps', icon: '➜', count: 13 },
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
          <div className="bg-[#FFA100] p-6 rounded-lg shadow-md  hover:bg-[#FFFFFF] hover:shadow-lg cursor-pointer">
            <div className="flex items-center cursor-pointer">
              <div className="flex-1">
                {}
                {}
                <h3 className="text-lg font-bold text-black">
                  {group.name}
                </h3>
                <p className="text-sm text-black">{group.count} Ejercicios</p>
              </div>
              <span className="text-3xl text-black ml-2 hover:translate-x-1 transition-transform duration-200 ">{group.icon}</span>{" "}
              {}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}