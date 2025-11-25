// src/data/breedsData.js

// RAZAS GRANDES
import dobermanDesc from "../assets/desc/raza-grande/doberman desc.webp";
import goldenDesc from "../assets/desc/raza-grande/golden desc.webp";
import huskyDesc from "../assets/desc/raza-grande/husky desc.webp";
import pastorAleDesc from "../assets/desc/raza-grande/pastor ale desc.webp";
import pastorBelgaDesc from "../assets/desc/raza-grande/pastor belga desc.webp";
import rottweDesc from "../assets/desc/raza-grande/rottwe desc.webp";

// RAZAS MEDIANAS
import beagleDesc from "../assets/desc/raza-mediana/beagle desc.webp";
import borderDesc from "../assets/desc/raza-mediana/border desc.webp";
import bulldogFraDesc from "../assets/desc/raza-mediana/bulldog fra desc.webp";
import inglesDesc from "../assets/desc/raza-mediana/ingles desc.webp";
import cockerDesc from "../assets/desc/raza-mediana/cocker desc.webp";
import pastorGanDesc from "../assets/desc/raza-mediana/pasrtor-gan-desc.webp";

// RAZAS PEQUEÑAS
import pinsecherDesc from "../assets/desc/raza-pequeña/pinscher desc.webp";
import pomeraniaDesc from "../assets/desc/raza-pequeña/pomerania desc.webp";
import russelDesc from "../assets/desc/raza-pequeña/russel desc.webp";
import Teckel from "../assets/desc/raza-pequeña/salchicha-desc.webp";
import shitzuDesc from "../assets/desc/raza-pequeña/shitzu dec.webp";
import yorkshireDesc from "../assets/desc/raza-pequeña/yorkshire desc.webp";

export const breedsDetails = {
  // ============ RAZAS GRANDES ============
  "Doberman": {
    descImage: dobermanDesc,
    descripcion: "El Doberman es una de las razas más apreciadas por su agudeza mental, lealtad y su destacada capacidad de protección. Reconocidos por su postura elegante y cuerpo atlético, estos perros son ideales tanto para familias como para aquellos que necesitan un perro de trabajo altamente capacitado. En King Dog, criadero especializado en la venta de perros de raza pura en Colombia, ofrecemos Doberman de alta calidad, garantizando temperamento equilibrado, salud robusta y una educación excepcional.",
    caracteristicas: [
      "Extremadamente leal y protector, con un fuerte instinto guardián",
      "Cariñoso con su familia y se lleva bien con los niños cuando es socializado desde temprana edad",
      "Conocido por su valentía, energía y alta inteligencia, ideal para tareas de seguridad",
      "Pelaje corto y brillante de color negro con marcas marrón rojizo, fácil de mantener",
      "Estructura atlética y elegante que requiere poco mantenimiento de pelaje"
    ],
    cuidados: [
      "Dieta rica en proteínas de alta calidad para apoyar su salud muscular y energética",
      "Ejercicio regular intenso: paseos largos, actividades al aire libre y entrenamiento",
      "Necesita desafíos mentales y físicos para evitar comportamientos destructivos",
      "Cuidado cardiovascular importante y prevención de dilatación del estómago",
      "Cepillado regular para mantener el pelaje brillante y libre de pelo muerto"
    ],
    porQueElegir: [
      "Garantía de pureza de raza con certificado de por vida",
      "Salud garantizada: vacunados, desparasitados con certificado de salud",
      "Kit de bienvenida incluido: alimentos, collar, cobija y elementos esenciales",
      "Asesoría personalizada sobre alimentación, cuidados y entrenamiento",
      "Envíos seguros a nivel nacional: Bogotá, Medellín, Cali y más",
      "Precios competitivos con calidad garantizada"
    ]
  },

  "Golden Retriever": {
    descImage: goldenDesc,
    descripcion: "El Golden Retriever es una de las razas más queridas en el mundo por su carácter dócil, inteligencia sobresaliente y su deseo innato de complacer. Este compañero ideal es perfecto para familias, parejas y amantes de los animales que buscan un perro de raza pura lleno de amor y lealtad. En King Dog, nos especializamos en la venta de Golden Retrievers en Colombia, ofreciendo cachorros de alta calidad con garantías excepcionales.",
    caracteristicas: [
      "Amistosos y sociables, perfectos para hogares con niños y personas activas",
      "Inteligencia excepcional y capacidad de aprendizaje ideal para adiestramiento",
      "Excelentes para actividades como obediencia, rescate y terapia",
      "Pelaje largo y dorado que requiere cepillado regular",
      "Se adaptan a cualquier clima con los cuidados adecuados"
    ],
    cuidados: [
      "Dieta equilibrada para mantener peso ideal y garantizar energía diaria",
      "Ejercicio diario activo: paseos largos, natación o juegos de búsqueda",
      "Cepillado regular para mantener brillo y reducir caída de pelo",
      "Les encanta participar en actividades familiares al aire libre",
      "Atención especial para evitar problemas articulares"
    ],
    porQueElegir: [
      "Certificación de pureza de raza con garantía de por vida",
      "Garantía de salud: vacunados y desparasitados",
      "Kit de bienvenida con artículos esenciales: alimento, cobija, collar",
      "Asesoría personalizada desde elección hasta cuidado postventa",
      "Envíos seguros a Bogotá, Medellín, Cali y todo el país",
      "Precios competitivos con calidad garantizada"
    ]
  },

  "Husky Siberiano": {
    descImage: huskyDesc,
    descripcion: "El Husky Siberiano es una raza icónica reconocida por su belleza, energía desbordante y carácter independiente. Este perro, de origen ártico, es perfecto para personas activas que disfrutan de la naturaleza y buscan un compañero leal y dinámico. En King Dog, líderes en la venta de perros de raza pura en Colombia, ofrecemos Huskies Siberianos con la calidad y garantías que necesitas.",
    caracteristicas: [
      "Amigables, sociables y juguetones, ideales para familias y dueños activos",
      "Espíritu libre e inteligencia destacada, requieren dueño con experiencia",
      "Pelaje doble característico en colores blanco, negro, gris y marrón",
      "Los protege del frío y les da una apariencia majestuosa",
      "Requieren cepillado regular, especialmente durante épocas de muda"
    ],
    cuidados: [
      "Dieta equilibrada con alto contenido de proteínas para cubrir necesidades energéticas",
      "Muy activos: necesitan caminatas largas, trote y actividades estimulantes",
      "Disfrutan de climas frescos y actividades al aire libre",
      "Aunque prefieren climas fríos, se adaptan a diversas condiciones",
      "Más adecuados para casas con espacio amplio o dueños muy activos"
    ],
    porQueElegir: [
      "Garantía de pureza de raza certificada de por vida",
      "Garantía de salud: vacunados, desparasitados en estado excepcional",
      "Kit de bienvenida: alimento, cobija, collar y depósito de alimento",
      "Asesoría desde selección hasta acompañamiento postventa",
      "Envíos seguros a Bogotá, Medellín, Cali y otras ciudades",
      "Precios competitivos respaldados por criadero confiable"
    ]
  },

  "Pastor Alemán": {
    descImage: pastorAleDesc,
    descripcion: "El Pastor Alemán es una de las razas más emblemáticas y apreciadas en el mundo, conocido por su impresionante inteligencia, lealtad incondicional y habilidades versátiles. Ideal como perro de familia, de trabajo o de protección, el Pastor Alemán destaca en cualquier entorno. En King Dog, criadero especializado en la venta de perros de raza pura en Colombia, ofrecemos Pastores Alemanes con garantía de pureza, salud y excelente temperamento.",
    caracteristicas: [
      "Extremadamente leal, valiente y protector con carácter equilibrado",
      "Perfecto para familias que buscan un compañero cariñoso y vigilante",
      "Inteligencia destacada: altamente entrenable y versátil",
      "Excelente para guardia, rescate, compañía y trabajo",
      "Pelaje corto o semilargo con doble capa resistente al clima"
    ],
    cuidados: [
      "Dieta rica en proteínas de alta calidad para energía y musculatura",
      "Altamente activo: necesita ejercicio diario para mantenerse en forma",
      "Caminatas largas, juegos interactivos y entrenamiento de obediencia",
      "Cepillado regular especialmente en épocas de muda",
      "Necesita espacio suficiente para moverse y explorar"
    ],
    porQueElegir: [
      "Garantía de pureza de raza de por vida asegurando linaje",
      "Garantía de salud: vacunados y desparasitados con certificado",
      "Kit de bienvenida: alimentos, cobija, collar y elementos esenciales",
      "Asesoría en cuidados, alimentación y entrenamiento",
      "Envíos seguros a Bogotá, Medellín, Cali y todo el país",
      "Precios competitivos que reflejan calidad y servicio"
    ]
  },

  "Pastor Belga": {
    descImage: pastorBelgaDesc,
    descripcion: "El Pastor Belga es una raza destacada por su inteligencia, energía y porte elegante. En King Dog, tu criadero de perros en Colombia, nos especializamos en la venta de Pastores Belgas de raza pura, con certificación de pureza y garantía de salud que asegura tu tranquilidad. Si buscas un Pastor Belga en venta en Colombia, esta raza es ideal para familias activas, amantes de los deportes o personas que buscan un compañero leal y protector.",
    caracteristicas: [
      "Perro mediano-grande con peso entre 20 y 30 kg",
      "Físico atlético perfecto para espacios amplios y actividades al aire libre",
      "Inteligente, enérgico y con porte elegante",
      "Ideal para familias activas y amantes de deportes caninos",
      "Se adapta bien a casas con áreas adecuadas para ejercicio"
    ],
    cuidados: [
      "Requiere mucha actividad física y estimulación mental diaria",
      "Entrenamiento constante y socialización desde cachorro",
      "Cepillado regular para mantener pelaje saludable",
      "Necesita dueño comprometido y con experiencia",
      "Ejercicio intenso para canalizar su alta energía"
    ],
    porQueElegir: [
      "Certificación de pureza de raza con garantía de por vida",
      "Garantía de salud: vacunados y desparasitados",
      "Ideal para deportes caninos y actividades de obediencia",
      "Asesoría personalizada sobre cuidados y entrenamiento",
      "Envíos seguros a Bogotá, Medellín, Cali y otras ciudades",
      "Precios competitivos con excelente calidad"
    ]
  },

  "Rottweiler": {
    descImage: rottweDesc,
    descripcion: "El Rottweiler es una de las razas más impresionantes y versátiles, conocida por su fortaleza, inteligencia y lealtad inquebrantable. Estos perros son ideales para familias que buscan un compañero protector, pero también son excelentes perros de trabajo debido a su capacidad para aprender rápidamente y seguir órdenes con precisión. En King Dog, expertos en la venta de perros de raza pura en Colombia, ofrecemos Rottweilers que destacan por su temperamento equilibrado y calidad excepcional.",
    caracteristicas: [
      "Valentía y naturaleza protectora: excelente perro guardián",
      "Muy leal y cariñoso con su familia a pesar de apariencia intimidante",
      "Equilibrado, ideal para hogares con experiencia en razas grandes",
      "Pelaje corto, denso, negro con marcas marrones características",
      "Requiere cuidado mínimo pero cepillado regular para brillo"
    ],
    cuidados: [
      "Dieta balanceada que promueva salud muscular y ósea",
      "Alimento de alta calidad formulado para razas grandes",
      "Perro activo: disfruta de ejercicio regular y paseos largos",
      "Necesita estímulos físicos y mentales por su alta inteligencia",
      "Se adapta a espacios grandes con patios y áreas al aire libre"
    ],
    porQueElegir: [
      "Garantía de pureza de raza de por vida con más de 14 años de experiencia",
      "Garantía de salud: vacunados, desparasitados en excelentes condiciones",
      "Kit de bienvenida: alimentos, collar, cobija y más",
      "Asesoramiento constante desde compra hasta cuidado postventa",
      "Envíos seguros a Bogotá, Medellín, Cali y otras regiones",
      "Mejor relación calidad-precio en cachorros Rottweiler"
    ]
  },

  // ============ RAZAS MEDIANAS ============
  "Beagle": {
    descImage: beagleDesc,
    descripcion: "El Beagle es una de las razas más queridas por su carácter amistoso, curiosidad innata y apariencia encantadora. Este perro mediano combina energía, inteligencia y lealtad, siendo ideal para familias activas o dueños que busquen un compañero lleno de vida. En King Dog, tu criadero de perros en Colombia, te ofrecemos cachorros Beagle en venta con certificación de pureza de raza, garantía de salud y el respaldo de más de 14 años de experiencia.",
    caracteristicas: [
      "Pesa entre 9 y 14 kg con cuerpo compacto y atlético",
      "Versátil para diversas actividades, perfecto para hogares dinámicos",
      "Naturaleza alegre y sociable: se lleva bien con niños y otros perros",
      "Curioso y decidido, explorador nato pero puede ser terco",
      "Pelaje corto y denso, fácil de mantener con cepillado semanal"
    ],
    cuidados: [
      "Muy entusiastas con comida: dieta equilibrada y control de porciones",
      "Nivel de energía alto: requiere paseos diarios y tiempo de juego activo",
      "Disfruta actividades al aire libre como correr o explorar parques",
      "Excelente para actividades de obediencia o juegos interactivos",
      "Atención regular en orejas para evitar infecciones"
    ],
    porQueElegir: [
      "Certificación de pureza de raza con garantía de por vida",
      "Garantía de salud: vacunados y desparasitados",
      "Recomendaciones personalizadas para alimentación y cuidado",
      "Asesoría y acompañamiento para integrar cachorro al hogar",
      "Envíos seguros a Bogotá, Medellín, Cali, Barranquilla",
      "Inversión justa por cachorro de calidad"
    ]
  },

  "Border Collie": {
    descImage: borderDesc,
    descripcion: "El Border Collie, famoso por su inteligencia superior y energía inagotable, es la elección ideal para quienes buscan un compañero activo, leal y altamente entrenable. Su versatilidad y carácter lo convierten en una de las razas más destacadas a nivel mundial. En King Dog, somos expertos en la venta de Border Collie de raza pura en Colombia, ofreciendo cachorros con genética certificada y un respaldo integral.",
    caracteristicas: [
      "Inteligente, obediente con increíble capacidad de aprendizaje",
      "Ideal para deportes y actividades como agilidad y pastoreo",
      "Extremadamente leal y cariñoso, se adapta a familias activas",
      "Pelaje denso largo o semilargo en colores blanco y negro, tricolor, sable",
      "Colores exclusivos merle (azul merle y rojo merle) con patrón único"
    ],
    cuidados: [
      "Dieta balanceada rica en proteínas para mantener energía",
      "Requiere mucho ejercicio: paseos largos, juegos interactivos",
      "Necesita retos mentales esenciales para su bienestar",
      "Perfecto para familias activas, deportistas o amantes del aire libre",
      "Cepillados regulares para eliminar pelo muerto y mantener brillo"
    ],
    porQueElegir: [
      "Garantía de pureza de raza respaldada con certificado de por vida",
      "Garantía de salud: vacunados y desparasitados completos",
      "Kit inicial incluido: cuido, cobija, collar y accesorios esenciales",
      "Asesoría post venta personalizada en cada etapa de desarrollo",
      "Entregas seguras a Bogotá, Medellín, Cali y más",
      "Precios competitivos con servicio de calidad"
    ]
  },

  "Bulldog Francés": {
    descImage: bulldogFraDesc,
    descripcion: "El Bulldog Francés es una de las razas más populares gracias a su apariencia única, personalidad juguetona y adaptabilidad. Con sus orejas tipo 'murciélago' y su carácter afectuoso, este perro es perfecto para hogares que buscan una mascota cariñosa y de compañía. En King Dog, tu criadero de perros en Colombia, ofrecemos cachorros Bulldog Francés en venta con certificado de pureza de raza y garantía de salud.",
    caracteristicas: [
      "Compacto y musculoso pesando entre 8 y 14 kg",
      "Ideal para espacios pequeños como apartamentos",
      "Tamaño manejable y personalidad tranquila",
      "Actitud relajada, afectuosa y juguetona",
      "Sociable: se adapta fácilmente llevándose bien con niños y mascotas"
    ],
    cuidados: [
      "Dieta equilibrada esencial para mantenerlo saludable y lleno de energía",
      "No requiere tanto ejercicio: disfruta paseos cortos y juego moderado",
      "Naturaleza tranquila perfecta para estilos de vida relajados",
      "Pelaje corto y brillante con mantenimiento mínimo",
      "Evitar exposición prolongada al calor por estructura braquiocefálica"
    ],
    porQueElegir: [
      "Certificación de pureza con garantía oficial de más de 14 años",
      "Garantía de salud: vacunados, desparasitados, evaluados antes de entrega",
      "Acompañamiento personalizado: alimentación, adaptación al hogar",
      "Servicio seguro de transporte a Bogotá, Medellín, Cali",
      "Precios ajustados a calidad y garantías ofrecidas",
      "Perfecto para dueños con estilos de vida tranquilos"
    ]
  },

  "Bulldog Inglés": {
    descImage: inglesDesc,
    descripcion: "El Bulldog Inglés, con su apariencia robusta y carácter afectuoso, es una de las razas más emblemáticas y queridas. Conocido por su tranquilidad y lealtad, este perro es ideal para familias que buscan un compañero cariñoso y apacible. En King Dog, nos especializamos en la venta de Bulldog Inglés de raza pura en Colombia, ofreciendo ejemplares que combinan genética de calidad, garantía de salud y el respaldo de más de 14 años.",
    caracteristicas: [
      "Naturaleza calmada, afectuosa y amigable, ideal con niños",
      "Carácter leal y protector adaptándose a vida en interiores",
      "No requiere grandes dosis de actividad, disfruta paseos tranquilos",
      "Pelaje corto y liso en colores blanco, atigrado, rojo, beige",
      "Requiere cuidados básicos: cepillados y atención a pliegues de piel"
    ],
    cuidados: [
      "Dieta equilibrada y controlada para evitar sobrepeso común en la raza",
      "Bajo nivel de energía: necesita paseos cortos y juegos suaves",
      "Ideal para hogares con ritmo tranquilo o familias relajadas",
      "Se adapta a apartamentos o casas con compañía frecuente",
      "No tolera climas extremos: mantener en entorno cómodo y fresco"
    ],
    porQueElegir: [
      "Garantía de pureza de raza con certificado de por vida",
      "Garantía de salud: vacunas y desparasitaciones necesarias",
      "Kit inicial: cuido, cobija, collar y accesorios esenciales",
      "Asesoría personalizada en crecimiento y cuidado",
      "Entregas seguras desde Bogotá, Medellín, Cali a todo el país",
      "Precios competitivos reflejando calidad de ejemplares"
    ]
  },

  "Cocker Spaniel": {
    descImage: cockerDesc,
    descripcion: "El Cocker Spaniel es una de las razas más queridas por su naturaleza cariñosa, su energía inagotable y su temperamento amigable. En King Dog, tu criadero de perros en Colombia, ofrecemos Cocker Spaniels de raza pura con certificación de pureza y una garantía de salud inigualable. Si estás buscando venta de perros de raza pura en Colombia, el Cocker Spaniel es una excelente opción para aquellos que desean un compañero leal y lleno de vitalidad.",
    caracteristicas: [
      "Tamaño mediano pesando entre 10 y 14 kg",
      "Se adapta desde casas grandes hasta apartamentos con ejercicio suficiente",
      "Alegre, afectuoso y muy sociable con niños, adultos y otros animales",
      "Energía inagotable y necesidad de compañía constante",
      "Muy adaptable a diferentes estilos de vida tanto urbanos como rurales"
    ],
    cuidados: [
      "Pelaje largo y suave: requiere baños y cepillados frecuentes",
      "Cuidados regulares para evitar enredos y mantener brillo",
      "Muy activo: requiere ejercicios regulares, paseos y juegos al aire libre",
      "Disfruta actividades que estimulen mente y cuerpo",
      "Orejas largas propensas a infecciones: mantener limpias y secas"
    ],
    porQueElegir: [
      "Certificación de pureza de raza con garantía de por vida",
      "Garantía de salud: vacunación completa y desparasitación",
      "Apoyo total desde compra hasta cuidado post venta",
      "Asesoría para adaptación adecuada al nuevo hogar",
      "Entregas seguras en Bogotá, Medellín, Cali y otras ciudades",
      "Precios competitivos y accesibles para cachorro de calidad"
    ]
  },

  "Pastor Ganadero Australiano": {
    descImage: pastorGanDesc,
    descripcion: "El Pastor Ganadero Australiano, también conocido como Blue Heeler o Red Heeler según su coloración, es una raza destacada por su inteligencia, versatilidad y resistencia. Este perro es ideal para quienes buscan un compañero activo y leal, con habilidades únicas para el trabajo y la compañía familiar. En King Dog, somos líderes en la venta de Pastor Ganadero Australiano de raza pura en Colombia.",
    caracteristicas: [
      "Inteligente, enérgico y dedicado, ideal para familias activas",
      "Perfecto para personas con estilo de vida al aire libre",
      "Carácter protector y leal: excelente guardián y compañero",
      "Disfruta desafíos físicos y mentales, destaca en deportes",
      "Pelaje corto, denso resistente al clima en colores azul o rojo moteado"
    ],
    cuidados: [
      "Dieta rica en proteínas para sostener energía y actividad física",
      "Altos requerimientos de ejercicio: caminatas largas, juegos interactivos",
      "Necesita deportes caninos y actividades diarias",
      "Disfruta retos físicos y mentales: ideal para familias que brindan tiempo",
      "Mantenimiento mínimo: cepillados ocasionales para buen estado"
    ],
    porQueElegir: [
      "Garantía de pureza de raza: certificación con garantía de por vida",
      "Garantía de salud: vacunados, desparasitados en óptimas condiciones",
      "Kit inicial: cuido, cobija, collar y accesorios esenciales",
      "Asesoría personalizada en cada etapa de cuidado y desarrollo",
      "Entregas seguras a Bogotá, Medellín, Cali, Barranquilla",
      "Precios competitivos respaldados por calidad de servicios"
    ]
  },

  // ============ RAZAS PEQUEÑAS ============
  "Jack Russell": {
    descImage: russelDesc,
    descripcion: "El Jack Russell Terrier es una raza conocida por su energía inagotable, inteligencia aguda y lealtad inquebrantable. Este perro ágil y valiente es perfecto para dueños activos que buscan un compañero dinámico. En King Dog, tu criadero de perros en Colombia, ofrecemos cachorros Jack Russell Terrier en venta con garantía de pureza de raza y certificado de salud, ideales para familias que desean un amigo lleno de vitalidad.",
    caracteristicas: [
      "Compacto y atlético pesando entre 6 y 8 kg",
      "Fácil de manejar, perfecto para espacios pequeños o grandes",
      "Estructura versátil apta para actividades al aire libre y vida en hogar",
      "Enérgico, curioso y extremadamente inteligente",
      "Protector y leal con vínculo fuerte con la familia"
    ],
    cuidados: [
      "Dieta equilibrada para satisfacer altas necesidades energéticas",
      "Nivel de energía muy alto: requiere ejercicio diario intenso",
      "Paseos largos, juegos interactivos o actividades al aire libre",
      "Inteligencia ideal para deportes caninos o entrenamiento avanzado",
      "Pelaje corto y liso fácil de mantener: cepillado semanal"
    ],
    porQueElegir: [
      "Certificación de pureza de raza con garantía oficial de por vida",
      "Garantía de salud: vacunados y desparasitados en perfecto estado",
      "Asesoría sobre alimentación, socialización y bienestar general",
      "Envíos seguros a Bogotá, Medellín, Cali, Barranquilla",
      "Precio ajustado a garantías de calidad y respaldo",
      "Perfecto compañero lleno de energía y cariño"
    ]
  },

  "Pinscher": {
    descImage: pinsecherDesc,
    descripcion: "El Pinscher es una raza pequeña de perros conocida por su valentía, energía y lealtad. Ideal para quienes buscan un compañero ágil y protector, el Pinscher es un excelente perro de compañía que, a pesar de su tamaño compacto, tiene una gran personalidad. En King Dog, tu criadero de perros en Colombia, ofrecemos Pinscher en venta, garantizando cachorros de raza pura con una certificación de pureza y una garantía de salud.",
    caracteristicas: [
      "Raza pequeña pesando entre 3 y 5 kg",
      "Excelente para apartamentos o viviendas con espacios reducidos",
      "Pequeño tamaño no le resta energía: muy activo",
      "Carácter intrépido y vigilante: excelente perro guardián",
      "Inteligente y fácil de entrenar con socialización temprana"
    ],
    cuidados: [
      "Metabolismo rápido: necesita dieta bien balanceada",
      "Alimentos de alta calidad proporcionando nutrientes adecuados",
      "Pequeño pero muy activo: necesita ejercicio diario adecuado",
      "Paseos regulares y tiempo de juego esenciales",
      "Pelaje corto y denso fácil de mantener sin grandes cuidados"
    ],
    porQueElegir: [
      "Certificación de pureza de raza con garantía de por vida",
      "Garantía de salud: certificado, vacunado y desparasitado",
      "Asesoría personalizada sobre mejor manera de cuidar y educar",
      "Entrega segura en Bogotá, Medellín, Cali y más",
      "Precios competitivos en el mercado colombiano",
      "Perfecto compañero ágil y protector con gran personalidad"
    ]
  },
"Pomerania": {
    descImage: pomeraniaDesc,
    descripcion: "El Pomerania es una de las razas más adoradas, especialmente por su tamaño compacto, su pelaje exuberante y su personalidad vivaz. En King Dog, tu criadero de perros en Colombia, nos especializamos en la venta de cachorros Pomerania de raza pura, con certificación de pureza y una garantía de salud que te brinda total confianza. Si buscas Pomerania en venta en Colombia, esta raza es perfecta para quienes desean un perro pequeño, pero con mucha energía y carácter.",
    caracteristicas: [
      "Perro pequeño con peso entre 1.5 y 3.5 kg",
      "Ideal para apartamentos o casas pequeñas en espacios reducidos",
      "Personalidad extrovertida con gran confianza a pesar de su tamaño",
      "Leal, afectuoso y enérgico, disfruta compañía de sus dueños",
      "Pelaje denso y esponjoso que requiere cuidado regular"
    ],
    cuidados: [
      "Dieta balanceada adecuada a su tamaño para evitar sobrepeso",
      "Necesita ejercicio y paseos diarios para liberar energía",
      "Cepillado varias veces a la semana para evitar enredos",
      "Mantener pelaje brillante con cuidado adecuado e higiene",
      "Atención a higiene bucal por propensión a problemas dentales"
    ],
    porQueElegir: [
      "Certificación de pureza de raza con garantía de por vida",
      "Garantía de salud: esquema de vacunación completo y desparasitación",
      "Asesoría continua sobre alimentación y cuidados",
      "Entrega nacional segura en Bogotá, Medellín, Cali y más",
      "Precios accesibles con opciones claras de pago",
      "Cachorros criados con los más altos estándares de calidad"
    ]
  },

  "Shih Tzu": {
    descImage: shitzuDesc,
    descripcion: "El Shih Tzu es una raza de perro pequeña, pero con una gran personalidad, ideal para quienes buscan un compañero leal y cariñoso. En King Dog, tu criadero de perros en Colombia, nos especializamos en la venta de Shih Tzu de raza pura, con certificación de pureza y una garantía de salud que te da confianza. Si estás buscando un Shih Tzu en venta en Colombia, en King Dog ofrecemos lo mejor en cachorros Shih Tzu con precios competitivos.",
    caracteristicas: [
      "Perro pequeño alcanzando entre 4.5 y 7.5 kg",
      "Perfecto para hogares con espacio limitado o apartamentos",
      "Temperamento amigable, cariñoso y tranquilo",
      "Excelente compañero para todas las edades, especialmente familias",
      "Pelaje largo y suave famoso por su hermosa apariencia"
    ],
    cuidados: [
      "Dieta balanceada ajustada a su tamaño y necesidades energéticas",
      "Perro tranquilo: disfruta paseos cortos y juegos en el hogar",
      "Cepillado varias veces a la semana para evitar nudos y enredos",
      "Baños frecuentes para mantener pelaje saludable y brillante",
      "Monitorear respiración en climas cálidos por rostro achatado"
    ],
    porQueElegir: [
      "Certificación de pureza de raza con garantía de por vida",
      "Garantía de salud: esquema de vacunación al día y desparasitación",
      "Guía personalizada para alimentación y crecimiento saludable",
      "Asesoría desde compra incluyendo cuidado y adiestramiento",
      "Entrega segura nacional en todo el país",
      "Precios accesibles con opciones de pago para cachorro de calidad"
    ]
  },

  "Teckel": {
    descImage: Teckel,
    descripcion: "El Teckel, también conocido como Salchicha, es una raza pequeña, pero con un carácter grande y lleno de energía. Su cuerpo alargado y sus patas cortas lo hacen único y fácilmente reconocible, mientras que su personalidad juguetona y su valentía lo convierten en un excelente compañero para quienes buscan un perro leal y activo. En King Dog, tu criadero de perros en Colombia, ofrecemos cachorros de Salchicha (Teckel) en venta, todos con certificación de pureza de raza y una garantía de salud.",
    caracteristicas: [
      "Perro pequeño pesando entre 3 y 7 kg con cuerpo alargado único",
      "Tres tipos de pelaje: liso, largo o duro según preferencia",
      "Personalidad valiente e independiente a pesar de su tamaño",
      "Leal y afectuoso con familia, actitud juguetona y extrovertida",
      "Colores variados: negro y fuego, chocolate, rojo, arlequín"
    ],
    cuidados: [
      "Metabolismo rápido: dieta de alta calidad adaptada a su tamaño",
      "Tiene mucha energía: disfruta paseos diarios y tiempo de juego",
      "Inteligente y curioso: disfruta actividades estimulantes mentalmente",
      "Pelaje liso fácil de mantener, largo y duro requiere cepillado regular",
      "Controlar peso para evitar problemas de espalda por cuerpo alargado"
    ],
    porQueElegir: [
      "Certificación de pureza de raza con garantía de por vida",
      "Garantía de salud: vacunado y desparasitado debidamente",
      "Asesoramiento sobre mejor alimentación para crecimiento saludable",
      "Cría profesional con más de 14 años de experiencia",
      "Entrega segura en Bogotá, Medellín, Cali, Bucaramanga",
      "Precios competitivos en el mercado colombiano"
    ]
  },

  "Yorkshire": {
    descImage: yorkshireDesc,
    descripcion: "El Yorkshire Terrier, conocido cariñosamente como Yorkie, es una de las razas más populares debido a su tamaño compacto y su personalidad intrépida. En King Dog, tu criadero de perros en Colombia, nos especializamos en la venta de Yorkshire Terrier de raza pura, garantizando su pureza y salud con una certificación de pureza y una garantía de salud para tu tranquilidad. Si buscas un Yorkshire Terrier en venta en Colombia, en King Dog ofrecemos lo mejor en cachorros Yorkshire Terrier a precios competitivos.",
    caracteristicas: [
      "Raza pequeña alcanzando entre 2 y 3 kg ideal para espacios reducidos",
      "Perfecto para apartamentos en ciudades como Bogotá, Medellín, Cali",
      "Personalidad audaz, valiente y muy activa a pesar de su tamaño",
      "Llenos de energía, curiosos y alertas, perfectos para familias",
      "Pelaje largo, suave y brillante que requiere cuidado constante"
    ],
    cuidados: [
      "Metabolismo rápido: dieta equilibrada adaptada a su tamaño y energía",
      "Muy activo: disfruta jugar y hacer ejercicio en espacios reducidos",
      "Paseos cortos y juegos en el hogar para mantenerlo en forma",
      "Cepillado regular para evitar enredos en pelaje largo",
      "Baños y cortes periódicos para mantener apariencia saludable"
    ],
    porQueElegir: [
      "Certificación de pureza de raza con garantía de por vida",
      "Garantía de salud: esquema de vacunación al día y desparasitación",
      "Orientación sobre alimentación, cuidados y adiestramiento",
      "Asesoría para que se convierta en miembro feliz de tu familia",
      "Entrega segura nacional en Cali, Medellín, Bogotá y más",
      "Precios accesibles con mejores opciones para cachorro de calidad en Colombia"
    ]
  }
};