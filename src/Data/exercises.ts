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
  hombro: [
    {
      id: 1,
      title: 'Cruces inversos en polea alta',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Cruces_inversos_en_polea_alta.webp'
    },
    {
      id: 2,
      title: 'Elevación lateral con mancuerna',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevacion_lateral_con_mancuerna_.webp'
    },
    {
      id: 3,
      title: 'Elevación frontal con barra',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevaciones_frontales_con_barra.webp'
    },
    {
      id: 4,
      title: 'Elevaciones frontales con polea baja',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevaciones_frontales_con_cable_a_una_mano.webp'
    },
    {
      id: 5,
      title: 'Elevaciones posteriores con mancuerna',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevaciones_posteriores_para_hombros_%22pájaro%22.webp'
    },
    {
      id: 6,
      title: 'Elevaciones frontales con mancuerna a dos manos',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevación%20frontal_con_mancuerna_a_dos_manos%20.webp'
    },
    {
      id: 7,
      title: 'Elevaciones laterales con polea baja',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevación%20lateral%20con%20cable%20a%20una%20mano.webp'
    },
    {
      id: 8,
      title: 'Elevaciones frontales con mancuerna unilateral',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevación_frontal_con%20_mancuerna.webp'
    },
    {
      id: 9,
      title: 'Elevación frontal con mancuerna agarre neutro',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevación_frontal_con_mancuernas_agarre_neutro.webp'
    },
    {
      id: 10,
      title: 'Press Militar con barra',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_militar_de_pie.webp'
    },
    {
      id: 11,
      title: 'Press Militar con mancuerna',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_Militar_con_mancuernas.webp'
    },
    {
      id: 12,
      title: 'Press de hombro con mancuerna',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_de_hombro_con_mancuerna_.webp'
    },
    {
      id: 13,
      title: 'Press de hombro en maquina',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_de_hombro_en_maquina_smith.webp'
    },
    {
      id: 14,
      title: 'Press de hombro tras nuca',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_militar_de_pie_tras_nuca.webp'
    },
    {
      id: 15,
      title: 'Press de hombro con barra',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_militar_sentado_con_barra.webp'
    },
    {
      id: 16,
      title: 'Press de hombro tras nuca sentado',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_tras_nuca_sentado.webp'
    },
  ],

  //////----PECTORALES----//////


  pectorales: [ 
    {
      id: 1,
      title: 'Aperturas en banco plano',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Aperturas_con_mancuernas%20.webp'
    },
    {
      id: 2,
      title: 'Aperturas en banco Inclinado',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Aperturas_inclinadas_con_mancuernas.webp'
    },
    {
      id: 3,
      title: 'Fondos en Crossover',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Cable-Crossover_.webp'
    },
    {
      id: 4,
      title: 'Peck Deck',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Peck-Deck_.webp'
    },
    {
      id: 5,
      title: 'Press de banca Inclinado con mancuerna',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Press%20banca%20inclinado%20con%20mancuernas%20.webp'
    },
    {
      id: 6,
      title: 'Press de banca',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Press-plano-bar.webp'
    },
    {
      id: 7,
      title: 'Press de banca con mancuerna',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Press_de_banca_con_mancuernas.webp'
    },
    {
      id: 8,
      title: 'Press de banca declinado',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Press_de_banca_declinado_con_barra.webp'
    },
    {
      id: 9,
      title: 'Press de banca declinado con mancuerna',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Aperturas_con_mancuernas%20.webp'
    },
    {
      id: 10,
      title: 'Press de banca en maquina',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Press_de_banca_en_máquina_sentado.webp'
    },
    {
      id: 11,
      title: 'Press de banca inclinado',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Press_de_banca_inclinado_con_barra.webp'
    },
    {
      id: 12,
      title: 'Push Ups',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Push-Ups_.webp'
    },
    {
      id: 13,
      title: 'Fondos en paralelas',
      difficulty: 'Intermedio',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Parallel-Dip-Bar_.webp'
    },

  ],


    //////----PIERNA----////// 

  pierna :[
    {
      id: 1,
      title: 'Puentes de glúteos con banda de resistencia',
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
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Banded-Glute-Bridge_.webp'
    },
    {
      id: 2,
      title: 'Sentadilla bulgara con barra',
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
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Barbell-Bulgarian-Split-Squat_.webp'
    },

    {
      id: 3,
      title: 'Hip Thrust con barra',
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
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Barbell-Hip-Thrust_.webp'
    },

    {
      id: 4,
      title: 'Peso muerto rumano con barra',
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
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Barbell-Romanian-Deadlift_.webp'
    },

    {
      id: 5,
      title: 'Bird Dog',
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
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Bird-Dog_.webp'
    },

    {
      id: 6,
      title: 'Frog Pumps',
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
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Bodyweight-Frog-Pump_.webp'
    },

    {
      id: 7,
      title: 'Glute Bridge',
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
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Bodyweight-Glute-Bridge_.webp'
    },

    {
      id: 8,
      title: 'Sentadilla',
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
      imageUrl: 'https://github.com/DevDinamics/baco_de_imagenes_guia/blob/main/pierna/Bodyweight-Squat_.png?raw=true'
    },

    {
      id: 9,
      title: 'Burpees',
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
      imageUrl: 'https://github.com/DevDinamics/baco_de_imagenes_guia/blob/main/pierna/Burpees_.png?raw=true'
    },

    {
      id: 10,
      title: 'Donkey Kicks',
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
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Donkey-Kicks_.webp'
    },

    {
      id: 11,
      title: 'Goblet Squat',
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
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Dumbbell-Goblet-Squat_.webp'
    },

    {
      id: 12,
      title: 'Peso muerto rumano con mancuerna',
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
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Dumbbell-Romanian-Deadlift_.webp'
    },

    {
      id: 13,
      title: 'Step Ups',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Dumbbell-Step-Up_.webp'
    },

    {
      id: 14,
      title: 'Fire Hydrant',
      difficulty: 'Avanzado',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Fire-Hydrant_.webp'
    },

    {
      id: 15,
      title: 'Sentadila Frontal con barra',
      difficulty: 'Avanzado',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Front-Squat_.webp'
    },

    {
      id: 16,
      title: 'Buenos Días con barra',
      difficulty: 'Avanzado',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Good-Morning_.webp'
    },

    {
      id: 17,
      title: 'Hack Squat',
      difficulty: 'Avanzado',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Hack-Squat_.webp'
    },

    {
      id: 18,
      title: 'Saltos pliometricos',
      difficulty: 'Avanzado',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Jump-Squat_.webp'
    },

    {
      id: 19,
      title: 'Sentadilla sumo',
      difficulty: 'Avanzado',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Kettlebell-Sumo-Deadlift_.webp'
    },

    {
      id: 20,
      title: 'Kettlebell Swings',
      difficulty: 'Avanzado',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Kettlebell-Swing_.webp'
    },

    {
      id: 21,
      title: 'Knee Tucks Jump',
      difficulty: 'Avanzado',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Knee-Tuck-Jumps_.webp'
    },

    {
      id: 22,
      title: 'Leg Extensions en maquina',
      difficulty: 'Avanzado',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Leg-Extension_.webp'
    },
    {
      id: 23,
      title: 'Prensa de piernas',
      difficulty: 'Avanzado',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Leg-Press_.webp'
    },

    {
      id: 24,
      title: 'Zancadas',
      difficulty: 'Avanzado',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Lunge_.webp'
    },

    {
      id: 25,
      title: 'Femoral acostado en maquina',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Lying-Leg-Curl_.webp'
    },

    {
      id: 26,
      title: 'Abductor en maquina',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Seated-Hip-Abduction-Machine_.webp'
    },

    {
      id: 27,
      title: 'Leg Curl sentado en maquina',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Seated-Leg-Curl_.webp'
    },

    {
      id: 28,
      title: 'Peso Muerto a una pierna',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Single-Leg-Bodyweight-Deadlift_.webp'
    },

    {
      id: 29,
      title: 'Leg Extensions a una pierna',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Single-Leg-Extension_.webp'
    },
    {
      id: 30,
      title: 'Glute Bridge a una pierna',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Single-Leg-Glute-Bridge_.webp'
    },

    {
      id: 31,
      title: 'Sentadilla Libre',
      difficulty: 'Avanzado',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Squat_.webp'
    },

    {
      id: 32,
      title: 'Abducción en polea baja',
      difficulty: 'Intermedio',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Standing-Cable-Abduction_.webp'
    },

    {
      id: 33,
      title: 'Patada de glúteo en polea baja',
      difficulty: 'Intermedio',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Standing-Cable-Kickback_.webp'
    },

    {
      id: 34,
      title: 'Sentadiolla Isometrica',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Wall-Sit_.webp'
    },

  //////----BICEPS----//////

  ],

  bíceps:[
    {
      id: 1,
      title: 'Curl de bíceps con mancuerna',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Alternating-Dumbbell-Curl_.webp'
    },

    {
      id: 2,
      title: 'Curl de bíceps con Barra',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Barbell-Curl_.webp'
    },

    {
      id: 3,
      title: 'Curl de bíceps con Barra',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Alternating-Dumbbell-Curl_.webp'
    },

    {
      id: 4,
      title: 'Curl Concentrado',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Dumbbell-Concentration-Curl_.webp'
    },

    {
      id: 5,
      title: 'Curl con Barra Z',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/EZ-Barbell-Curl_.webp'
    },

    {
      id: 6,
      title: 'Curl Predicador',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/EZ-Barbell-Preacher-Curl_.webp'
    },

    {
      id: 7,
      title: 'Curl de biceps agarre neutro',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Hammer-Curl_.webp'
    },

    {
      id: 8,
      title: 'Curl de biceps en banco inclinado',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Incline-Dumbbell-Curl.webp'
    },

    {
      id: 9,
      title: 'Curl de biceps agarre invertido',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Reverse-Barbell-Curl_.webp'
    },

    {
      id: 10,
      title: 'Curl de biceps con cuerda',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Rope-Cable-Curl_.webp'
    },

    {
      id: 11,
      title: 'Curl de muñeca sentado',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Seated-Barbell-Wrist-Curl_.webp'
    },

    {
      id: 12,
      title: 'Curl de muñeca agarre invertido',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Seated-Barbell-Wrist-Extension_.webp'
    },

    {
      id: 13,
      title: 'Curl de biceps polea baja',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Single-Arm-Low-Pulley-Cable-Curl_.webp'
    },

    {
      id: 14,
      title: 'Curl de biceps en polea alta',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Standing-High-Pulley-Cable-Curl_.webp'
    },

    {
      id: 15,
      title: 'Curl de biceps con barra polea baja',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Straight-Bar-Low-Pulley-Cable-Curl_.webp'
    },
  ],
                         //////----TRICEPS----//////
  tríceps:[
    {
      id: 1,
      title: 'Medios fondos',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Bench-Dips_.webp'
    },

    {
      id: 2,
      title: 'Extension de triceps con cuerda',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Cable-Rope-Pushdown_.webp'
    },
    {
      id: 3,
      title: 'Press California',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Close-Grip-Bench-Press_.webp'
    },
    {
      id: 4,
      title: 'Copa a 2 manos',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Dumbbell-Overhead-Triceps-Extension_99242f13-.webp'
    },

    {
      id: 5,
      title: 'Extensión posterior de triceps',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Kickback_.webp'
    },

    {
      id: 6,
      title: 'Press Frances con mancuerna',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Lying-Dumbbell-Triceps-Extension_.webp'
    },
    {
      id: 7,
      title: 'Press Frances con barra Z',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Lying-Triceps-Extension_.webp'
    },
    {
      id: 8,
      title: 'Fondos en paralelas',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Parallel-Dip-Bar_.webp'
    },

    {
      id: 9,
      title: 'Extensiones con barra agarre invertido',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Reverse-Grip-Cable-Triceps-.webp'
    },

    {
      id: 10,
      title: 'Extensión de tricep sentado con barra Z',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Seated-Barbell-French-Press_.webp'
    },

    {
      id: 11,
      title: 'Extensión de tricep a una mano en polea',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Single-Arm-Cable-Triceps-Extension-with-.webp'
    }, 
    {
      id: 12,
      title: 'Extensión de tricep a una mano en polea agarre invertido',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Single-Arm-Cable-Triceps-Extension_.webp'
    },  
    {
      id: 13,
      title: 'Extensión de tricep con barra en polea alta',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Triceps-Pressdown_.webp'
    },  
  ],

  abdominales:[
    {
      id: 1,
      title: 'Crunch con piernas flexionadas',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Bent-Knee-Reverse-Crunch_.webp'
    }, 

    {
      id: 2,
      title: 'Crunch',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Crunch_.webp'
    }, 
    {
      id: 3,
      title: 'Elevación de piernas en suspensión',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Hanging-Leg-Raise_.webp'
    }, 

    {
      id: 4,
      title: 'Crunch con brazos extendidos',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Long-Arm-Crunch_.webp'
    }, 

    {
      id: 5,
      title: 'Crunch lateral',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Oblique-Crunch_.webp'
    }, 

    {
      id: 6,
      title: 'Planchas',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Plank_.webp'
    }, 
    {
      id: 7,
      title: 'Crunch en polea alta',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Rope-Ab-Pulldown_.webp'
    }, 
    {
      id: 8,
      title: 'Planchas Dinamicas',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/6a503edb92efb3fdc763103fc624b037fd40bc24/abdominales/plank-get-ups.svg'
    }, 
  ],
  gemelos: [
    {
      id: 1,
      title: 'Elevación de talon sentado',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/gemelos/Seated-Calf-Raise_8c8641b2-10f2-4dc8-9adb-8d80fd1a16d0_600x600.webp'
    },

    {
      id: 2,
      title: 'Elevación de talón de pie',
      difficulty: 'Principiante',
      muscles: ['Gluteos', 'Bíceps','Hombro posterior'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Agarra la mancuerna con la mano libre',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Mantén el hombro estable y evita girar el torso al levantar la mancuerna.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/gemelos/Standing-Calf-Raise_61746b47-98aa-49ee-bb97-5a19562592b9_600x600.webp'
    },
  ]


  // Se añaden mas ejercicios
};