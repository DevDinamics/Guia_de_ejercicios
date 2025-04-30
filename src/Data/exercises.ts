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
      difficulty: 'Intermedio',
      muscles: ['Hombros posteriores, trapecio'],
      equipo: 'Poleas altas',
      steps: [
        'Colócate en medio de las poleas y toma la cuerda contraria con cada mano',
        'Da un paso hacia adelante y mantén una ligera inclinación del torso',
        'Abre los brazos hacia atrás, manteniendo una leve flexión en los codos',
        'Controla el regreso a la posición inicial'
        ],
      tip: 'Evita balancear el cuerpo, concéntrate en activar los deltoides posteriores.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Cruces_inversos_en_polea_alta.webp'
    },
    {
      id: 2,
      title: 'Elevación lateral con mancuerna',
      difficulty: 'Principiante',
      muscles: ['Deltoides laterales'],
      equipo: 'Mancuernas',
      steps: [
        'Ponte de pie con una mancuerna en cada mano',
        'Eleva los brazos lateralmente hasta la altura de los hombros',
        'Pausa un segundo arriba',
        ' Baja lentamente a la posición inicial'
        ],
      tip: 'No subas más allá de los hombros y mantén una ligera flexión en los codos.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevacion_lateral_con_mancuerna_.webp'
    },
    {
      id: 3,
      title: 'Elevación frontal con barra',
      difficulty: 'Intermedio',
      muscles: ['Deltoides anteriores'],
      equipo: 'Barra',
      steps: [
        'Sujeta la barra con agarre prono al ancho de hombros',
        'Eleva la barra al frente hasta la altura de los hombros',
        'Haz una pausa breve arriba',
        'Baja controladamente'
        ],
      tip: 'Evita el impulso con el tronco, mantén la espalda recta.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevaciones_frontales_con_barra.webp'
    },
    {
      id: 4,
      title: 'Elevaciones frontales con polea baja',
      difficulty: 'Intermedio',
      muscles: ['Deltoides anteriores'],
      equipo: 'Polea baja con cuerda o barra',
      steps: [
        'Coloca la polea en la posición más baja',
        'Sujeta el accesorio con ambas manos y mantén el cuerpo recto',
        'Mantén la espalda recta y lleva el peso hacia tu cadera',
        'Baja lentamente'
        ],
      tip: 'No balancees el cuerpo, el control es clave para activar bien el hombro.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevaciones_frontales_con_cable_a_una_mano.webp'
    },
    {
      id: 5,
      title: 'Elevaciones posteriores con mancuerna',
      difficulty: 'Principiante',
      muscles: ['Deltoides posteriores, romboides'],
      equipo: 'Mancuernas',
      steps: [
        'Inclina el torso hacia adelante con la espalda recta',
        'Con mancuernas en las manos, abre los brazos en forma de “T”',
        'Pausa arriba y baja con control',
        ],
      tip: 'No encorves la espalda, enfócate en el movimiento de los hombros.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevaciones_posteriores_para_hombros_%22pájaro%22.webp'
    },
    {
      id: 6,
      title: 'Elevaciones frontales con mancuerna a dos manos',
      difficulty: 'Principiante',
      muscles: ['Deltoides anteriores'],
      equipo: 'Mancuerna',
      steps: [
        'Sujeta una mancuerna con ambas manos frente a ti',
        'Eleva al frente hasta la altura de los hombros',
        'Pausa y baja lentamente',
        ],
      tip: 'Mantén el core firme para evitar inclinarte hacia atrás.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevación%20frontal_con_mancuerna_a_dos_manos%20.webp'
    },
    {
      id: 7,
      title: 'Elevaciones laterales con polea baja',
      difficulty: 'Intermedio',
      muscles: ['Deltoides laterales'],
      equipo: 'Polea baja',
      steps: [
        'Coloca la polea en la posición más baja',
        'Cruza el cuerpo para tomar el mango con la mano contraria',
        'Eleva lateralmente hasta la altura del hombro',
        'Baja con control'
        ],
      tip: 'Haz el ejercicio de forma unilateral para mejor enfoque en cada lado.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevación%20lateral%20con%20cable%20a%20una%20mano.webp'
    },
    {
      id: 8,
      title: 'Elevaciones frontales con mancuerna unilateral',
      difficulty: 'Principiante',
      muscles: ['Deltoides anteriores'],
      equipo: 'Mancuerna',
      steps: [
        'Sujeta una mancuerna con una mano',
        'Eleva al frente hasta la altura del hombro',
        'Baja con control y repite con el otro brazo'
        ],
      tip: 'Alternar brazos te permite concentrarte más en la técnica.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevación_frontal_con%20_mancuerna.webp'
    },
    {
      id: 9,
      title: 'Elevación frontal con mancuerna agarre neutro',
      difficulty: 'Principiante',
      muscles: ['Deltoides anteriores'],
      equipo: 'Mancuernas',
      steps: [
        'Toma las mancuernas con las palmas hacia tu cuerpo (agarre neutro)',
        'Eleva al frente hasta la altura de los hombros',
        'Baja controladamente'
        ],
      tip: 'El agarre neutro reduce tensión en las muñecas y puede ser más cómodo.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Elevación_frontal_con_mancuernas_agarre_neutro.webp'
    },
    {
      id: 10,
      title: 'Press Militar con barra',
      difficulty: 'Avanzado',
      muscles: ['Hombros, tríceps'],
      equipo: 'Barra',
      steps: [
        'Sujeta la barra al frente, a la altura de los hombros',
        'Empuja la barra hacia arriba hasta extender los brazos',
        'Baja de forma controlada'
        ],
      tip: ' Mantén el core firme y evita arquear la espalda.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_militar_de_pie.webp'
    },
    {
      id: 11,
      title: 'Press Militar con mancuerna',
      difficulty: 'Intermedio',
      muscles: ['Hombros, tríceps'],
      equipo: 'Mancuernas',
      steps: [
        'Siéntate o mantente de pie con una mancuerna en cada mano',
        'Presiona hacia arriba hasta extender los brazos',
        'Baja controladamente',
        ],
      tip: 'La versión con mancuernas permite mejor rango de movimiento y menos tensión articular.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_Militar_con_mancuernas.webp'
    },
    {
      id: 12,
      title: 'Press de hombro con mancuerna sentado',
      difficulty: 'Principiante',
      muscles: ['Hombros, tríceps'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Sentado en un banco, sostén las mancuernas a los lados de la cabeza',
        'Presiona hacia arriba',
        'Haz una pausa arriba',
        'Baja lentamente'
        ],
      tip: 'Asegúrate de no juntar las mancuernas arriba para evitar tensión innecesaria en el cuello.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_de_hombro_con_mancuerna_.webp'
    },
    {
      id: 13,
      title: 'Press de hombro en maquina',
      difficulty: 'Principiante',
      muscles: ['Hombros, tríceps'],
      equipo: 'Máquina de press de hombro (o maquina Smith)',
      steps: [
        'Ajusta el asiento para que las asas queden al nivel de tus hombros',
        'Empuja hacia arriba hasta extender los brazos',
        'Regresa lentamente a la posición inicial'
        ],
      tip: 'deal para principiantes por su mayor estabilidad.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_de_hombro_en_maquina_smith.webp'
    },
    {
      id: 14,
      title: 'Press de hombro tras nuca',
      difficulty: 'Avanzado',
      muscles: ['Hombros, trapecio'],
      equipo: 'Barra',
      steps: [
        'Coloca la barra detrás de la cabeza, a la altura de los hombros',
        'Empuja hacia arriba con control',
        'Baja sin rebotar'
        ],
      tip: 'Este ejercicio puede ser riesgoso para los hombros. Solo hazlo si tienes buena movilidad.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_militar_de_pie_tras_nuca.webp'
    },
    {
      id: 15,
      title: 'Press de hombro con barra',
      difficulty: 'Intermedio',
      muscles: ['Hombros, tríceps'],
      equipo: 'Barra',
      steps: [
        'Con la barra al frente, empuja hacia arriba',
        'Extiende por completo',
        'Baja controladamente'
        ],
      tip: 'Alinea bien muñecas y codos para evitar molestias.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_militar_sentado_con_barra.webp'
    },
    {
      id: 16,
      title: 'Press de hombro tras nuca sentado',
      difficulty: 'Avanzado',
      muscles: ['Hombros, trapecio'],
      equipo: 'Barra + banco',
      steps: [
        'Siéntate con la espalda recta y sujeta la barra detrás de la cabeza',
        'Empuja hacia arriba',
        'Baja hasta la altura de los hombros sin forzar'
        ],
      tip: 'Usa poco peso y buena técnica para proteger tus hombros.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/hombro/Press_tras_nuca_sentado.webp'
    },
  ],

  //////----PECTORALES----//////


  pectorales: [ 
    {
      id: 1,
      title: 'Aperturas en banco plano',
      difficulty: 'Principiante',
      muscles: ['Pectoral mayor, deltoides anterior'],
      equipo: 'Banco plano + mancuernas',
      steps: [
        'Acuéstate en un banco plano con una mancuerna en cada mano',
        'Con los codos ligeramente flexionados, abre los brazos hacia los lados',
        'Baja hasta sentir un estiramiento en el pecho',
        'Junta los brazos de nuevo arriba sin chocar las mancuernas'
        ],
      tip: 'Controla el movimiento para evitar tensión en los hombros.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Aperturas_con_mancuernas%20.webp'
    },
    {
      id: 2,
      title: 'Aperturas en banco Inclinado',
      difficulty: 'Intermedio',
      muscles: ['Pectoral superior, deltoides anterior'],
      equipo: 'Banco inclinado + mancuernas',
      steps: [
        'Acuéstate en un banco inclinado con mancuernas',
        'Abre los brazos con codos ligeramente doblados',
        'Baja lentamente hasta estirar el pecho',
        'Sube nuevamente hasta casi juntar las mancuernas'
        ],
      tip: 'Ideal para desarrollar la parte alta del pecho. Mantén el control en todo momento.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Aperturas_inclinadas_con_mancuernas.webp'
    },
    {
      id: 3,
      title: 'Fondos en Crossover',
      difficulty: 'Intermedio',
      muscles: ['Pectoral mayor, tríceps'],
      equipo: 'Estación de poleas (crossover)',
      steps: [
        'Ajusta las poleas a una altura media',
        'Sujeta los mangos y colócate al centro',
        'Inclina ligeramente el torso y lleva los brazos hacia atrás',
        'Junta los brazos al frente como si abrazaras un árbol'
        ],
      tip: 'Mantén el pecho contraído durante todo el movimiento.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Cable-Crossover_.webp'
    },
    {
      id: 4,
      title: 'Peck Deck',
      difficulty: 'Principiante',
      muscles: ['Pectoral mayor'],
      equipo: 'Máquina Peck Deck',
      steps: [
        'Ajusta la máquina y siéntate con la espalda recta',
        'Sujeta los mangos y lleva los brazos al frente',
        'Junta las manos frente al pecho',
        'Regresa lentamente a la posición inicial'
        ],
      tip: 'No rebotes al abrir los brazos, mantén el control.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Peck-Deck_.webp'
    },
    {
      id: 5,
      title: 'Press de banca Inclinado con mancuerna',
      difficulty: 'Intermedio',
      muscles: ['Pectoral superior, tríceps, deltoides'],
      equipo: 'Mancuerna + banco (o superficie estable)',
      steps: [
        'Acuéstate en un banco inclinado',
        'Sostén una mancuerna en cada mano a la altura del pecho',
        'Empuja hacia arriba hasta extender los brazos',
        'Baja lentamente'
        ],
      tip: 'Ideal para enfatizar la parte superior del pecho.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Press%20banca%20inclinado%20con%20mancuernas%20.webp'
    },
    {
      id: 6,
      title: 'Press de banca',
      difficulty: 'Intermedio',
      muscles: ['Pectoral mayor, tríceps, deltoides'],
      equipo: 'Barra + banco plano',
      steps: [
        'Acuéstate en un banco plano',
        'Sujeta la barra con agarre ligeramente más ancho que los hombros',
        'Baja la barra hasta el pecho',
        'Empuja hacia arriba hasta extender los brazos'
        ],
      tip: 'Mantén los pies firmes en el suelo y el core activado.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Press-plano-bar.webp'
    },
    {
      id: 7,
      title: 'Press de banca con mancuerna',
      difficulty: 'Principiante',
      muscles: ['Pectoral mayor, tríceps, deltoides'],
      equipo: 'Banco plano + mancuernas',
      steps: [
        'Recuéstate en un banco plano',
        'Sostén una mancuerna en cada mano, al nivel del pecho',
        'Empuja hacia arriba hasta extender los brazos',
        'Baja controladamente'
        ],
      tip: 'Permite mayor rango de movimiento que con barra.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Press_de_banca_con_mancuernas.webp'
    },
    {
      id: 8,
      title: 'Press de banca declinado',
      difficulty: 'Intermedio',
      muscles: ['Pectoral inferior, tríceps'],
      equipo: 'Banco declinado + barra',
      steps: [
        'Acuéstate en un banco declinado con los pies asegurados',
        'Baja la barra al pecho bajo',
        'Empuja hacia arriba hasta extender los brazos',
        'Baja controladamente a la posición inicial'
        ],
      tip: 'Trabaja principalmente la parte baja del pectoral.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Press_de_banca_declinado_con_barra.webp'
    },
    {
      id: 9,
      title: 'Press de banca declinado con mancuerna',
      difficulty: 'Intermedio',
      muscles: ['Pectoral inferior, tríceps'],
      equipo: 'Banco declinado + mancuernas',
      steps: [
        'Recuéstate en un banco declinado',
        'Sostén las mancuernas a la altura del pecho',
        ' Presiona hacia arriba y baja con control'
        ],
      tip: 'Úsalo como variante para mayor activación del pectoral bajo.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Press_de_banca_declinado_con_mancuernas.webp'
    },
    {
      id: 10,
      title: 'Press de banca en maquina',
      difficulty: 'Principiante',
      muscles: ['Pectoral mayor, tríceps, deltoides'],
      equipo: 'Máquina de press horizontal',
      steps: [
        'Ajusta el asiento para que las asas estén a nivel del pecho',
        'Presiona hacia adelante hasta extender los brazos',
        'Regresa con control',
        ],
      tip: 'Buena opción para aprender la técnica sin preocuparse por el equilibrio.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Press_de_banca_en_máquina_sentado.webp'
    },
    {
      id: 11,
      title: 'Press de banca inclinado',
      difficulty: 'Intermedio',
      muscles: ['Pectoral superior, tríceps, deltoides'],
      equipo: 'Banco inclinado + barra',
      steps: [
        'Acuéstate en un banco inclinado',
        'Sujeta la barra y bájala hacia la parte alta del pecho',
        'Empuja hacia arriba hasta extender los brazos',
        ],
      tip: 'No bajes demasiado para evitar estrés en los hombros.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Press_de_banca_inclinado_con_barra.webp'
    },
    {
      id: 12,
      title: 'Push Ups',
      difficulty: 'Principiante',
      muscles: ['Pectoral mayor, tríceps, deltoides'],
      equipo: 'Peso corporal',
      steps: [
        'Apoya las manos al ancho de hombros y el cuerpo en línea recta',
        'Baja el pecho hacia el suelo',
        'Empuja hacia arriba hasta extender los brazos',
        ],
      tip: 'Mantén el core firme para una buena postura.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Push-Ups_.webp'
    },
    {
      id: 13,
      title: 'Fondos en paralelas',
      difficulty: 'Avanzado',
      muscles: ['Pectoral inferior, tríceps, deltoides'],
      equipo: 'Barras paralelas',
      steps: [
        'Sujétate de las paralelas y eleva el cuerpo',
        'Inclina ligeramente el torso hacia adelante',
        'Baja hasta que los codos estén en ángulo recto',
        'Empuja hacia arriba'
        ],
      tip: 'La inclinación hacia adelante activa más el pecho, si te mantienes recto trabajarás más los tríceps.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pectorales/Parallel-Dip-Bar_.webp'
    },

  ],


    //////----PIERNA----////// 

  pierna :[
    {
      id: 1,
      title: 'Puentes de glúteos con banda de resistencia',
      difficulty: 'Principiante',
      muscles: ['Glúteos, isquiotibiales, core'],
      equipo: 'Banda de resistencia',
      steps: [
        'Coloca la banda por encima de tus rodillas',
        'Acuéstate boca arriba con las rodillas flexionadas y pies apoyados',
        'Eleva las caderas apretando los glúteos',
        'Baja lentamente sin tocar el suelo'
        ],
      tip: 'Mantén la banda tensa durante todo el movimiento.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Banded-Glute-Bridge_.webp'
    },
    {
      id: 2,
      title: 'Sentadilla bulgara con barra',
      difficulty: 'Avanzado',
      muscles: ['Cuádriceps, glúteos, isquiotibiales'],
      equipo: 'Barra + banco',
      steps: [
        'Coloca un pie detrás de ti sobre un banco',
        'Sostén la barra en los trapecios',
        'Flexiona la rodilla delantera hasta formar un ángulo de 90°',
        'Empuja hacia arriba hasta la posición inicial'
        ],
      tip: 'Mantén el torso erguido y mira al frente.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Barbell-Bulgarian-Split-Squat_.webp'
    },

    {
      id: 3,
      title: 'Hip Thrust con barra',
      difficulty: 'Intermedio',
      muscles: ['Glúteos, isquiotibiales, core'],
      equipo: 'Barra + banco',
      steps: [
        'Apoya la parte alta de la espalda sobre un banco',
        'Coloca la barra sobre la cadera',
        'Eleva las caderas hasta formar una línea recta hombros-caderas-rodillas',
        'Baja controladamente'
        ],
      tip: 'Aprieta fuerte los glúteos arriba y evita arquear la espalda.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Barbell-Hip-Thrust_.webp'
    },

    {
      id: 4,
      title: 'Peso muerto rumano con barra',
      difficulty: 'Intermedio',
      muscles: ['Isquiotibiales, glúteos, espalda baja'],
      equipo: 'Barra',
      steps: [
        'Sujeta la barra con agarre pronado (palmas hacia ti)',
        'Mantén las rodillas ligeramente flexionadas',
        'Inclina el torso hacia adelante bajando la barra por los muslos',
        'Sube contrayendo glúteos e isquiotibiales'
        ],
      tip: 'Mantén la espalda recta durante todo el ejercicio.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Barbell-Romanian-Deadlift_.webp'
    },

    {
      id: 5,
      title: 'Bird Dog',
      difficulty: 'Principiante',
      muscles: ['Core, glúteos, espalda baja'],
      equipo: 'Peso corporal',
      steps: [
        'Colócate en cuatro apoyos (manos y rodillas)',
        'Extiende un brazo al frente y la pierna contraria hacia atrás',
        'Mantén la posición unos segundos',
        'Regresa y alterna lados'
        ],
      tip: 'Controla el movimiento y evita arquear la espalda.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Bird-Dog_.webp'
    },

    {
      id: 6,
      title: 'Frog Pumps',
      difficulty: 'Principiante',
      muscles: ['Glúteos'],
      equipo: 'Peso corporal o banda de resistencia',
      steps: [
        'Acuéstate boca arriba con las plantas de los pies juntas y rodillas abiertas',
        'Coloca los pies lo más cerca posible de los glúteos',
        'Eleva la cadera contrayendo los glúteos',
        'Baja sin tocar el suelo'
        ],
      tip: 'Mantén la apertura de rodillas para mayor activación del glúteo medio.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Bodyweight-Frog-Pump_.webp'
    },

    {
      id: 7,
      title: 'Glute Bridge',
      difficulty: 'Principiante',
      muscles: ['Glúteos, isquiotibiales'],
      equipo: 'Peso corporal (opcional banda o disco)',
      steps: [
        'Acuéstate boca arriba con rodillas flexionadas y pies apoyados',
        'Eleva las caderas apretando los glúteos',
        'Mantén la posición un segundo',
        'Baja de forma controlada'
        ],
      tip: 'No arquees la espalda al subir, mantén el core activado.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Bodyweight-Glute-Bridge_.webp'
    },

    {
      id: 8,
      title: 'Sentadilla',
      difficulty: 'Principiante',
      muscles: ['Cuádriceps, glúteos, isquiotibiales, core'],
      equipo: 'Peso corporal o barra/mancuernas',
      steps: [
        'Apoya una mano y rodilla en un banco',
        'Separa los pies al ancho de hombros',
        'Mantén el pecho erguido y la espalda recta',
        'Sube empujando con los talones'
        ],
      tip: 'No dejes que las rodillas pasen mucho más allá de los dedos de los pies.',
      imageUrl: 'https://github.com/DevDinamics/baco_de_imagenes_guia/blob/main/pierna/Bodyweight-Squat_.png?raw=true'
    },

    {
      id: 9,
      title: 'Burpees',
      difficulty: 'Intermedio',
      muscles: ['Piernas, pecho, core, cardiovascular'],
      equipo: 'Peso corporal',
      steps: [
        'Desde pie, baja en sentadilla y apoya las manos en el suelo',
        'Lanza los pies hacia atrás y haz una flexión',
        'Recupera la posición de sentadilla',
        'Salta hacia arriba con las manos extendidas'
        ],
      tip: 'Mantén un ritmo constante, prioriza la técnica.',
      imageUrl: 'https://github.com/DevDinamics/baco_de_imagenes_guia/blob/main/pierna/Burpees_.png?raw=true'
    },

    {
      id: 10,
      title: 'Donkey Kicks',
      difficulty: 'Principiante',
      muscles: ['Glúteo mayor'],
      equipo: 'Mancuerna, Peso corporal o banda de resistencia',
      steps: [
        'Colócate en cuatro apoyos (manos y rodillas)',
        'Eleva una pierna hacia atrás con la rodilla flexionada en 90°',
        'Aprieta el glúteo arriba',
        'Baja sin tocar el suelo y repite'
        ],
      tip: 'Evita arquear la espalda, el movimiento sale del glúteo.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Donkey-Kicks_.webp'
    },

    {
      id: 11,
      title: 'Goblet Squat',
      difficulty: 'Principiante',
      muscles: ['Cuádriceps, glúteos, core'],
      equipo: 'Mancuerna o kettlebell',
      steps: [
        'Sostén una mancuerna frente al pecho con ambas manos',
        'Separa los pies al ancho de los hombros',
        'Baja en sentadilla manteniendo el torso erguido',
        'Sube empujando con los talones'
        ],
      tip: 'Ideal para aprender la técnica de sentadilla con carga.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Dumbbell-Goblet-Squat_.webp'
    },

    {
      id: 12,
      title: 'Peso muerto rumano con mancuerna',
      difficulty: 'Intermedio',
      muscles: ['Isquiotibiales, glúteos, espalda baja'],
      equipo: 'Mancuernas',
      steps: [
        'Sujeta una mancuerna en cada mano frente a los muslos',
        'Flexiona ligeramente las rodillas',
        'Inclina el torso hacia adelante bajando las mancuernas por el frente',
        'Sube contrayendo glúteos e isquiotibiales'
        ],
      tip: 'Mantén la espalda recta y las mancuernas pegadas al cuerpo.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Dumbbell-Romanian-Deadlift_.webp'
    },

    {
      id: 13,
      title: 'Step Ups',
      difficulty: 'Intermedio',
      muscles: ['Cuádriceps, glúteos, core'],
      equipo: 'Banco, cajón o plataforma + opcional mancuernas',
      steps: [
        'Coloca un pie sobre una plataforma elevada',
        'Empuja con ese pie para subir completamente',
        'Baja de forma controlada',
        'Alterna piernas'
        ],
      tip: 'Evita impulsarte con la pierna trasera.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Dumbbell-Step-Up_.webp'
    },

    {
      id: 14,
      title: 'Fire Hydrant',
      difficulty: 'Principiante',
      muscles: ['Glúteo medio, glúteo mayor'],
      equipo: 'Peso corporal o banda de resistencia',
      steps: [
        'Colócate en posición de cuatro apoyos',
        'Eleva la pierna hacia el costado sin mover el torso',
        'Mantén la rodilla flexionada',
        'Regresa controladamente'
        ],
      tip: 'No gires la cadera, el torso debe permanecer estable.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Fire-Hydrant_.webp'
    },

    {
      id: 15,
      title: 'Sentadila Frontal con barra',
      difficulty: 'Avanzado',
      muscles: ['Cuádriceps, glúteos, core'],
      equipo: 'Barra',
      steps: [
        'Coloca la barra sobre los hombros frontales (clave: codos altos)',
        'Baja en sentadilla manteniendo el torso recto',
        'Empuja con los talones para subir',
        'Mantén los codos al frente durante todo el movimiento'
        ],
      tip: 'Requiere buena movilidad de muñeca y tobillo; no inclines el tronco.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Front-Squat_.webp'
    },

    {
      id: 16,
      title: 'Buenos Días con barra',
      difficulty: 'Intermedio',
      muscles: ['Isquiotibiales, glúteos, espalda baja'],
      equipo: 'Barra',
      steps: [
        'Coloca la barra sobre los trapecios (como en sentadilla)',
        'Flexiona ligeramente las rodillas',
        'Inclina el torso hacia adelante manteniendo la espalda recta',
        'Regresa contrayendo glúteos e isquios'
        ],
      tip: 'Comienza con poco peso y controla el movimiento para evitar lesiones lumbares.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Good-Morning_.webp'
    },

    {
      id: 17,
      title: 'Hack Squat',
      difficulty: 'Intermedio',
      muscles: ['Cuádriceps, glúteos'],
      equipo: 'Máquina Hack Squat',
      steps: [
        'Apoya la espalda en la máquina y coloca los hombros bajo los soportes',
        'Separa los pies a la anchura de los hombros',
        'Baja controladamente en sentadilla',
        ' Sube empujando con los talones'
        ],
      tip: 'Mantén la espalda totalmente apoyada en el respaldo y no bloquees las rodillas arriba.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Hack-Squat_.webp'
    },

    {
      id: 18,
      title: 'Saltos pliometricos',
      difficulty: 'Intermedio',
      muscles: ['Cuádriceps, glúteos, core'],
      equipo: 'Caja, banco o plataforma estable',
      steps: [
        'Ponte en posición de sentadilla parcial',
        'Impúlsate y salta sobre la plataforma',
        'Aterriza suave con ambas piernas',
        'Baja o salta hacia atrás con control'
        ],
      tip: 'Usa los brazos para ganar impulso y mantén las rodillas alineadas.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Jump-Squat_.webp'
    },

    {
      id: 19,
      title: 'Sentadilla sumo',
      difficulty: 'Principiante',
      muscles: ['Glúteos, aductores, cuádriceps'],
      equipo: 'Peso corporal o mancuerna/kettlebell',
      steps: [
        'Coloca los pies más abiertos que los hombros, puntas ligeramente hacia afuera',
        'Baja en sentadilla manteniendo el torso erguido',
        'Sube apretando los glúteos',
        'Repite sin cerrar las rodillas'
        ],
      tip: 'Perfecta para trabajar glúteo medio y aductores con buena técnica.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Kettlebell-Sumo-Deadlift_.webp'
    },

    {
      id: 20,
      title: 'Kettlebell Swings',
      difficulty: 'Intermedio',
      muscles: ['Glúteos, isquios, core'],
      equipo: 'Kettlebell',
      steps: [
        'Sujeta el kettlebell con ambas manos',
        'Flexiona la cadera hacia atrás (no las rodillas)',
        'Impulsa el kettlebell hacia el frente con la cadera',
        'Controla la bajada y repite'
        ],
      tip: 'El poder viene de la cadera, no de los brazos. Mantén el core firme.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Kettlebell-Swing_.webp'
    },

    {
      id: 21,
      title: 'Knee Tucks Jump',
      difficulty: 'Intermedio',
      muscles: ['Cuádriceps, glúteos, core'],
      equipo: 'Peso corporal',
      steps: [
        'Parte de pie con pies al ancho de hombros',
        'Salta elevando las rodillas hacia el pecho',
        'Aterriza suavemente con control',
        'Repite sin perder la forma'
        ],
      tip: 'Usa tus brazos para impulsarte y mantén el abdomen firme.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Knee-Tuck-Jumps_.webp'
    },

    {
      id: 22,
      title: 'Leg Extensions en maquina',
      difficulty: 'Principiante',
      muscles: ['Cuádriceps'],
      equipo: 'Máquina de extensiones de piernas',
      steps: [
        'Siéntate en la máquina y ajusta el respaldo',
        'Coloca los pies detrás del rodillo',
        'Extiende las piernas hasta que estén rectas',
        'Baja lentamente sin soltar el peso'
        ],
      tip: 'No bloquees completamente las rodillas al extender.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Leg-Extension_.webp'
    },
    {
      id: 23,
      title: 'Prensa de piernas',
      difficulty: 'Intermedio',
      muscles: ['Cuádriceps, glúteos, isquiotibiales'],
      equipo: 'Prensa de piernas',
      steps: [
        'Siéntate y coloca los pies en la plataforma al ancho de hombros',
        'Flexiona las piernas bajando el peso hacia el pecho',
        'Empuja con los talones para regresar',
        'Controla el movimiento en todo momento'
        ],
      tip: 'No lleves las rodillas muy cerca del pecho para evitar curvar la espalda baja.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Leg-Press_.webp'
    },

    {
      id: 24,
      title: 'Zancadas',
      difficulty: 'Intermedio',
      muscles: ['Cuádriceps, glúteos, isquiotibiales'],
      equipo: ' Peso corporal o mancuernas',
      steps: [
        'Da un paso largo hacia adelante',
        'Flexiona ambas rodillas a 90°',
        'Empuja con el pie delantero para volver',
        'Alterna piernas'
        ],
      tip: 'Mantén el torso recto y no dejes que la rodilla sobrepase los dedos del pie.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Lunge_.webp'
    },

    {
      id: 25,
      title: 'Femoral acostado en maquina',
      difficulty: 'Intermedio',
      muscles: ['squiotibiales'],
      equipo: 'Máquina de curl femoral acostado',
      steps: [
        'Acuéstate boca abajo en la máquina',
        'Ajusta los rodillos justo sobre los talones',
        'Flexiona las rodillas llevando los talones hacia los glúteos',
        'Baja lentamente'
        ],
      tip: 'No levantes las caderas durante la ejecución.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Lying-Leg-Curl_.webp'
    },

    {
      id: 26,
      title: 'Abductor en maquina',
      difficulty: 'Principiante',
      muscles: ['Glúteo medio, glúteo menor'],
      equipo: 'Máquina de abducción',
      steps: [
        'Siéntate en la máquina con la espalda recta',
        'Coloca las piernas contra los apoyos exteriores',
        'Abre las piernas empujando hacia los lados',
        'Regresa lentamente sin juntar por completo'
        ],
      tip: 'Mantén el movimiento controlado y no te apoyes demasiado en el respaldo.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Seated-Hip-Abduction-Machine_.webp'
    },

    {
      id: 27,
      title: 'Leg Curl sentado en maquina',
      difficulty: 'Intermedio',
      muscles: ['Isquiotibiales'],
      equipo: 'Máquina de curl de piernas sentado',
      steps: [
        'Siéntate y ajusta el respaldo y rodillos',
        'Coloca los tobillos detrás del rodillo inferior',
        'Flexiona las rodillas bajando el peso',
        'Regresa lentamente sin soltar la tensión'
        ],
      tip: 'Mantén la espalda apoyada y no balancees el cuerpo.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Seated-Leg-Curl_.webp'
    },

    {
      id: 28,
      title: 'Peso Muerto a una pierna',
      difficulty: 'Avanzado',
      muscles: ['Isquiotibiales, glúteos, core'],
      equipo: 'Mancuerna (opcional)',
      steps: [
        'Sostén una mancuerna en la mano contraria a la pierna de apoyo',
        'Inclina el torso hacia adelante mientras la pierna contraria se eleva',
        'Mantén la espalda recta',
        'Regresa contrayendo glúteo e isquios'
        ],
      tip: 'Controla el equilibrio y no arquees la espalda.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Single-Leg-Bodyweight-Deadlift_.webp'
    },

    {
      id: 29,
      title: 'Leg Extensions a una pierna',
      difficulty: 'Intermedio',
      muscles: ['Cuádriceps'],
      equipo: 'Máquina de extensión de piernas',
      steps: [
        'Siéntate en la máquina y trabaja una pierna a la vez',
        'Ajusta el rodillo sobre la parte baja de la pierna',
        'Extiende la pierna completamente',
        'Baja lento sin tocar fondo'
        ],
      tip: 'Ideal para corregir desbalances musculares.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Single-Leg-Extension_.webp'
    },
    {
      id: 30,
      title: 'Glute Bridge a una pierna',
      difficulty: 'Intermedio',
      muscles: ['Glúteo mayor, isquiotibiales, core'],
      equipo: 'Peso corporal (opcional banda o disco)',
      steps: [
        'Acuéstate boca arriba, una pierna flexionada y la otra extendida',
        'Eleva la cadera apretando el glúteo de la pierna de apoyo',
        'Mantén arriba un segundo',
        'aja sin apoyar la cadera completamente'
        ],
      tip: 'Mantén la pelvis estable y el core activado durante todo el movimiento.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Single-Leg-Glute-Bridge_.webp'
    },

    {
      id: 31,
      title: 'Sentadilla Libre',
      difficulty: 'Avanzado',
      muscles: ['Cuádriceps, glúteos, core'],
      equipo: 'Barra',
      steps: [
        'Coloca la barra sobre la parte alta de la espalda (trapecios)',
        'Separa los pies al ancho de los hombros',
        'Baja controladamente llevando las caderas hacia atrás',
        'Mantén el pecho erguido y el core activo',
        'Sube empujando con los talones'
        ],
      tip: 'No dejes que las rodillas colapsen hacia adentro; mantén la mirada al frente.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Squat_.webp'
    },

    {
      id: 32,
      title: 'Abducción en polea baja',
      difficulty: 'Intermedio',
      muscles: ['Glúteo medio, glúteo menor'],
      equipo: 'Polea baja + tobillera',
      steps: [
        'Coloca la tobillera en una pierna y sujétate de la máquina',
        'Eleva lateralmente la pierna contraria al punto de anclaje',
        'Mantén el control del movimiento',
        'Regresa despacio'
        ],
      tip: 'No balancees el torso, el movimiento debe ser aislado del glúteo.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Standing-Cable-Abduction_.webp'
    },

    {
      id: 33,
      title: 'Patada de glúteo en polea baja',
      difficulty: 'Intermedio',
      muscles: ['Glúteo mayor'],
      equipo: 'Polea baja + tobillera',
      steps: [
        'Sujeta la máquina con ambas manos',
        'Con la tobillera puesta, lleva la pierna hacia atrás en línea recta',
        'Mantén la contracción arriba un segundo',
        'Vuelve con control'
        ],
      tip: 'No arquees la espalda ni gires la cadera.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Standing-Cable-Kickback_.webp'
    },

    {
      id: 34,
      title: 'Sentadiolla Isometrica',
      difficulty: 'Principiante',
      muscles: ['Cuádriceps, glúteos, core'],
      equipo: 'Peso corporal o banda (opcional)',
      steps: [
        'Apóyate con la espalda contra la pared',
        'Flexiona las rodillas hasta formar un ángulo de 90°',
        'Mantén la posición el tiempo deseado',
        'Sube lentamente'
        ],
      tip: 'Asegúrate de que las rodillas no sobrepasen la punta de los pies.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/pierna/Wall-Sit_.webp'
    },
  ],

    //////----BICEPS----//////

  "bíceps": [
  {
    "id": 1,
    "title": "Curl de bíceps con mancuerna",
    "difficulty": "Principiante",
    "muscles": ["Bíceps"],
    "equipo": "Mancuernas",
    "steps": [
      "Sujeta una mancuerna en cada mano con los brazos extendidos a los lados",
      "Mantén los codos pegados al torso",
      "Flexiona los codos para subir las mancuernas hacia los hombros",
      "Baja lentamente a la posición inicial"
    ],
    "tip": "Evita balancear el cuerpo, mantén el movimiento controlado.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Alternating-Dumbbell-Curl_.webp"
  },

  {
    "id": 2,
    "title": "Curl de bíceps con Barra",
    "difficulty": "Principiante",
    "muscles": ["Bíceps"],
    "equipo": "Barra recta",
    "steps": [
      "Colócate de pie sujetando una barra con las palmas hacia arriba",
      "Mantén los codos cerca del torso",
      "Flexiona los brazos para subir la barra hasta el pecho",
      "Desciende lentamente a la posición inicial"
    ],
    "tip": "Evita mover los codos hacia adelante, enfócate en la contracción del bíceps.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Barbell-Curl_.webp"
  },

  {
    "id": 3,
    "title": "Curl Concentrado",
    "difficulty": "Principiante",
    "muscles": ["Bíceps"],
    "equipo": "Mancuerna + banco",
    "steps": [
      "Siéntate en un banco con las piernas separadas",
      "Apoya el codo de un brazo en el muslo del mismo lado",
      "Sujeta una mancuerna y flexiona el codo para levantarla",
      "Baja lentamente sin mover el hombro"
    ],
    "tip": "Controla la bajada para maximizar el estímulo del bíceps.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Dumbbell-Concentration-Curl_.webp"
  },

  {
    "id": 4,
    "title": "Curl con Barra Z",
    "difficulty": "Principiante",
    "muscles": ["Bíceps"],
    "equipo": "Barra Z",
    "steps": [
      "Sujeta la barra Z con agarre supino (palmas hacia arriba)",
      "Mantén los codos pegados al cuerpo",
      "Flexiona los brazos llevando la barra hacia el pecho",
      "Baja lentamente controlando el peso"
    ],
    "tip": "Este agarre reduce la tensión en las muñecas, ideal si sientes molestias con barra recta.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/EZ-Barbell-Curl_.webp"
  },

  {
    "id": 5,
    "title": "Curl Predicador",
    "difficulty": "Intermedio",
    "muscles": ["Bíceps"],
    "equipo": "Banco Scott + barra o mancuerna",
    "steps": [
      "Coloca los brazos sobre el banco predicador",
      "Toma la barra o mancuerna con agarre supino",
      "Flexiona los codos para levantar el peso",
      "Desciende controladamente hasta estirar casi por completo"
    ],
    "tip": "Ideal para aislar el bíceps evitando impulso con el torso.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/EZ-Barbell-Preacher-Curl_.webp"
  },

  {
    "id": 6,
    "title": "Curl de bíceps agarre neutro",
    "difficulty": "Principiante",
    "muscles": ["Bíceps", "Braquial anterior"],
    "equipo": "Mancuernas",
    "steps": [
      "Sujeta las mancuernas con las palmas enfrentadas",
      "Flexiona los codos para levantar el peso",
      "Mantén el torso estable y sin balanceos",
      "Baja lentamente las mancuernas"
    ],
    "tip": "Activa más el braquial, músculo profundo del bíceps.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Hammer-Curl_.webp"
  },

  {
    "id": 7,
    "title": "Curl de bíceps en banco inclinado",
    "difficulty": "Intermedio",
    "muscles": ["Bíceps"],
    "equipo": "Mancuernas + banco inclinado",
    "steps": [
      "Siéntate en un banco inclinado con los brazos colgando a los lados",
      "Sujeta las mancuernas con agarre supino",
      "Flexiona los codos sin mover los hombros",
      "Baja controladamente"
    ],
    "tip": "Permite mayor rango de movimiento y estiramiento del bíceps.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Incline-Dumbbell-Curl.webp"
  },

  {
    "id": 8,
    "title": "Curl de bíceps agarre invertido",
    "difficulty": "Intermedio",
    "muscles": ["Bíceps", "Brachioradial"],
    "equipo": "Barra o mancuernas",
    "steps": [
      "Sujeta la barra con palmas hacia abajo (agarre prono)",
      "Flexiona los codos para levantar el peso",
      "Controla el movimiento sin mover los hombros",
      "Baja lentamente"
    ],
    "tip": "Trabaja también los antebrazos de forma intensa.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Reverse-Barbell-Curl_.webp"
  },

  {
    "id": 9,
    "title": "Curl de bíceps con cuerda",
    "difficulty": "Principiante",
    "muscles": ["Bíceps"],
    "equipo": "Polea baja + cuerda",
    "steps": [
      "Sujeta la cuerda con ambas manos desde la polea baja",
      "Flexiona los codos mientras separas la cuerda hacia los lados",
      "Aprieta los bíceps arriba",
      "Desciende controladamente"
    ],
    "tip": "Aprovecha la tensión constante que ofrece la polea.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Rope-Cable-Curl_.webp"
  },

  {
    "id": 10,
    "title": "Curl de muñeca sentado",
    "difficulty": "Principiante",
    "muscles": ["Antebrazos"],
    "equipo": "Barra",
    "steps": [
      "Siéntate y apoya los antebrazos sobre tus muslos con las palmas hacia arriba",
      "Sujeta una barra y flexiona solo las muñecas",
      "Sube y baja controladamente el peso"
    ],
    "tip": "Fortalece tus antebrazos para mejorar agarre en otros ejercicios.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Seated-Barbell-Wrist-Curl_.webp"
  },

  {
    "id": 11,
    "title": "Curl de muñeca agarre invertido",
    "difficulty": "Principiante",
    "muscles": ["Antebrazos"],
    "equipo": "Barra",
    "steps": [
      "Apoya los antebrazos en los muslos con palmas hacia abajo",
      "Flexiona solo las muñecas para levantar la barra",
      "Desciende lentamente"
    ],
    "tip": "Excelente para reforzar el antebrazo extensor.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Seated-Barbell-Wrist-Extension_.webp"
  },

  {
    "id": 12,
    "title": "Curl de bíceps polea baja",
    "difficulty": "Principiante",
    "muscles": ["Bíceps"],
    "equipo": "Polea baja",
    "steps": [
      "Colócate frente a la polea baja con el mango en una mano",
      "Flexiona el codo manteniendo el brazo pegado al cuerpo",
      "Aprieta el bíceps arriba",
      "Baja lentamente"
    ],
    "tip": "Ideal para aislamiento unilateral con tensión constante.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Single-Arm-Low-Pulley-Cable-Curl_.webp"
  },

  {
    "id": 13,
    "title": "Curl de bíceps en polea alta",
    "difficulty": "Intermedio",
    "muscles": ["Bíceps"],
    "equipo": "Polea alta doble",
    "steps": [
      "Colócate entre las poleas sujetando las asas con ambas manos",
      "Flexiona los codos hacia los lados de la cabeza",
      "Aprieta los bíceps y luego baja lentamente"
    ],
    "tip": "Trabaja el bíceps en un ángulo diferente al convencional.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Standing-High-Pulley-Cable-Curl_.webp"
  },

  {
    "id": 14,
    "title": "Curl de bíceps con barra polea baja",
    "difficulty": "Principiante",
    "muscles": ["Bíceps"],
    "equipo": "Polea baja + barra recta",
    "steps": [
      "Sujeta la barra con agarre supino desde la polea baja",
      "Flexiona los codos sin mover los hombros",
      "Aprieta el bíceps y baja lentamente"
    ],
    "tip": "Perfecto para lograr una tensión constante durante todo el recorrido.",
    "imageUrl": "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/bicepcs/Straight-Bar-Low-Pulley-Cable-Curl_.webp"
  }
],
                         //////----TRICEPS----//////
tríceps: [
  {
    id: 1,
    title: "Medios fondos",
    difficulty: "Principiante",
    muscles: ["Tríceps", "Pecho", "Hombros"],
    equipo: "Banco o superficie estable",
    steps: [
      "Siéntate en el borde de un banco con las manos apoyadas a los lados.",
      "Desliza los glúteos hacia adelante hasta que queden suspendidos.",
      "Flexiona los codos y baja el cuerpo lentamente.",
      "Empuja hacia arriba hasta estirar los brazos sin bloquear los codos."
    ],
    tip: "Mantén los codos apuntando hacia atrás, no hacia los lados.",
    imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Bench-Dips_.webp"
  },
  {
    id: 2,
    title: "Extensión de tríceps con cuerda",
    difficulty: "Principiante",
    muscles: ["Tríceps"],
    equipo: "Polea alta con cuerda",
    steps: [
      "Colócate frente a la polea alta con los pies al ancho de los hombros.",
      "Sujeta la cuerda con ambas manos con agarre neutro.",
      "Empuja la cuerda hacia abajo hasta extender por completo los brazos.",
      "Regresa lentamente a la posición inicial."
    ],
    tip: "Separa las puntas de la cuerda al final del movimiento para mayor activación.",
    imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Cable-Rope-Pushdown_.webp"
  },
  {
    id: 3,
    title: "Press California",
    difficulty: "Intermedio",
    muscles: ["Tríceps", "Pecho"],
    equipo: "Barra o mancuernas + banco",
    steps: [
      "Recuéstate en un banco plano con la barra o mancuernas sobre el pecho.",
      "Flexiona los codos hacia el torso manteniéndolos cerca del cuerpo.",
      "Empuja hacia arriba sin abrir los codos.",
      "Baja controladamente a la posición inicial."
    ],
    tip: "Evita extender completamente los codos para mantener la tensión en los tríceps.",
    imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Close-Grip-Bench-Press_.webp"
  },
  {
    id: 4,
    title: "Copa a 2 manos",
    difficulty: "Principiante",
    muscles: ["Tríceps"],
    equipo: "Mancuerna",
    steps: [
      "Sujeta una mancuerna con ambas manos y llévala por detrás de la cabeza.",
      "Mantén los codos apuntando hacia arriba.",
      "Extiende los brazos elevando la mancuerna.",
      "Regresa lentamente a la posición inicial."
    ],
    tip: "Evita mover los codos hacia los lados durante el movimiento.",
    imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Dumbbell-Overhead-Triceps-Extension_99242f13-.webp"
  },
  {
    id: 5,
    title: "Extensión posterior de tríceps",
    difficulty: "Principiante",
    muscles: ["Tríceps"],
    equipo: "Mancuerna",
    steps: [
      "Inclina el torso hacia adelante con la espalda recta.",
      "Flexiona el codo y lleva la mancuerna hacia atrás.",
      "Extiende el brazo completamente manteniéndolo paralelo al suelo.",
      "Regresa lentamente a la posición inicial."
    ],
    tip: "No muevas el hombro, solo el antebrazo debe trabajar.",
    imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Kickback_.webp"
  },
  {
    id: 6,
    title: "Press Francés con mancuerna",
    difficulty: "Principiante",
    muscles: ["Tríceps"],
    equipo: "Mancuernas + banco",
    steps: [
      "Acuéstate en un banco plano con una mancuerna en cada mano.",
      "Flexiona los codos llevando las mancuernas hacia la frente.",
      "Extiende los brazos completamente hacia arriba.",
      "Baja de forma controlada."
    ],
    tip: "Evita separar los codos durante el movimiento.",
    imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Lying-Dumbbell-Triceps-Extension_.webp"
  },
  {
    id: 7,
    title: "Press Francés con barra Z",
    difficulty: "Intermedio",
    muscles: ["Tríceps"],
    equipo: "Barra Z + banco",
    steps: [
      "Acuéstate en un banco plano con la barra Z sobre el pecho.",
      "Flexiona los codos llevando la barra hacia la frente.",
      "Extiende los brazos completamente sin bloquear los codos.",
      "Regresa lentamente a la posición inicial."
    ],
    tip: "Mantén los codos estables y evita arquear la espalda.",
    imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Lying-Triceps-Extension_.webp"
  },
  {
    id: 8,
    title: "Fondos en paralelas",
    difficulty: "Intermedio",
    muscles: ["Tríceps", "Pecho", "Hombros"],
    equipo: "Barras paralelas",
    steps: [
      "Sujeta las barras y elévate con los brazos extendidos.",
      "Flexiona los codos y baja lentamente el cuerpo.",
      "Empuja hacia arriba hasta volver a extender los brazos.",
      "Evita balancearte o usar impulso."
    ],
    tip: "Inclina ligeramente el torso hacia adelante para mayor trabajo del tríceps.",
    imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Parallel-Dip-Bar_.webp"
  },
  {
    id: 9,
    title: "Extensiones con barra agarre invertido",
    difficulty: "Intermedio",
    muscles: ["Tríceps"],
    equipo: "Polea alta con barra recta",
    steps: [
      "Toma la barra con agarre supino (palmas hacia arriba).",
      "Empuja la barra hacia abajo extendiendo los codos.",
      "Regresa de forma lenta y controlada a la posición inicial.",
      "Mantén los codos cerca del cuerpo durante todo el movimiento."
    ],
    tip: "El agarre invertido enfatiza la cabeza larga del tríceps.",
    imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Reverse-Grip-Cable-Triceps-.webp"
  },
  {
    id: 10,
    title: "Extensión de tríceps sentado con barra Z",
    difficulty: "Intermedio",
    muscles: ["Tríceps"],
    equipo: "Barra Z + banco",
    steps: [
      "Siéntate en un banco con respaldo y sujeta la barra Z sobre la cabeza.",
      "Flexiona los codos para llevar la barra detrás de la cabeza.",
      "Extiende los brazos completamente hacia arriba.",
      "Baja controladamente y repite."
    ],
    tip: "Mantén la espalda recta y los codos alineados.",
    imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Seated-Barbell-French-Press_.webp"
  },
  {
    id: 11,
    title: "Extensión de tríceps a una mano en polea",
    difficulty: "Principiante",
    muscles: ["Tríceps"],
    equipo: "Polea alta con manija individual",
    steps: [
      "Sujeta la manija con una mano y mantén el codo fijo a tu costado.",
      "Extiende el brazo completamente hacia abajo.",
      "Regresa lentamente a la posición inicial.",
      "Repite con el otro brazo."
    ],
    tip: "Controla el movimiento y evita girar el tronco.",
    imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Single-Arm-Cable-Triceps-Extension-with-.webp"
  },
  {
    id: 12,
    title: "Extensión de tríceps a una mano en polea agarre invertido",
    difficulty: "Intermedio",
    muscles: ["Tríceps"],
    equipo: "Polea alta con manija individual",
    steps: [
      "Toma la manija con agarre supino (palma hacia arriba).",
      "Extiende el brazo hacia abajo controladamente.",
      "Evita mover el codo o el torso.",
      "Repite con el otro brazo."
    ],
    tip: "Este agarre enfatiza más la cabeza medial del tríceps.",
    imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Single-Arm-Cable-Triceps-Extension_.webp"
  },
  {
    id: 13,
    title: "Extensión de tríceps con barra en polea alta",
    difficulty: "Principiante",
    muscles: ["Tríceps"],
    equipo: "Polea alta con barra recta",
    steps: [
      "Toma la barra con agarre pronado (palmas hacia abajo).",
      "Extiende los brazos hacia abajo completamente.",
      "Controla el regreso sin mover los codos.",
      "Mantén una postura firme durante el ejercicio."
    ],
    tip: "Concéntrate en apretar los tríceps al final del movimiento.",
    imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/triceps/Triceps-Pressdown_.webp"
  }
],
 
  //////----ABDOMINALES----//////

  abdominales: [
    {
      id: 1,
      title: "Crunch con piernas flexionadas",
      difficulty: "Principiante",
      muscles: ["Abdomen superior"],
      equipo: "Colchoneta (opcional)",
      steps: [
        "Acuéstate boca arriba con las rodillas flexionadas y los pies apoyados en el suelo.",
        "Coloca las manos detrás de la cabeza o cruzadas sobre el pecho.",
        "Eleva los hombros del suelo contrayendo el abdomen.",
        "Baja lentamente sin apoyar completamente la espalda."
      ],
      tip: "Evita tirar del cuello con las manos, concéntrate en la contracción abdominal.",
      imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Bent-Knee-Reverse-Crunch_.webp"
    },
    {
      id: 2,
      title: "Crunch",
      difficulty: "Principiante",
      muscles: ["Abdomen superior"],
      equipo: "Colchoneta (opcional)",
      steps: [
        "Acuéstate boca arriba con las rodillas ligeramente flexionadas.",
        "Coloca las manos detrás de la cabeza sin empujarla.",
        "Eleva el torso contrayendo el abdomen.",
        "Regresa lentamente sin apoyar completamente los hombros."
      ],
      tip: "Realiza el movimiento lentamente para mayor activación muscular.",
      imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Crunch_.webp"
    },
    {
      id: 3,
      title: "Elevación de piernas en suspensión",
      difficulty: "Intermedio",
      muscles: ["Abdomen inferior", "Flexores de la cadera"],
      equipo: "Barra de dominadas o estación de inmersión",
      steps: [
        "Sujeta una barra y cuelga con los brazos extendidos.",
        "Mantén el cuerpo estable y las piernas juntas.",
        "Eleva las piernas hasta formar un ángulo de 90° con el torso.",
        "Baja controladamente sin columpiarte."
      ],
      tip: "Evita el impulso, mantén el control durante todo el ejercicio.",
      imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Hanging-Leg-Raise_.webp"
    },
    {
      id: 4,
      title: "Crunch con brazos extendidos",
      difficulty: "Principiante",
      muscles: ["Abdomen superior"],
      equipo: "Colchoneta (opcional)",
      steps: [
        "Acuéstate boca arriba con los brazos extendidos hacia atrás.",
        "Flexiona las rodillas con los pies apoyados en el suelo.",
        "Eleva los brazos y el torso al mismo tiempo contrayendo el abdomen.",
        "Regresa lentamente sin tocar el suelo con los hombros."
      ],
      tip: "Mantén los brazos alineados con la cabeza durante todo el movimiento.",
      imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Long-Arm-Crunch_.webp"
    },
    {
      id: 5,
      title: "Crunch lateral",
      difficulty: "Principiante",
      muscles: ["Oblicuos"],
      equipo: "Colchoneta (opcional)",
      steps: [
        "Acuéstate de lado con una pierna sobre la otra y la mano del mismo lado detrás de la cabeza.",
        "Contrae el abdomen lateral levantando el torso hacia la cadera.",
        "Baja lentamente sin relajar los músculos.",
        "Repite del otro lado."
      ],
      tip: "Evita usar impulso; haz el movimiento corto y controlado.",
      imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Oblique-Crunch_.webp"
    },
    {
      id: 6,
      title: "Planchas",
      difficulty: "Principiante",
      muscles: ["Abdomen completo", "Espalda baja", "Hombros"],
      equipo: "Ninguno",
      steps: [
        "Colócate boca abajo apoyando antebrazos y puntas de los pies.",
        "Mantén el cuerpo en línea recta desde la cabeza hasta los talones.",
        "Contrae el abdomen y evita que las caderas se hundan.",
        "Sostén la posición por el tiempo deseado."
      ],
      tip: "Concéntrate en la respiración y el control corporal durante el tiempo de plancha.",
      imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Plank_.webp"
    },
    {
      id: 7,
      title: "Crunch en polea alta",
      difficulty: "Intermedio",
      muscles: ["Abdomen superior"],
      equipo: "Polea alta con cuerda",
      steps: [
        "Colócate de rodillas frente a la polea y sujeta la cuerda por detrás de la cabeza.",
        "Flexiona el torso hacia adelante contrayendo el abdomen.",
        "Lleva los codos hacia las rodillas sin mover los brazos.",
        "Regresa lentamente a la posición inicial."
      ],
      tip: "No tires con los brazos; el movimiento debe salir del abdomen.",
      imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/abdominales/Rope-Ab-Pulldown_.webp"
    },
    {
      id: 8,
      title: "Planchas dinámicas (Plank Get Ups)",
      difficulty: "Intermedio",
      muscles: ["Abdomen completo", "Hombros", "Pecho"],
      equipo: "Ninguno",
      steps: [
        "Empieza en posición de plancha con los antebrazos en el suelo.",
        "Extiende un brazo y luego el otro para quedar en posición de plancha alta.",
        "Vuelve a bajar primero un brazo y luego el otro.",
        "Alterna el brazo con el que comienzas en cada repetición."
      ],
      tip: "Mantén el abdomen contraído y evita balancear la cadera.",
      imageUrl: "https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/6a503edb92efb3fdc763103fc624b037fd40bc24/abdominales/plank-get-ups.svg"
    }
  ],

  ///////----GEMELOS----//////
  gemelos: [
    {
      id: 1,
      title: 'Elevación de talon de pie',
      difficulty: 'Principiante',
      muscles: ['Gemelos'],
      equipo: 'Maquina, (opcionalmente mancuernas o superficie elevada)',
      steps: [
        'Ponte de pie con los pies separados al ancho de caderas',
        'Eleva los talones lentamente, manteniendo el equilibrio',
        'Mantente en la punta de los pies por 1-2 segundos',
        'Baja controladamente hasta que los talones casi toquen el suelo'
        ],
      tip: 'Puedes hacerlo sobre un escalón para mayor rango de movimiento o sujetar mancuernas para más intensidad.',
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/gemelos/Standing-Calf-Raise_61746b47-98aa-49ee-bb97-5a19562592b9_600x600.webp'
    },

    {
      id: 2,
      title: 'Elevación de talón en maquina',
      difficulty: 'Principiante',
      muscles: ['Gemelos'],
      equipo: 'Máquina de elevación de talones (de pie o sentado)',
      steps: [
        'Siéntate o colócate de pie en la máquina según su tipo',
        'Asegura los pies con la parte delantera del pie sobre la plataforma y los talones colgando',
        'Extiende los tobillos llevando los talones hacia arriba lo más que puedas',
        'Haz una pausa arriba, luego baja lentamente hasta que sientas un estiramiento'
        ],
      tip: 'Controla el movimiento en todo momento y evita rebotar al final del recorrido.', 
      imageUrl: 'https://raw.githubusercontent.com/DevDinamics/baco_de_imagenes_guia/refs/heads/main/gemelos/Seated-Calf-Raise_8c8641b2-10f2-4dc8-9adb-8d80fd1a16d0_600x600.webp'
    },
  ]


  // Se añaden mas ejercicios
};