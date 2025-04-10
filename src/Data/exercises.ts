export interface Exercise {
  id: number;
  title: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  muscles: string[];
  equipo: string;
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
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/espalda/Remo_con_mancuerna_a_una_mano.webp'
    },
    {
      id: 2,
      title: 'Remo con barra',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps', 'Hombro posterior'],
      equipo: 'Barra olímpica + discos (o barra hexagonal)',
      steps: [
        'Agáchate con las rodillas flexionadas',
        'Agarra la barra con las manos',
        'Levanta la barra hacia tu torso',
        'Baja de manera controlada'
      ],
      tip: 'Evita arquear la espalda baja, mantén el torso firme.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/espalda/Remo_con_barra.webp'
    },
    {
      id: 3,
      title: 'Dominadas',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps'],
      equipo: 'Barra fija (agarre pronado o supinado).',
      steps: [
        'Agarra la barra con las manos separadas',
        'Tira hacia arriba hasta que la barbilla supere la barra',
        'Baja lentamente'
      ],
      tip: 'Evita balancear el cuerpo',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/espalda/Behind-the-Neck-Pull-Up_.webp'
    },
    {
      id: 4,
      title: 'Jalón abierto al pecho',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps'],
      equipo: 'Polea alta + barra recta.',
      steps: [
        'Siéntate en la máquina con agarre amplio (palmas hacia adelante)',
        'Mantén el torso recto y tira de la barra hacia el pecho',
        'Contrae los omóplatos al bajar la barra',
        'Regresa controladamente sin soltar tensión'
      ],
      tip: 'Evita arquear la espalda baja; usa peso moderado',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/espalda/Jalón_con_agarre_ancho.webp'
    },
    {
      id: 5,
      title: 'Pull Over con Mancuerna',
      difficulty: 'Principiante',
      muscles: ['Dorsales, Pectoral mayor', 'Bíceps'],
      equipo: 'Mancuerna + banco plano.',
      steps: [
        'Acostado en banco, sostén la mancuerna sobre el pecho.',
        'Bájala lentamente detrás de la cabeza (brazos semiflexionados).',
        'Regresa a la posición inicial usando dorsales.',
      ],
      tip: 'No hiperextiendas hombros; controla el movimiento.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/espalda/Pull_over_con_%20mancuerna_.webp'
    },
    {
      id: 6,
      title: 'Remo en Maquina',
      difficulty: 'Principiante',
      muscles: ['Dorsales, Trapecios', 'Bíceps'],
      equipo: 'Máquina de remo sentado.',
      steps: [
        'Siéntate erguido, agarra el triángulo con agarre neutro.',
        'Jala hacia el abdomen bajo, codos pegados al cuerpo.',
        'Pausa 1-2 segundos al contraer escápulas.',
        'Regresa lentamente sin redondear espalda.'
      ],
      tip: '"Imagina que empujas el suelo con los talones" para activar dorsales.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/espalda/Remo_en_máquina%20.webp'
    }
  ],
  // Se añaden mas ejercicios
};