export interface Exercise {
  id: number;
  title: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado' | 'Principiante-Intermedio' | 'Intermedio-Avanzado';
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
      title: 'Pull Up (Dominadas)',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps'],
      equipo: 'Barra fija (agarre pronado o supinado).',
      steps: [
        'Agarra la barra con las manos separadas',
        'Tira hacia arriba hasta que la barbilla supere la barra',
        'Baja lentamente'
      ],
      tip: 'Evita balancear el cuerpo',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/espalda/Pull-Up_.webp'
    },
    {
      id: 4,
      title: 'Jalón abierto al pecho',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','antebrazos'],
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
    },
    {
      id: 7,
      title: 'Remo con barra T',
      difficulty: 'Intermedio',
      muscles: ['Dorsales, Trapecios'],
      equipo: 'Máquina de barra T',
      steps: [
        'Apoya pecho en el soporte.',
        'Jala lentamente la barra al pecho.',
        'Baja sin perder tensión.',
      ],
      tip: '"Usa un cinturón lumbar si el peso es alto, y mantén el core activo para evitar balanceos".',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/espalda/Remo_en_barra_T.webp'
    },
    {
      id: 8,
      title: 'Jalón con triangulo',
      difficulty: 'Principiante',
      muscles: ['Dorsales inferiores, Bíceps','antebrazos'],
      equipo: 'Polea alta + agarre en triángulo.',
      steps: [
        'Siéntate, toma en triangulo con las manos juntas.',
        'Jala hacia el esternón (pecho superior).',
        'Mantén el torso firme y recto.',
        'Regresa lento sin soltar tensión.'
      ],
      tip: ' Enfócate en contraer la espalda baja.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/espalda/Jalón_al_pecho_con_agarre_cerrado.webp'
    },
    {
      id: 9,
      title: 'Jalón tras nuca',
      difficulty: 'Avanzado',
      muscles: ['Dorsales, deltoides posteriores','antebrazos'],
      equipo: 'Polea alta + barra amplia',
      steps: [
        'Siéntate erguido, barra sobre cabeza.',
        'Jala la barra a la nuca (codos apuntando al suelo).',
        'Evita inclinar el torso hacia adelante.',
        'Regresa controlado sin soltar tensión.'
      ],
      tip: 'Solo para usuarios con movilidad dorsal excelente.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/espalda/Jalón_tras_nuca%20.webp'
    },
    {
      id: 10,
      title: 'Remo con barra agarre supinado',
      difficulty: 'Intermedio',
      muscles: ['Dorsales, bíceps', 'trapecios'],
      equipo: 'Polea alta + barra amplia',
      steps: [
        'Torso ~45°, agarre supinado (palmas arriba).',
        'Jala la barra al ombligo (codos pegados al cuerpo).',
        'Pausa de 1 seg. en la contracción máxima.',
        'Baja la barra en 3 segundos.'
      ],
      tip: 'Activa glúteos para proteger la lumbar.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/espalda/Remo%20inclinado_con_barra_con_agarre_supinado.webp'
    },
    {
      id: 11,
      title: 'Pull Over con barra corta',
      difficulty: 'Intermedio',
      muscles: ['Dorsales, bíceps', 'trapecios'],
      equipo: 'Polea alta + barra corta',
      steps: [
        'Coloca la polea en la posición más alta.',
        'Párate en frente de la polea, lleva la barra hacia abajo en arco (codos semiflexionados).',
        'Extiende hasta nivel de muslos, contrae dorsales 1 seg.',
        'Regresa controlado (3 seg.) sintiendo el estiramiento.'
      ],
      tip: 'Usa un peso moderado para evitar lesiones en hombros y lumbares.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/espalda/Jalón_en_polea_con_cuerda%20.webp'
    },
    {
      id: 12,
      title: 'Jalón al pecho con agarre invertido',
      difficulty: 'Principiante',
      muscles: ['Dorsales inferiores', 'bíceps','antebrazos'],
      equipo: 'Polea alta + barra recta',
      steps: [
        'Siéntate, toma la barra conn agarre invertido (palmas hacia ti)',
        'Jala hacia la clavícula.',
        'Controla el movimiento.',
        'Regresa lento sin soltar tensión.'
      ],
      tip: 'Prueba una pausa de 2 segundos cuando la barra toque tu clavícula para mayor activación muscular.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/espalda/Jalón_al_pecho_con_agrarre_invertido.webp'
    }
  ],
  // Se añaden mas ejercicios
};