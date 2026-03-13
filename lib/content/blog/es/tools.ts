import type { BlogPost } from '../types'

export const toolPosts: BlogPost[] = [
  {
    slug: 'history-of-coin-flipping',
    category: 'tools',
    title: 'La historia del lanzamiento de moneda: de la antigua Roma a tu navegador',
    description: 'Cómo el lanzamiento de moneda evolucionó desde rituales antiguos hasta una herramienta digital moderna usada en deportes, derecho y decisiones cotidianas.',
    publishedDate: '2026-01-12',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "El lanzamiento de moneda es una de las herramientas de decisión más antiguas de la humanidad. Mucho antes de la teoría de la probabilidad, antes de la estadística, antes de las computadoras, la gente usaba objetos marcados para dejar que el azar resolviera disputas. La función social no ha cambiado en 2.000 años: crear un proceso neutral aceptado donde ambas partes puedan seguir adelante sin resentimientos.",
    sections: [
      {
        heading: 'Orígenes antiguos: cara o barco',
        body: [
          'Los romanos lo llamaban "navia aut caput": barcos o cabezas. Las monedas romanas mostraban la cabeza de un dios en un lado y un barco en el otro. Los ciudadanos usaban estas monedas para resolver disputas, tomar decisiones e incluso consultar a los dioses. El resultado se consideraba guía divina.',
          'Prácticas similares existían en todas las culturas. Los griegos antiguos usaban fragmentos de cerámica marcados. Los chinos usaban monedas con hexagramas inscritos. Las culturas nórdicas usaban runas talladas. El objeto específico variaba, pero la función social era idéntica: un proceso neutral y visible para resolver la incertidumbre.',
          'Lo que hacía poderosas estas prácticas no era su aleatoriedad, sino su legitimidad social. Ambas partes acordaban de antemano aceptar el resultado. Ese acuerdo es lo que transformó un evento aleatorio en una decisión vinculante.',
        ]
      },
      {
        heading: 'Europa medieval: cara o cruz',
        body: [
          'En la Inglaterra medieval, el lanzamiento de moneda se llamaba "cara o cruz". Esta práctica era tan común que aparece en los Cuentos de Canterbury de Chaucer y en las obras de Shakespeare.',
          'Los tribunales medievales usaban lanzamientos de moneda para resolver disputas de propiedad, determinar el orden de los juicios y resolver asuntos legales menores. La iglesia inicialmente se resistió, viéndolo como un llamado al azar en lugar de la voluntad divina, pero eventualmente lo aceptó como una herramienta legítima de resolución de disputas.',
          'La frase "es un lanzamiento de moneda" entró en el idioma inglés durante este período, reflejando cuán profundamente arraigada estaba la práctica en la toma de decisiones cotidiana.',
        ]
      },
      {
        heading: 'Deportes y adopción institucional',
        body: [
          'El lanzamiento de moneda deportivo moderno se formalizó en el siglo XIX. El cricket lo adoptó en la década de 1870 para determinar qué equipo bateaba primero. El fútbol americano introdujo el lanzamiento de moneda en 1892. La Copa Mundial de la FIFA ha usado lanzamientos de moneda para resolver partidos empatados desde 1954.',
          'Los sistemas legales también adoptaron la selección aleatoria. El proceso de selección de jurados federales de EE.UU. usa sorteos aleatorios. Muchos países usan la asignación aleatoria para la selección de jueces en casos sensibles.',
          'La adopción institucional de los lanzamientos de moneda refleja una profunda intuición humana: a veces la decisión más justa no es ninguna decisión en absoluto, sino un proceso neutral que todos pueden aceptar.',
        ]
      },
      {
        heading: 'La transición digital',
        body: [
          'Las primeras herramientas digitales de lanzamiento de moneda aparecieron a principios de la década de 2000 como simples funciones de JavaScript. Para 2010, las aplicaciones móviles habían hecho los lanzamientos de moneda digitales ubicuos. Hoy, las herramientas basadas en navegador ofrecen aleatoriedad criptográfica estadísticamente superior a cualquier moneda física.',
          'Los lanzamientos de moneda digitales preservan la función social de las monedas físicas mientras añaden nuevas capacidades: registros de resultados para la transparencia, múltiples lanzamientos simultáneos e integración con otras herramientas de decisión.',
          'La transición de lo físico a lo digital no ha cambiado el caso de uso fundamental. La gente todavía usa lanzamientos de moneda para resolver disputas, tomar decisiones y romper empates, la misma función social que los ciudadanos romanos usaban hace 2.000 años.',
        ]
      },
      {
        heading: 'Por qué el lanzamiento de moneda perdura',
        body: [
          'El lanzamiento de moneda ha sobrevivido durante milenios porque resuelve un problema humano fundamental: cómo tomar una decisión justa cuando el análisis racional produce un empate. El lanzamiento de moneda no es un sustituto del pensamiento, es una herramienta para el momento en que el pensamiento ha hecho todo lo que puede.',
          'Su durabilidad también refleja una profunda sabiduría social: a veces el proceso importa más que el resultado. Una decisión tomada a través de un proceso justo y visible es más probable que sea aceptada y actuada que una decisión tomada a través de una deliberación opaca.',
          'Ya sea que uses una moneda física o una herramienta digital, estás participando en una de las tradiciones de decisión más antiguas y duraderas de la humanidad.',
        ]
      }
    ],
    faqs: [
      { question: '¿Es un lanzamiento de moneda verdaderamente aleatorio?', answer: 'Un lanzamiento de moneda físico no es perfectamente aleatorio: está influenciado por las condiciones iniciales del lanzamiento. Los estudios muestran un ligero sesgo hacia la cara inicial. Un lanzamiento de moneda digital usando aleatoriedad criptográfica es estadísticamente más uniforme.' },
      { question: '¿Cuál es el lanzamiento de moneda más famoso de la historia?', answer: 'El lanzamiento de moneda de los hermanos Wright de 1903 para determinar quién intentaría el primer vuelo motorizado es frecuentemente citado. Wilbur ganó el lanzamiento pero su intento falló. Orville realizó el exitoso primer vuelo tres días después.' },
      { question: '¿Se han tomado decisiones importantes por lanzamiento de moneda?', answer: 'Sí. La ciudad de Portland, Oregón, fue nombrada por lanzamiento de moneda en 1845. Varias elecciones al Congreso de EE.UU. han sido decididas por lanzamiento de moneda cuando los votos estaban empatados.' },
      { question: '¿Por qué los deportes usan lanzamientos de moneda en lugar de otros métodos aleatorios?', answer: 'Los lanzamientos de moneda se usan en deportes porque son rápidos, visibles y universalmente entendidos. Ambos equipos pueden ver el proceso y aceptar el resultado.' },
      { question: '¿Cómo funciona un lanzamiento de moneda digital?', answer: 'Un lanzamiento de moneda digital usa un generador de números aleatorios criptográficamente seguro (CSPRNG) para generar un bit aleatorio (0 o 1), luego lo mapea a cara o cruz. Esto es estadísticamente más uniforme que una moneda física.' }
    ],
    relatedSlugs: ['coin-flip-psychology', 'coin-flip-vs-dice-roll', 'famous-coin-flip-moments'],
    relatedToolHrefs: ['/coin-flip', '/random-number-generator', '/yes-or-no'],
    tags: ['lanzamiento de moneda', 'historia', 'aleatoriedad', 'herramientas de decisión']
  },
]
