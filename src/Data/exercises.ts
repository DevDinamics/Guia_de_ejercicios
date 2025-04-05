export interface Exercise {
  id: number;
  title: string;
  difficulty: 'Principiante' | 'Intermedia' | 'Avanzado';
  muscles: string[];
  duration: string;
  steps: string[];
  tip: string;
  imageUrl?: string;
}

export const exercisesData: Record<string, Exercise[]> = {
  espalda: [
    {
      id: 1,
      title: 'Remo con Mancuerna a una Mano',
      difficulty: 'Principiante',
      muscles: ['Espalda', 'Bíceps'],
      duration: '15-20 min',
      steps: [
        'Pisa la banda elástica con ambos pies',
        'Agarra los extremos con las manos',
        'Mantén la espalda recta y tira hacia tu torso',
        'Vuelve lentamente a la posición inicial'
      ],
      tip: 'Mantén los codos cerca del cuerpo',
      imageUrl: '/ejercicios/espalda/Remo_con_mancuerna_a_una_mano.webp'
    },
    {
      id: 2,
      title: 'Remo con barra',
      difficulty: 'Intermedia',
      muscles: ['Espalda', 'Bíceps'],
      duration: '25-35 min',
      steps: [
        'Agáchate con las rodillas flexionadas',
        'Agarra la barra con las manos',
        'Levanta la barra hacia tu torso',
        'Baja de manera controlada'
      ],
      tip: 'No uses demasiado peso al principio',
      imageUrl: '/images/espalda/remo-barra.jpg'
    },
    {
      id: 3,
      title: 'Dominadas',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps'],
      duration: '30-45 min',
      steps: [
        'Agarra la barra con las manos separadas',
        'Tira hacia arriba hasta que la barbilla supere la barra',
        'Baja lentamente'
      ],
      tip: 'Evita balancear el cuerpo',
      imageUrl: '/images/espalda/dominadas.jpg'
    }
  ],
  // Añade más grupos musculares aquí
};