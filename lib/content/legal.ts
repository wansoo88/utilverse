import type { Locale } from '@/lib/i18n'

type LegalBundle = {
  aboutTitle: string
  aboutParagraphs: string[]
  contactTitle: string
  contactParagraphs: string[]
  privacyTitle: string
  privacySections: Array<{ heading: string; body: string }>
  termsTitle: string
  termsSections: Array<{ heading: string; body: string }>
}

const en: LegalBundle = {
  aboutTitle: 'About Decision Toolkit',
  aboutParagraphs: [
    'Decision Toolkit helps users make quick, fair, and transparent everyday decisions with practical random tools and clear guidance.',
    'Our product combines interactive utilities and educational content so users can both execute decisions and improve decision process quality.',
    'We prioritize lightweight UX, mobile accessibility, and clear outcomes over unnecessary complexity.'
  ],
  contactTitle: 'Contact',
  contactParagraphs: [
    'For support, correction requests, or partnerships, contact us after deployment with your official mailbox.',
    'Please include relevant page URL and environment details for technical issues to speed up troubleshooting.'
  ],
  privacyTitle: 'Privacy Policy',
  privacySections: [
    { heading: 'Information We Process', body: 'We process basic technical usage data and local browser-stored tool history needed to provide and improve service functionality.' },
    { heading: 'Cookies and Advertising', body: 'If ad services are enabled, providers may use cookies for ad measurement and personalization under applicable policies.' },
    { heading: 'Regional Rights', body: 'Users may request access, correction, deletion, or objection depending on regional law and eligibility.' }
  ],
  termsTitle: 'Terms of Service',
  termsSections: [
    { heading: 'Service Scope', body: 'The service is provided as-is for utility and informational use. Features may change over time.' },
    { heading: 'Acceptable Use', body: 'Users must avoid abuse, unlawful use, and interference with service operation.' },
    { heading: 'Liability', body: 'Random outputs are not professional advice and must not be relied on for high-stakes legal, medical, or financial decisions.' }
  ]
}

const es: LegalBundle = {
  aboutTitle: 'Acerca de Decision Toolkit',
  aboutParagraphs: [
    'Decision Toolkit ayuda a tomar decisiones rápidas y justas con herramientas aleatorias prácticas.',
    'Combinamos utilidades interactivas y contenido educativo para mejorar el proceso de decisión.',
    'Priorizamos velocidad, claridad y buena experiencia móvil.'
  ],
  contactTitle: 'Contacto',
  contactParagraphs: [
    'Para soporte o colaboraciones, usa el correo oficial una vez desplegado el sitio.',
    'Incluye la URL de la página y detalles del navegador para incidencias técnicas.'
  ],
  privacyTitle: 'Política de Privacidad',
  privacySections: [
    { heading: 'Información procesada', body: 'Procesamos datos técnicos básicos y el historial local necesario para el funcionamiento.' },
    { heading: 'Cookies y anuncios', body: 'Si se activa publicidad, los proveedores pueden usar cookies según sus políticas.' },
    { heading: 'Derechos regionales', body: 'Dependiendo del país, puedes solicitar acceso, corrección o eliminación de datos.' }
  ],
  termsTitle: 'Términos del Servicio',
  termsSections: [
    { heading: 'Alcance del servicio', body: 'El servicio se ofrece tal cual para uso informativo y utilitario.' },
    { heading: 'Uso aceptable', body: 'No se permite abuso, uso ilegal ni interferencia del servicio.' },
    { heading: 'Responsabilidad', body: 'Los resultados aleatorios no sustituyen asesoría profesional en temas críticos.' }
  ]
}

const pt: LegalBundle = {
  aboutTitle: 'Sobre o Decision Toolkit',
  aboutParagraphs: [
    'Decision Toolkit ajuda você a decidir rápido com ferramentas aleatórias claras e práticas.',
    'Unimos utilitários interativos e conteúdo educativo para melhorar decisões no dia a dia.',
    'Nossa prioridade é simplicidade, desempenho e experiência móvel.'
  ],
  contactTitle: 'Contato',
  contactParagraphs: [
    'Para suporte e parcerias, utilize o e-mail oficial após a publicação.',
    'Inclua URL da página e dados do navegador em problemas técnicos.'
  ],
  privacyTitle: 'Política de Privacidade',
  privacySections: [
    { heading: 'Dados processados', body: 'Processamos dados técnicos básicos e histórico local para operação dos recursos.' },
    { heading: 'Cookies e anúncios', body: 'Com anúncios ativos, provedores podem usar cookies conforme suas políticas.' },
    { heading: 'Direitos regionais', body: 'Dependendo da legislação local, você pode solicitar acesso, correção ou exclusão.' }
  ],
  termsTitle: 'Termos de Serviço',
  termsSections: [
    { heading: 'Escopo', body: 'O serviço é oferecido no estado atual para uso utilitário e informativo.' },
    { heading: 'Uso aceitável', body: 'É proibido abuso, uso ilegal e tentativa de interrupção da plataforma.' },
    { heading: 'Responsabilidade', body: 'Resultados aleatórios não substituem aconselhamento profissional em contextos críticos.' }
  ]
}

const ar: LegalBundle = {
  aboutTitle: 'حول Decision Toolkit',
  aboutParagraphs: [
    'يساعدك Decision Toolkit على اتخاذ قرارات سريعة وعادلة باستخدام أدوات عشوائية عملية.',
    'نجمع بين أدوات تفاعلية ومحتوى إرشادي لتحسين جودة اتخاذ القرار.',
    'نركز على البساطة والسرعة وتجربة الهاتف.'
  ],
  contactTitle: 'اتصل بنا',
  contactParagraphs: [
    'للدعم أو التعاون استخدم البريد الرسمي بعد الإطلاق.',
    'يرجى تضمين رابط الصفحة وتفاصيل المتصفح للمشكلات التقنية.'
  ],
  privacyTitle: 'سياسة الخصوصية',
  privacySections: [
    { heading: 'البيانات التي نعالجها', body: 'نعالج بيانات تقنية أساسية وسجلًا محليًا في المتصفح لتحسين الخدمة.' },
    { heading: 'ملفات تعريف الارتباط والإعلانات', body: 'عند تفعيل الإعلانات قد يستخدم مقدمو الخدمة ملفات تعريف الارتباط.' },
    { heading: 'الحقوق الإقليمية', body: 'قد يحق لك طلب الوصول أو التصحيح أو الحذف حسب القوانين المحلية.' }
  ],
  termsTitle: 'شروط الخدمة',
  termsSections: [
    { heading: 'نطاق الخدمة', body: 'تُقدَّم الخدمة كما هي للاستخدام العام والمعلوماتي.' },
    { heading: 'الاستخدام المقبول', body: 'يُمنع إساءة الاستخدام أو الأنشطة غير القانونية أو تعطيل الخدمة.' },
    { heading: 'المسؤولية', body: 'المخرجات العشوائية ليست بديلاً عن الاستشارة المهنية في القرارات الحساسة.' }
  ]
}

const hi: LegalBundle = {
  aboutTitle: 'Decision Toolkit के बारे में',
  aboutParagraphs: [
    'Decision Toolkit रोज़मर्रा के फैसलों को तेज़ और निष्पक्ष बनाने में मदद करता है।',
    'हम इंटरैक्टिव टूल्स और गाइड सामग्री को साथ लाते हैं ताकि निर्णय प्रक्रिया बेहतर हो।',
    'हम सरल UX, गति और मोबाइल उपयोग पर ध्यान देते हैं।'
  ],
  contactTitle: 'संपर्क',
  contactParagraphs: [
    'सपोर्ट या सहयोग के लिए साइट लाइव होने के बाद आधिकारिक ईमेल का उपयोग करें।',
    'तकनीकी समस्या में पेज URL और ब्राउज़र जानकारी शामिल करें।'
  ],
  privacyTitle: 'गोपनीयता नीति',
  privacySections: [
    { heading: 'हम कौन-सा डेटा प्रोसेस करते हैं', body: 'हम बुनियादी तकनीकी डेटा और स्थानीय हिस्ट्री प्रोसेस करते हैं।' },
    { heading: 'कुकी और विज्ञापन', body: 'विज्ञापन सक्रिय होने पर प्रदाता अपनी नीतियों के अनुसार कुकी उपयोग कर सकते हैं।' },
    { heading: 'क्षेत्रीय अधिकार', body: 'स्थानीय कानून के अनुसार आप एक्सेस, सुधार या हटाने का अनुरोध कर सकते हैं।' }
  ],
  termsTitle: 'सेवा की शर्तें',
  termsSections: [
    { heading: 'सेवा का दायरा', body: 'यह सेवा वर्तमान रूप में उपयोगिता और जानकारी के लिए उपलब्ध है।' },
    { heading: 'स्वीकार्य उपयोग', body: 'दुरुपयोग, अवैध उपयोग और सेवा में बाधा निषिद्ध है।' },
    { heading: 'दायित्व', body: 'रैंडम परिणाम उच्च-जोखिम कानूनी/चिकित्सकीय/वित्तीय निर्णयों के लिए सलाह नहीं हैं।' }
  ]
}

const tr: LegalBundle = {
  aboutTitle: 'Decision Toolkit Hakkında',
  aboutParagraphs: [
    'Decision Toolkit günlük kararları hızlı ve adil şekilde almanıza yardımcı olur.',
    'Etkileşimli araçlar ve rehber içerikleri birleştirerek karar kalitesini artırırız.',
    'Önceliğimiz basitlik, performans ve mobil kullanılabilirliktir.'
  ],
  contactTitle: 'İletişim',
  contactParagraphs: [
    'Destek veya iş birliği için yayın sonrası resmi e-posta adresini kullanın.',
    'Teknik sorunlarda sayfa bağlantısı ve tarayıcı bilgisi paylaşın.'
  ],
  privacyTitle: 'Gizlilik Politikası',
  privacySections: [
    { heading: 'İşlenen veriler', body: 'Hizmeti sunmak için temel teknik veriler ve yerel geçmiş bilgisi işlenir.' },
    { heading: 'Çerezler ve reklam', body: 'Reklam etkinse sağlayıcılar kendi politikalarına göre çerez kullanabilir.' },
    { heading: 'Bölgesel haklar', body: 'Yerel yasalara bağlı olarak erişim, düzeltme veya silme talep edebilirsiniz.' }
  ],
  termsTitle: 'Hizmet Şartları',
  termsSections: [
    { heading: 'Hizmet kapsamı', body: 'Hizmet mevcut haliyle bilgilendirici ve yardımcı amaçlarla sunulur.' },
    { heading: 'Kabul edilebilir kullanım', body: 'Kötüye kullanım, yasa dışı faaliyet ve hizmeti bozma girişimleri yasaktır.' },
    { heading: 'Sorumluluk', body: 'Rastgele sonuçlar kritik hukuki, tıbbi veya finansal kararlar için profesyonel tavsiye yerine geçmez.' }
  ]
}

const bundles: Record<Locale, LegalBundle> = { en, es, pt, ar, hi, tr }

export function getLegalBundle(locale: string): LegalBundle {
  if (locale in bundles) {
    return bundles[locale as Locale]
  }
  return en
}