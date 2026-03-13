import type { ToolKey } from './tools'
import type { Locale } from '@/lib/i18n'

type ToolI18n = {
  metaTitle: string       // for <title> tag, ~60 chars
  metaDescription: string // for meta description, ~155 chars
  title: string           // display title in the page shell, ~50 chars
  subtitle: string        // display subtitle, ~100 chars
}

export const toolI18n: Partial<Record<Locale, Partial<Record<ToolKey, ToolI18n>>>> = {
  es: {
    'coin-flip': {
      metaTitle: 'Lanzar Moneda | Simulador Gratuito Online',
      metaDescription: 'Lanza una moneda virtual gratis. Cara o cruz con animación 3D e historial de resultados. Ideal para decidir rápido entre dos opciones.',
      title: 'Lanzar Moneda',
      subtitle: 'Toma decisiones rápidas con un lanzamiento de moneda justo y resultados claros.',
    },
    'dice-roller': {
      metaTitle: 'Tirar Dados Online | D4 hasta D20 Gratis',
      metaDescription: 'Lanza uno o varios dados virtuales gratis: D4, D6, D8, D10, D12 y D20. Resultado instantáneo con suma total. Perfecto para juegos de rol y de mesa.',
      title: 'Tirar Dados',
      subtitle: 'Lanza uno o varios dados con totales instantáneos para tus juegos favoritos.',
    },
    'spin-the-wheel': {
      metaTitle: 'Girar la Ruleta | Decisión Aleatoria Gratis',
      metaDescription: 'Agrega tus opciones y gira la ruleta para una elección aleatoria. Ideal para sorteos, turnos, juegos y decisiones en grupo.',
      title: 'Girar la Ruleta',
      subtitle: 'Añade tus opciones y gira para una elección aleatoria justa y divertida.',
    },
    'yes-or-no': {
      metaTitle: 'Generador Sí o No | Decisión Instantánea Gratis',
      metaDescription: 'Obtén una respuesta definitiva de sí o no al instante. Perfecto para desempates rápidos, juegos y decisiones cotidianas con una sola pregunta.',
      title: 'Generador Sí o No',
      subtitle: 'Obtén una respuesta decisiva de sí o no al instante.',
    },
    'random-number-generator': {
      metaTitle: 'Generador de Números Aleatorios Gratis',
      metaDescription: 'Genera números aleatorios en cualquier rango al instante. Ideal para sorteos, estadísticas, juegos y cualquier situación que requiera azar.',
      title: 'Generador de Números Aleatorios',
      subtitle: 'Genera números aleatorios en cualquier rango de forma instantánea.',
    },
    'random-name-picker': {
      metaTitle: 'Elegir Nombre al Azar | Sorteo Gratis Online',
      metaDescription: 'Pega una lista de nombres y elige uno al azar con un solo clic. Perfecto para sorteos, rifas, selección de equipos y decisiones grupales.',
      title: 'Elegir Nombre al Azar',
      subtitle: 'Pega tu lista de nombres y elige uno al instante.',
    },
    'team-generator': {
      metaTitle: 'Generador de Equipos Aleatorios Gratis',
      metaDescription: 'Divide una lista de participantes en equipos aleatorios equilibrados. Ideal para deportes, clases, juegos y actividades de equipo.',
      title: 'Generador de Equipos',
      subtitle: 'Divide tu lista de participantes en equipos aleatorios equilibrados.',
    },
    'random-letter': {
      metaTitle: 'Generador de Letras Aleatorias Gratis',
      metaDescription: 'Genera letras del alfabeto al azar para juegos de palabras, práctica de idiomas, categorías o cualquier actividad que necesite letras al azar.',
      title: 'Generador de Letras Aleatorias',
      subtitle: 'Genera letras del alfabeto al azar para juegos y desafíos.',
    },
    'random-color': {
      metaTitle: 'Generador de Colores Aleatorios | HEX y RGB Gratis',
      metaDescription: 'Genera colores aleatorios en formato HEX y RGB al instante. Perfecto para diseño, arte digital, inspiración creativa y proyectos de desarrollo.',
      title: 'Generador de Colores Aleatorios',
      subtitle: 'Genera colores HEX y RGB aleatorios para tus proyectos creativos.',
    },
    'countdown-timer-random': {
      metaTitle: 'Temporizador + Resultado Aleatorio Gratis',
      metaDescription: 'Configura una cuenta regresiva y activa un resultado aleatorio al finalizar. Ideal para juegos con tiempo, dinámicas de grupo y sorteos cronometrados.',
      title: 'Temporizador + Aleatorio',
      subtitle: 'Configura un temporizador y activa resultados aleatorios al expirar.',
    },
    'random-food-picker': {
      metaTitle: '¿Qué Como Hoy? Elegir Comida al Azar Gratis',
      metaDescription: '¿No sabes qué comer? Deja que el azar decida por ti. Elige un tipo de comida o restaurante al instante y elimina la indecisión de una vez.',
      title: 'Elegir Comida al Azar',
      subtitle: 'Pon fin a la indecisión sobre qué comer en segundos.',
    },
    'random-date-generator': {
      metaTitle: 'Generador de Fechas Aleatorias Gratis',
      metaDescription: 'Genera una fecha aleatoria dentro de cualquier rango que elijas. Útil para pruebas, juegos, planificación creativa y ejercicios de datos.',
      title: 'Generador de Fechas Aleatorias',
      subtitle: 'Elige un rango y obtén una fecha aleatoria al instante.',
    },
    'lottery-number-generator': {
      metaTitle: 'Generador de Números de Lotería Gratis',
      metaDescription: 'Genera combinaciones únicas de números estilo lotería al instante. Ideal para sorteos, loterías, rifas y juegos que requieren números únicos al azar.',
      title: 'Generador de Lotería',
      subtitle: 'Genera combinaciones únicas de números al estilo lotería.',
    },
    'baby-name-generator': {
      metaTitle: 'Generador de Nombres para Bebé Gratis',
      metaDescription: 'Descubre nombres de bebé aleatorios según tu estilo preferido. Explora opciones clásicas, modernas o internacionales para tu recién llegado.',
      title: 'Generador de Nombres para Bebé',
      subtitle: 'Descubre ideas de nombres para bebé según tu estilo.',
    },
    'icebreaker-question-generator': {
      metaTitle: 'Generador de Preguntas para Romper el Hielo Gratis',
      metaDescription: 'Genera preguntas aleatorias para animar reuniones, clases y eventos. Inicia conversaciones divertidas y significativas con un solo clic.',
      title: 'Preguntas para Romper el Hielo',
      subtitle: 'Inicia conversaciones con preguntas aleatorias y divertidas.',
    },
  },

  pt: {
    'coin-flip': {
      metaTitle: 'Cara ou Coroa | Simulador Grátis Online',
      metaDescription: 'Jogue cara ou coroa virtual grátis com animação 3D e histórico de resultados. Tome decisões rápidas entre duas opções com um lançamento justo.',
      title: 'Cara ou Coroa',
      subtitle: 'Resolva decisões rápidas com um lançamento de moeda justo e resultados claros.',
    },
    'dice-roller': {
      metaTitle: 'Rolar Dados Online | D4 ao D20 Grátis',
      metaDescription: 'Role um ou vários dados virtuais grátis: D4, D6, D8, D10, D12 e D20. Resultado instantâneo com soma total. Perfeito para RPG e jogos de tabuleiro.',
      title: 'Rolar Dados',
      subtitle: 'Role um ou vários dados com totais instantâneos para seus jogos favoritos.',
    },
    'spin-the-wheel': {
      metaTitle: 'Girar a Roleta | Escolha Aleatória Grátis',
      metaDescription: 'Adicione suas opções e gire a roleta para uma escolha aleatória. Ideal para sorteios, turnos, jogos e decisões em grupo de forma divertida.',
      title: 'Girar a Roleta',
      subtitle: 'Adicione suas opções e gire para uma escolha aleatória justa.',
    },
    'yes-or-no': {
      metaTitle: 'Gerador de Sim ou Não | Decisão Instantânea Grátis',
      metaDescription: 'Obtenha uma resposta definitiva de sim ou não na hora. Perfeito para desempates, jogos e decisões do dia a dia com uma resposta imediata.',
      title: 'Gerador de Sim ou Não',
      subtitle: 'Obtenha uma resposta decisiva de sim ou não instantaneamente.',
    },
    'random-number-generator': {
      metaTitle: 'Gerador de Números Aleatórios Grátis',
      metaDescription: 'Gere números aleatórios em qualquer intervalo na hora. Ideal para sorteios, estatísticas, jogos e qualquer situação que exija aleatoriedade.',
      title: 'Gerador de Números Aleatórios',
      subtitle: 'Gere números aleatórios em qualquer intervalo de forma instantânea.',
    },
    'random-name-picker': {
      metaTitle: 'Sortear Nome Aleatório | Grátis Online',
      metaDescription: 'Cole uma lista de nomes e sorteie um instantaneamente com um clique. Perfeito para rifas, sorteios, seleção de equipes e decisões em grupo.',
      title: 'Sortear Nome Aleatório',
      subtitle: 'Cole sua lista de nomes e sorteie um instantaneamente.',
    },
    'team-generator': {
      metaTitle: 'Gerador de Times Aleatórios Grátis',
      metaDescription: 'Divida uma lista de participantes em times aleatórios equilibrados. Ideal para esportes, aulas, jogos e dinâmicas de equipe.',
      title: 'Gerador de Times',
      subtitle: 'Divida sua lista de participantes em times aleatórios equilibrados.',
    },
    'random-letter': {
      metaTitle: 'Gerador de Letras Aleatórias Grátis',
      metaDescription: 'Gere letras do alfabeto aleatoriamente para jogos de palavras, prática de idiomas, categorias ou atividades criativas que precisam de letras ao acaso.',
      title: 'Gerador de Letras Aleatórias',
      subtitle: 'Gere letras do alfabeto aleatoriamente para jogos e desafios.',
    },
    'random-color': {
      metaTitle: 'Gerador de Cores Aleatórias | HEX e RGB Grátis',
      metaDescription: 'Gere cores aleatórias nos formatos HEX e RGB instantaneamente. Perfeito para design, arte digital, inspiração criativa e desenvolvimento web.',
      title: 'Gerador de Cores Aleatórias',
      subtitle: 'Gere cores HEX e RGB aleatórias para seus projetos criativos.',
    },
    'countdown-timer-random': {
      metaTitle: 'Temporizador + Resultado Aleatório Grátis',
      metaDescription: 'Configure uma contagem regressiva e acione um resultado aleatório ao final. Ideal para jogos com tempo, dinâmicas em grupo e sorteios cronometrados.',
      title: 'Temporizador + Aleatório',
      subtitle: 'Configure um temporizador e acione resultados aleatórios ao expirar.',
    },
    'random-food-picker': {
      metaTitle: 'O Que Comer Hoje? Escolha Comida Aleatória Grátis',
      metaDescription: 'Sem ideia do que comer? Deixe o acaso decidir por você. Escolha um prato ou restaurante na hora e acabe com a indecisão de uma vez por todas.',
      title: 'Escolher Comida Aleatória',
      subtitle: 'Acabe com a indecisão sobre o que comer em segundos.',
    },
    'random-date-generator': {
      metaTitle: 'Gerador de Datas Aleatórias Grátis',
      metaDescription: 'Gere uma data aleatória dentro de qualquer intervalo que você escolher. Útil para testes, jogos, planejamento criativo e exercícios com dados.',
      title: 'Gerador de Datas Aleatórias',
      subtitle: 'Escolha um intervalo e obtenha uma data aleatória instantaneamente.',
    },
    'lottery-number-generator': {
      metaTitle: 'Gerador de Números de Loteria Grátis',
      metaDescription: 'Gere combinações únicas de números estilo loteria instantaneamente. Ideal para sorteios, loterias, rifas e jogos que exigem números únicos ao acaso.',
      title: 'Gerador de Loteria',
      subtitle: 'Gere combinações únicas de números estilo loteria.',
    },
    'baby-name-generator': {
      metaTitle: 'Gerador de Nomes para Bebê Grátis',
      metaDescription: 'Descubra nomes de bebê aleatórios de acordo com seu estilo preferido. Explore opções clássicas, modernas ou internacionais para o seu filho.',
      title: 'Gerador de Nomes para Bebê',
      subtitle: 'Descubra ideias de nomes para bebê de acordo com seu estilo.',
    },
    'icebreaker-question-generator': {
      metaTitle: 'Gerador de Perguntas para Quebrar o Gelo Grátis',
      metaDescription: 'Gere perguntas aleatórias para animar reuniões, aulas e eventos. Inicie conversas divertidas e significativas com um único clique.',
      title: 'Perguntas para Quebrar o Gelo',
      subtitle: 'Inicie conversas com perguntas aleatórias e divertidas.',
    },
  },

  ar: {
    'coin-flip': {
      metaTitle: 'رمي العملة | محاكي مجاني على الإنترنت',
      metaDescription: 'ارمِ عملة افتراضية مجاناً بتحريك ثلاثي الأبعاد وسجل نتائج. اتخذ قرارات سريعة بين خيارين برمية عادلة وموثوقة.',
      title: 'رمي العملة',
      subtitle: 'اتخذ قرارات سريعة برمية عملة عادلة ونتائج واضحة.',
    },
    'dice-roller': {
      metaTitle: 'رمي النرد عبر الإنترنت | D4 حتى D20 مجاناً',
      metaDescription: 'ارمِ نرداً أو أكثر افتراضياً مجاناً: D4 وD6 وD8 وD10 وD12 وD20. نتيجة فورية مع المجموع الكلي. مثالي لألعاب تمثيل الأدوار وألعاب الطاولة.',
      title: 'رمي النرد',
      subtitle: 'ارمِ نرداً واحداً أو أكثر مع مجاميع فورية لألعابك المفضلة.',
    },
    'spin-the-wheel': {
      metaTitle: 'تدوير العجلة | اختيار عشوائي مجاناً',
      metaDescription: 'أضف خياراتك ودوّر العجلة للحصول على اختيار عشوائي عادل. مثالي للسحوبات والأدوار والألعاب والقرارات الجماعية.',
      title: 'تدوير العجلة',
      subtitle: 'أضف خياراتك ودوّر للحصول على اختيار عشوائي عادل ومسلٍّ.',
    },
    'yes-or-no': {
      metaTitle: 'مولّد نعم أو لا | قرار فوري مجاناً',
      metaDescription: 'احصل على إجابة حاسمة بنعم أو لا على الفور. مثالي لكسر التعادل والألعاب وقرارات الحياة اليومية بإجابة واضحة وسريعة.',
      title: 'مولّد نعم أو لا',
      subtitle: 'احصل على إجابة حاسمة بنعم أو لا في الحال.',
    },
    'random-number-generator': {
      metaTitle: 'مولّد أرقام عشوائية مجاناً',
      metaDescription: 'أنشئ أرقاماً عشوائية في أي نطاق تختاره فوراً. مثالي للسحوبات والإحصاء والألعاب وأي موقف يتطلب العشوائية.',
      title: 'مولّد أرقام عشوائية',
      subtitle: 'أنشئ أرقاماً عشوائية في أي نطاق بشكل فوري.',
    },
    'random-name-picker': {
      metaTitle: 'اختيار اسم عشوائي | سحب مجاني عبر الإنترنت',
      metaDescription: 'الصق قائمة الأسماء واختر اسماً واحداً عشوائياً بنقرة واحدة. مثالي للسحوبات والقرعة واختيار الفرق والقرارات الجماعية.',
      title: 'اختيار اسم عشوائي',
      subtitle: 'الصق قائمة الأسماء واختر اسماً واحداً على الفور.',
    },
    'team-generator': {
      metaTitle: 'مولّد الفرق العشوائية مجاناً',
      metaDescription: 'قسّم قائمة المشاركين إلى فرق عشوائية متوازنة. مثالي للرياضة والفصول الدراسية والألعاب وأنشطة الفريق المختلفة.',
      title: 'مولّد الفرق العشوائية',
      subtitle: 'قسّم قائمة المشاركين إلى فرق عشوائية متوازنة.',
    },
    'random-letter': {
      metaTitle: 'مولّد حروف عشوائية مجاناً',
      metaDescription: 'أنشئ حروف الأبجدية عشوائياً للألعاب اللغوية وتعلم اللغات والفئات أو أي نشاط يحتاج إلى حروف عشوائية.',
      title: 'مولّد حروف عشوائية',
      subtitle: 'أنشئ حروف الأبجدية عشوائياً للألعاب والتحديات.',
    },
    'random-color': {
      metaTitle: 'مولّد ألوان عشوائية | HEX و RGB مجاناً',
      metaDescription: 'أنشئ ألواناً عشوائية بصيغتَي HEX وRGB فوراً. مثالي للتصميم والفن الرقمي والإلهام الإبداعي ومشاريع تطوير الويب.',
      title: 'مولّد ألوان عشوائية',
      subtitle: 'أنشئ ألوان HEX وRGB عشوائية لمشاريعك الإبداعية.',
    },
    'countdown-timer-random': {
      metaTitle: 'مؤقت العد التنازلي + نتيجة عشوائية مجاناً',
      metaDescription: 'اضبط عداداً تنازلياً وفعّل نتيجة عشوائية عند انتهائه. مثالي للألعاب المحددة بوقت وديناميكيات المجموعات والسحوبات المزمنة.',
      title: 'المؤقت + العشوائي',
      subtitle: 'اضبط مؤقتاً وفعّل نتائج عشوائية عند انتهاء الوقت.',
    },
    'random-food-picker': {
      metaTitle: 'ماذا آكل اليوم؟ اختيار طعام عشوائي مجاناً',
      metaDescription: 'لا تعرف ماذا تأكل؟ دع الحظ يقرر عنك. اختر وجبة أو مطعماً على الفور وتخلص من التردد نهائياً.',
      title: 'اختيار طعام عشوائي',
      subtitle: 'ضع حداً للتردد في اختيار الطعام في ثوانٍ معدودة.',
    },
    'random-date-generator': {
      metaTitle: 'مولّد تواريخ عشوائية مجاناً',
      metaDescription: 'أنشئ تاريخاً عشوائياً ضمن أي نطاق زمني تختاره. مفيد للاختبارات والألعاب والتخطيط الإبداعي وتمارين البيانات.',
      title: 'مولّد تواريخ عشوائية',
      subtitle: 'اختر نطاقاً واحصل على تاريخ عشوائي فوراً.',
    },
    'lottery-number-generator': {
      metaTitle: 'مولّد أرقام اليانصيب مجاناً',
      metaDescription: 'أنشئ مجموعات أرقام فريدة على غرار اليانصيب فوراً. مثالي للسحوبات واليانصيب والقرعة والألعاب التي تتطلب أرقاماً فريدة عشوائية.',
      title: 'مولّد اليانصيب',
      subtitle: 'أنشئ مجموعات أرقام فريدة على غرار اليانصيب.',
    },
    'baby-name-generator': {
      metaTitle: 'مولّد أسماء الأطفال مجاناً',
      metaDescription: 'اكتشف أسماء أطفال عشوائية وفق أسلوبك المفضل. استكشف خيارات كلاسيكية أو حديثة أو عالمية لمولودك الجديد.',
      title: 'مولّد أسماء الأطفال',
      subtitle: 'اكتشف أفكار أسماء للأطفال وفق أسلوبك المفضل.',
    },
    'icebreaker-question-generator': {
      metaTitle: 'مولّد أسئلة كسر الجليد مجاناً',
      metaDescription: 'أنشئ أسئلة عشوائية لتنشيط الاجتماعات والفصول والفعاليات. ابدأ محادثات ممتعة وذات معنى بنقرة واحدة.',
      title: 'أسئلة كسر الجليد',
      subtitle: 'ابدأ محادثات شيّقة بأسئلة عشوائية ومسلية.',
    },
  },

  hi: {
    'coin-flip': {
      metaTitle: 'सिक्का उछालें | मुफ़्त ऑनलाइन सिम्युलेटर',
      metaDescription: 'मुफ़्त में वर्चुअल सिक्का उछालें। 3D एनिमेशन और परिणामों के इतिहास के साथ। दो विकल्पों के बीच तेज़ और निष्पक्ष फैसला करें।',
      title: 'सिक्का उछालें',
      subtitle: 'निष्पक्ष वर्चुअल सिक्के से झटपट फैसले करें, स्पष्ट परिणाम पाएं।',
    },
    'dice-roller': {
      metaTitle: 'पासा फेंकें ऑनलाइन | D4 से D20 मुफ़्त',
      metaDescription: 'एक या अधिक वर्चुअल पासे मुफ़्त में फेंकें: D4, D6, D8, D10, D12 और D20। कुल जोड़ के साथ तुरंत परिणाम। RPG और बोर्ड गेम्स के लिए परफेक्ट।',
      title: 'पासा फेंकें',
      subtitle: 'अपने पसंदीदा खेलों के लिए एक या अधिक पासे तुरंत कुल के साथ फेंकें।',
    },
    'spin-the-wheel': {
      metaTitle: 'व्हील घुमाएं | रैंडम चुनाव मुफ़्त में',
      metaDescription: 'अपने विकल्प जोड़ें और व्हील घुमाएं। रैंडम और निष्पक्ष चुनाव के लिए। लकी ड्रॉ, टर्न, गेम्स और ग्रुप डिसीज़न के लिए आदर्श।',
      title: 'व्हील घुमाएं',
      subtitle: 'अपने विकल्प जोड़ें और रैंडम निष्पक्ष चुनाव के लिए व्हील घुमाएं।',
    },
    'yes-or-no': {
      metaTitle: 'हाँ या ना जनरेटर | तुरंत फैसला मुफ़्त में',
      metaDescription: 'तुरंत हाँ या ना का स्पष्ट जवाब पाएं। टाई तोड़ने, गेम्स और रोज़मर्रा के फैसलों के लिए एकदम सही।',
      title: 'हाँ या ना जनरेटर',
      subtitle: 'तुरंत हाँ या ना का निर्णायक जवाब पाएं।',
    },
    'random-number-generator': {
      metaTitle: 'रैंडम नंबर जनरेटर | मुफ़्त ऑनलाइन',
      metaDescription: 'किसी भी रेंज में तुरंत रैंडम नंबर जनरेट करें। लकी ड्रॉ, आँकड़े, गेम्स और किसी भी रैंडमनेस ज़रूरत के लिए परफेक्ट।',
      title: 'रैंडम नंबर जनरेटर',
      subtitle: 'किसी भी रेंज में रैंडम नंबर तुरंत जनरेट करें।',
    },
    'random-name-picker': {
      metaTitle: 'रैंडम नाम चुनें | मुफ़्त ऑनलाइन ड्रॉ',
      metaDescription: 'नामों की लिस्ट पेस्ट करें और एक क्लिक में तुरंत रैंडम नाम चुनें। ड्रॉ, रैफल, टीम सिलेक्शन और ग्रुप डिसीज़न के लिए परफेक्ट।',
      title: 'रैंडम नाम चुनें',
      subtitle: 'नामों की लिस्ट पेस्ट करें और तुरंत एक रैंडम नाम चुनें।',
    },
    'team-generator': {
      metaTitle: 'रैंडम टीम जनरेटर | मुफ़्त ऑनलाइन',
      metaDescription: 'प्रतिभागियों की लिस्ट को संतुलित रैंडम टीमों में बाँटें। खेल, कक्षा, गेम्स और टीम गतिविधियों के लिए आदर्श।',
      title: 'टीम जनरेटर',
      subtitle: 'प्रतिभागियों की लिस्ट को संतुलित रैंडम टीमों में बाँटें।',
    },
    'random-letter': {
      metaTitle: 'रैंडम अक्षर जनरेटर | मुफ़्त ऑनलाइन',
      metaDescription: 'शब्द खेलों, भाषा अभ्यास, कैटेगरी गेम्स और रचनात्मक गतिविधियों के लिए रैंडम अक्षर जनरेट करें।',
      title: 'रैंडम अक्षर जनरेटर',
      subtitle: 'खेलों और चुनौतियों के लिए रैंडम अक्षर जनरेट करें।',
    },
    'random-color': {
      metaTitle: 'रैंडम कलर जनरेटर | HEX और RGB मुफ़्त',
      metaDescription: 'HEX और RGB फॉर्मेट में रैंडम रंग तुरंत जनरेट करें। डिज़ाइन, डिजिटल आर्ट, क्रिएटिव इंस्पिरेशन और वेब डेवलपमेंट के लिए परफेक्ट।',
      title: 'रैंडम कलर जनरेटर',
      subtitle: 'अपने क्रिएटिव प्रोजेक्ट्स के लिए रैंडम HEX और RGB रंग जनरेट करें।',
    },
    'countdown-timer-random': {
      metaTitle: 'काउंटडाउन टाइमर + रैंडम रिज़ल्ट मुफ़्त',
      metaDescription: 'काउंटडाउन सेट करें और समाप्त होने पर रैंडम परिणाम ट्रिगर करें। टाइम-बेस्ड गेम्स, ग्रुप एक्टिविटी और टाइम्ड ड्रॉ के लिए आदर्श।',
      title: 'टाइमर + रैंडम',
      subtitle: 'टाइमर सेट करें और समाप्त होने पर रैंडम परिणाम ट्रिगर करें।',
    },
    'random-food-picker': {
      metaTitle: 'आज क्या खाएं? रैंडम फूड पिकर मुफ़्त',
      metaDescription: 'क्या खाना है नहीं पता? किस्मत पर छोड़ दें। सेकंडों में खाने का फैसला करें और खाने की असमंजस को हमेशा के लिए खत्म करें।',
      title: 'रैंडम फूड पिकर',
      subtitle: 'सेकंडों में खाने की असमंजस खत्म करें।',
    },
    'random-date-generator': {
      metaTitle: 'रैंडम डेट जनरेटर | मुफ़्त ऑनलाइन',
      metaDescription: 'अपनी पसंद की किसी भी रेंज में रैंडम तारीख जनरेट करें। टेस्टिंग, गेम्स, क्रिएटिव प्लानिंग और डेटा एक्सरसाइज़ के लिए उपयोगी।',
      title: 'रैंडम डेट जनरेटर',
      subtitle: 'रेंज चुनें और तुरंत रैंडम तारीख पाएं।',
    },
    'lottery-number-generator': {
      metaTitle: 'लॉटरी नंबर जनरेटर | मुफ़्त ऑनलाइन',
      metaDescription: 'लॉटरी स्टाइल में अनोखे नंबरों के सेट तुरंत जनरेट करें। ड्रॉ, लॉटरी, रैफल और अनोखे रैंडम नंबर वाले खेलों के लिए परफेक्ट।',
      title: 'लॉटरी नंबर जनरेटर',
      subtitle: 'लॉटरी स्टाइल में अनोखे नंबरों के सेट जनरेट करें।',
    },
    'baby-name-generator': {
      metaTitle: 'बेबी नेम जनरेटर | मुफ़्त ऑनलाइन',
      metaDescription: 'अपनी पसंद के स्टाइल के अनुसार रैंडम बेबी नाम खोजें। अपने नवजात के लिए क्लासिक, मॉडर्न या अंतर्राष्ट्रीय नामों में से चुनें।',
      title: 'बेबी नेम जनरेटर',
      subtitle: 'अपने पसंदीदा स्टाइल के अनुसार बेबी नाम के विचार खोजें।',
    },
    'icebreaker-question-generator': {
      metaTitle: 'आइसब्रेकर सवाल जनरेटर | मुफ़्त ऑनलाइन',
      metaDescription: 'मीटिंग, कक्षाओं और इवेंट्स को जीवंत बनाने के लिए रैंडम सवाल जनरेट करें। एक क्लिक में मज़ेदार और अर्थपूर्ण बातचीत शुरू करें।',
      title: 'आइसब्रेकर सवाल',
      subtitle: 'रैंडम और मज़ेदार सवालों से बातचीत शुरू करें।',
    },
  },

  tr: {
    'coin-flip': {
      metaTitle: 'Yazı Tura | Ücretsiz Online Simülatör',
      metaDescription: 'Ücretsiz sanal yazı tura atın. 3D animasyon ve sonuç geçmişiyle iki seçenek arasında hızlı ve adil karar verin.',
      title: 'Yazı Tura',
      subtitle: 'Adil bir sanal yazı tura atışıyla hızlı kararlar alın, sonuçları net görün.',
    },
    'dice-roller': {
      metaTitle: 'Online Zar At | D4\'ten D20\'ye Ücretsiz',
      metaDescription: 'Bir veya birden fazla sanal zar ücretsiz atın: D4, D6, D8, D10, D12 ve D20. Toplam dahil anında sonuç. RPG ve masa oyunları için mükemmel.',
      title: 'Zar At',
      subtitle: 'Favori oyunlarınız için bir veya birden fazla zarı toplam dahil anında atın.',
    },
    'spin-the-wheel': {
      metaTitle: 'Çarkı Çevir | Rastgele Seçim Ücretsiz',
      metaDescription: 'Seçeneklerinizi ekleyin ve çarkı çevirin. Adil ve eğlenceli rastgele seçim için. Çekilişler, sıralar, oyunlar ve grup kararları için idealdir.',
      title: 'Çarkı Çevir',
      subtitle: 'Seçeneklerinizi ekleyin ve adil rastgele bir seçim için çarkı çevirin.',
    },
    'yes-or-no': {
      metaTitle: 'Evet mi Hayır mı Üreteci | Anında Karar Ücretsiz',
      metaDescription: 'Anında kesin bir evet veya hayır cevabı alın. Beraberlik bozma, oyunlar ve günlük kararlar için tek tıkla net bir sonuç elde edin.',
      title: 'Evet / Hayır Üreteci',
      subtitle: 'Anında kesin bir evet veya hayır cevabı alın.',
    },
    'random-number-generator': {
      metaTitle: 'Rastgele Sayı Üreteci | Ücretsiz Online',
      metaDescription: 'İstediğiniz herhangi bir aralıkta anında rastgele sayılar üretin. Çekilişler, istatistik, oyunlar ve rastgelelik gerektiren her durum için mükemmel.',
      title: 'Rastgele Sayı Üreteci',
      subtitle: 'İstediğiniz herhangi bir aralıkta rastgele sayılar anında üretin.',
    },
    'random-name-picker': {
      metaTitle: 'Rastgele İsim Seç | Ücretsiz Online Çekiliş',
      metaDescription: 'İsimlerinizi yapıştırın ve tek tıkla anında rastgele bir isim seçin. Çekiliş, piyango, ekip seçimi ve grup kararları için mükemmeldir.',
      title: 'Rastgele İsim Seç',
      subtitle: 'İsim listenizi yapıştırın ve anında rastgele bir isim seçin.',
    },
    'team-generator': {
      metaTitle: 'Rastgele Takım Oluşturucu | Ücretsiz Online',
      metaDescription: 'Katılımcı listesini dengeli rastgele takımlara bölün. Spor, sınıf, oyunlar ve takım etkinlikleri için idealdir.',
      title: 'Takım Oluşturucu',
      subtitle: 'Katılımcı listenizi dengeli ve rastgele takımlara bölün.',
    },
    'random-letter': {
      metaTitle: 'Rastgele Harf Üreteci | Ücretsiz Online',
      metaDescription: 'Kelime oyunları, dil pratiği, kategori oyunları ve yaratıcı aktiviteler için rastgele alfabe harfleri üretin.',
      title: 'Rastgele Harf Üreteci',
      subtitle: 'Oyunlar ve meydan okumalar için rastgele alfabe harfleri üretin.',
    },
    'random-color': {
      metaTitle: 'Rastgele Renk Üreteci | HEX ve RGB Ücretsiz',
      metaDescription: 'HEX ve RGB formatında anında rastgele renkler üretin. Tasarım, dijital sanat, yaratıcı ilham ve web geliştirme projeleri için mükemmeldir.',
      title: 'Rastgele Renk Üreteci',
      subtitle: 'Yaratıcı projeleriniz için rastgele HEX ve RGB renkleri üretin.',
    },
    'countdown-timer-random': {
      metaTitle: 'Geri Sayım + Rastgele Sonuç Ücretsiz',
      metaDescription: 'Geri sayım kurun ve süre dolunca rastgele sonuç tetikleyin. Zamanlı oyunlar, grup dinamikleri ve zamanlı çekilişler için idealdir.',
      title: 'Zamanlayıcı + Rastgele',
      subtitle: 'Zamanlayıcı kurun ve süre dolunca rastgele sonuçları tetikleyin.',
    },
    'random-food-picker': {
      metaTitle: 'Ne Yesem? Rastgele Yemek Seçici Ücretsiz',
      metaDescription: 'Ne yiyeceğinizi bilemiyor musunuz? Şansınıza bırakın. Saniyeler içinde bir yemek veya restoran seçin ve kararsızlığa son verin.',
      title: 'Rastgele Yemek Seçici',
      subtitle: 'Ne yiyeceğinize saniyeler içinde karar verin.',
    },
    'random-date-generator': {
      metaTitle: 'Rastgele Tarih Üreteci | Ücretsiz Online',
      metaDescription: 'Seçtiğiniz herhangi bir aralıkta rastgele tarih üretin. Test, oyunlar, yaratıcı planlama ve veri alıştırmaları için faydalıdır.',
      title: 'Rastgele Tarih Üreteci',
      subtitle: 'Bir aralık seçin ve anında rastgele bir tarih elde edin.',
    },
    'lottery-number-generator': {
      metaTitle: 'Piyango Numarası Üreteci | Ücretsiz Online',
      metaDescription: 'Anında piyango tarzı benzersiz sayı kombinasyonları üretin. Çekilişler, piyango, tombala ve rastgele benzersiz sayı gerektiren oyunlar için mükemmeldir.',
      title: 'Piyango Numarası Üreteci',
      subtitle: 'Piyango tarzı benzersiz sayı kombinasyonları üretin.',
    },
    'baby-name-generator': {
      metaTitle: 'Bebek İsmi Üreteci | Ücretsiz Online',
      metaDescription: 'Tercih ettiğiniz stile göre rastgele bebek isimleri keşfedin. Yeni doğanınız için klasik, modern veya uluslararası isim seçeneklerini keşfedin.',
      title: 'Bebek İsmi Üreteci',
      subtitle: 'Bebeğiniz için tercih ettiğiniz stile göre isim fikirleri keşfedin.',
    },
    'icebreaker-question-generator': {
      metaTitle: 'Buz Kırıcı Soru Üreteci | Ücretsiz Online',
      metaDescription: 'Toplantıları, sınıfları ve etkinlikleri renklendirmek için rastgele sorular üretin. Tek tıkla eğlenceli ve anlamlı sohbetler başlatın.',
      title: 'Buz Kırıcı Sorular',
      subtitle: 'Rastgele ve eğlenceli sorularla sohbet başlatın.',
    },
  },
}

export function getToolI18n(key: ToolKey, locale: string): ToolI18n | null {
  if (locale === 'en') return null
  const localeMap = toolI18n[locale as Locale]
  return localeMap?.[key] ?? null
}
