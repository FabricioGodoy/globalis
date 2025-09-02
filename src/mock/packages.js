const PUBLIC = process.env.PUBLIC_URL || '';

export const travelPackages = [
  {
    id: 'pkg-001',
    name: 'Caribe',
    description:
      'Aguas cristalinas, arena blanca y clima perfecto para relajarte o vivir aventuras en islas soñadas.',
    longDescription:
      'Desde los Cayos de Cuba y Bayahibe hasta Playa del Carmen, Aruba y Curazao, el Caribe ofrece experiencias inolvidables. Disfrutá del mar turquesa, gastronomía local y actividades como snorkel, navegación en catamarán y deportes acuáticos. Un mix ideal de relax, cultura y diversión para crear recuerdos que perduran.',
    image: `${PUBLIC}/img/destinos/imagenGenericaDestino.jpg`,
    price: 0,
    duration: 'A medida (3–10 noches)',
    destination: 'Caribe',
    includes: [
      'Aéreos ida y vuelta (opcionales)',
      'Alojamiento según destino',
      'Traslados aeropuerto–hotel–aeropuerto',
      'Asistencia al viajero',
      'Excursiones sugeridas: catamarán, snorkel y deportes acuáticos',
      'Asesoramiento personalizado'
    ],
    whatsappMessage:
      'Hola, me interesa el paquete Caribe (ID: pkg-001). ¿Me pasan más info y opciones de fechas?'
  },
  {
    id: 'pkg-002',
    name: 'Brasil',
    description:
      'Playas icónicas, ritmo, naturaleza y ciudades vibrantes: la esencia brasileña en un solo viaje.',
    longDescription:
      'Viví Río de Janeiro con Copacabana y el Cristo Redentor, descansá en Jericoacoara, explorá Porto de Galinhas y su mar cristalino, o sumergite en la biodiversidad de Fernando de Noronha. Sumá la vida nocturna de Florianópolis y su espíritu joven. Playa, cultura, aventura y una gastronomía que enamora.',
    image: `${PUBLIC}/img/destinos/imagenGenericaDestino.jpg`,
    price: 0,
    duration: 'A medida (3–10 noches)',
    destination: 'Brasil',
    includes: [
      'Aéreos nacionales/internacionales (opcionales)',
      'Alojamiento con o sin desayuno',
      'Traslados y city tours según ciudad',
      'Asistencia al viajero',
      'Excursiones sugeridas: Pan de Azúcar, buggy en Jeri, piscinas naturales en Porto',
      'Asesoramiento personalizado'
    ],
    whatsappMessage:
      'Hola, me interesa el paquete Brasil (ID: pkg-002). ¿Qué opciones tienen para Río / Jeri / Floripa?'
  },
  {
    id: 'pkg-003',
    name: 'Europa',
    description:
      'Historia, arte y costa: un recorrido por España, Portugal, Francia, Italia y Turquía.',
    longDescription:
      'Explorá Barcelona y Lisboa, viví el romanticismo de París, descubrí la tradición italiana de Toscana a la Costa Amalfitana y dejate sorprender por Turquía, donde Oriente y Occidente se encuentran. Ciudades vibrantes, arquitectura icónica y playas con sol a pleno.',
    image: `${PUBLIC}/img/destinos/imagenGenericaDestino.jpg`,
    price: 0,
    duration: 'A medida (7–15 noches)',
    destination: 'Europa (multi-país)',
    includes: [
      'Aéreos intercontinentales (opcionales)',
      'Alojamiento en ubicaciones céntricas',
      'Traslados y trenes internos (según itinerario)',
      'Asistencia al viajero',
      'Visitas sugeridas: museos, barrios históricos, costas y viñedos',
      'Asesoramiento para itinerario multi-destino'
    ],
    whatsappMessage:
      'Hola, me interesa el paquete Europa (ID: pkg-003). ¿Pueden armarme un itinerario por España, Italia y Francia?'
  },
  {
    id: 'pkg-004',
    name: 'Sudeste Asiático',
    description:
      'Templos, selvas y playas paradisíacas: un viaje transformador entre cultura y naturaleza.',
    longDescription:
      'Conocé Kuala Lumpur y sus Torres Petronas, la espiritualidad de Chiang Mai en Tailandia y la energía gastronómica de Hanói. Para relax total, elegí Koh Samui o Koh Lipe; y para una mezcla única de naturaleza y templo, Bali y Lombok son imperdibles.',
    image: `${PUBLIC}/img/destinos/imagenGenericaDestino.jpg`,
    price: 0,
    duration: 'A medida (7–14 noches)',
    destination: 'Sudeste Asiático',
    includes: [
      'Aéreos internacionales y tramos internos (opcionales)',
      'Alojamiento en playas o ciudades',
      'Traslados y guías locales',
      'Asistencia al viajero',
      'Excursiones sugeridas: templos, mercados, islas y snorkel',
      'Asesoramiento cultural y de temporada de monzones'
    ],
    whatsappMessage:
      'Hola, me interesa el paquete Sudeste Asiático (ID: pkg-004). ¿Qué recomiendan entre Tailandia, Vietnam y Bali?'
  },
  {
    id: 'pkg-005',
    name: 'Estados Unidos',
    description:
      'Grandes ciudades para grandes experiencias: NY, Miami, Chicago y Los Ángeles.',
    longDescription:
      'Sentí la energía de Nueva York, entre rascacielos, Central Park y Broadway. Combiná playa y compras en Miami, arquitectura y museos en Chicago, y cine y costa del Pacífico en Los Ángeles. Cada ciudad, una experiencia distinta.',
    image: `${PUBLIC}/img/destinos/imagenGenericaDestino.jpg`,
    price: 0,
    duration: 'A medida (4–10 noches)',
    destination: 'Estados Unidos',
    includes: [
      'Aéreos internacionales (opcionales)',
      'Alojamiento a medida (Manhattan, South Beach, Loop, Westside, etc.)',
      'Traslados o alquiler de auto (según ciudad)',
      'Asistencia al viajero',
      'Entradas/experiencias: Broadway, miradores, parques, estudios',
      'Asesoramiento en barrios y logística'
    ],
    whatsappMessage:
      'Hola, me interesa el paquete Estados Unidos (ID: pkg-005). ¿Tienen NY + Miami con actividades?'
  },
  {
    id: 'pkg-006',
    name: 'Australia',
    description:
      'Deporte top, ciudades modernas y paisajes únicos: un combo inolvidable.',
    longDescription:
      'Viví el Australian Open o la F1 en Melbourne, conocé la Ópera de Sídney y disfrutá la vida de playa en Gold Coast. Explorá la Gran Barrera de Coral, la selva y el Outback rumbo a Perth, entre playas de arena blanca y aguas turquesa.',
    image: `${PUBLIC}/img/destinos/imagenGenericaDestino.jpg`,
    price: 0,
    duration: 'A medida (7–14 noches)',
    destination: 'Australia',
    includes: [
      'Aéreos internacionales (opcionales)',
      'Alojamiento en ciudades o costa',
      'Traslados / alquiler de auto según ruta',
      'Asistencia al viajero',
      'Excursiones sugeridas: GBR, parques, desierto y eventos deportivos',
      'Asesoramiento por temporadas y distancias'
    ],
    whatsappMessage:
      'Hola, me interesa el paquete Australia (ID: pkg-006). ¿Pueden cotizar con Melbourne y Sídney?'
  },
  {
    id: 'pkg-007',
    name: 'Argentina',
    description:
      'Naturaleza descomunal y cultura viva: Iguazú, NOA, Buenos Aires y Patagonia.',
    longDescription:
      'Maravillate con las Cataratas del Iguazú, explorá la historia y paisajes del noroeste (Salta y alrededores) y disfrutá la vida urbana de Buenos Aires. En el sur, Patagonia te espera: Tierra del Fuego, Bariloche y la grandeza del Glaciar Perito Moreno.',
    image: `${PUBLIC}/img/destinos/imagenGenericaDestino.jpg`,
    price: 0,
    duration: 'A medida (3–10 noches)',
    destination: 'Argentina',
    includes: [
      'Aéreos internos o buses (opcionales)',
      'Alojamiento en destino',
      'Traslados y excursiones seleccionadas',
      'Asistencia al viajero',
      'Experiencias sugeridas: navegación en Iguazú, Ruta del Vino, lagos y glaciares',
      'Asesoramiento por temporada (clima y eventos)'
    ],
    whatsappMessage:
      'Hola, me interesa el paquete Argentina (ID: pkg-007). ¿Qué opciones tienen para Iguazú/Patagonia?'
  }
];
