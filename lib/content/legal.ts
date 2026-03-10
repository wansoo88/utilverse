import type { Locale } from '@/lib/i18n'

type LegalBundle = {
  aboutTitle: string
  aboutParagraphs: string[]
  contactTitle: string
  contactParagraphs: string[]
  contactEmail: string
  privacyTitle: string
  privacySections: Array<{ heading: string; body: string }>
  termsTitle: string
  termsSections: Array<{ heading: string; body: string }>
}

const en: LegalBundle = {
  aboutTitle: 'About Random Decision',
  aboutParagraphs: [
    'Random Decision is a free, browser-based collection of random decision tools designed for students, teachers, streamers, and friend groups who need fast, fair, and transparent outcomes — without downloading any app.',
    'Our tools cover everyday decisions: flipping a coin, rolling dice, spinning a wheel, picking a name from a list, generating random numbers, and more. Every result is generated locally in your browser using the Web Crypto API, so no data is ever sent to our servers.',
    'We are committed to providing a clean, ad-light experience that works across six languages: English, Spanish, Portuguese, Arabic, Hindi, and Turkish. All tools are accessible on mobile and desktop without any account or sign-up.',
    'The site is operated by a small independent team passionate about building simple, useful tools for real-world decision-making scenarios — classrooms, game nights, team meetings, and everyday life.',
    'If you have feedback, a tool suggestion, or a content correction, we welcome your message at the contact address below. We typically respond within 3–5 business days.'
  ],
  contactTitle: 'Contact Us',
  contactParagraphs: [
    'We welcome questions, feedback, bug reports, and partnership or advertising inquiries.',
    'For technical issues, please include the page URL, your browser name and version, and a brief description of what you experienced.',
    'For content corrections or translation suggestions, please reference the specific page and language.'
  ],
  contactEmail: 'kimcomplete8888@gmail.com',
  privacyTitle: 'Privacy Policy',
  privacySections: [
    {
      heading: 'Overview',
      body: 'This Privacy Policy explains how Random Decision ("we", "us", or "our") collects, uses, and protects information when you use our website at https://utilverse.info. By using our services, you agree to the practices described here.'
    },
    {
      heading: 'Information We Collect',
      body: 'We do not require registration or account creation. We do not collect your name, email, or personal identifiers unless you contact us voluntarily. Tool history (e.g., past coin flip results) is stored exclusively in your browser\'s localStorage and is never transmitted to our servers. We may collect standard server log data such as IP address, browser type, and pages visited for security and performance monitoring purposes.'
    },
    {
      heading: 'Cookies and Local Storage',
      body: 'We use localStorage to save your theme preference (dark or light mode) and tool history locally in your browser. These are functional and essential to the service. We do not use tracking cookies ourselves. If advertising is enabled, third-party advertising partners may set their own cookies as described in the section below.'
    },
    {
      heading: 'Google AdSense and Advertising Cookies',
      body: 'We use Google AdSense to display advertisements. Google AdSense uses cookies, including the DoubleClick cookie, to serve ads based on your prior visits to this website and other websites on the internet. Google\'s use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting Google\'s Ads Settings at https://www.google.com/settings/ads. You can also opt out of a third-party vendor\'s use of cookies for personalized advertising by visiting www.aboutads.info.'
    },
    {
      heading: 'Third-Party Services',
      body: 'Beyond Google AdSense, we do not integrate third-party analytics, social login, or data brokers. Any external scripts loaded on this site (such as AdSense) are subject to their respective providers\' privacy policies. Google\'s privacy policy is available at https://policies.google.com/privacy.'
    },
    {
      heading: 'GDPR — Rights for EU/EEA Users',
      body: 'If you are located in the European Union or European Economic Area, you have the following rights under the General Data Protection Regulation (GDPR): the right to access, rectify, or erase your personal data; the right to restrict or object to processing; and the right to data portability. Since we store no personal data on our servers, most of these rights apply to data held by third-party services (e.g., Google). To exercise your rights with Google, visit https://myaccount.google.com/. To contact us directly about a GDPR request, use the email address on our Contact page.'
    },
    {
      heading: 'CCPA — Rights for California Users',
      body: 'If you are a California resident, you have the right to know what personal information is collected and shared, the right to delete personal information, and the right to opt out of the sale of personal information. We do not sell personal information. For advertising-related opt-out, visit https://optout.aboutads.info/.'
    },
    {
      heading: 'Children\'s Privacy',
      body: 'Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can take appropriate action.'
    },
    {
      heading: 'Data Retention',
      body: 'We do not retain personal data on our servers beyond standard server log retention periods (typically 30 days). Browser-stored data (localStorage) remains on your device until you clear your browser data or use the in-tool "Clear history" function.'
    },
    {
      heading: 'Changes to This Policy',
      body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the updated policy.'
    },
    {
      heading: 'Contact',
      body: 'For privacy-related questions or requests, please email us at kimcomplete8888@gmail.com.'
    }
  ],
  termsTitle: 'Terms of Service',
  termsSections: [
    {
      heading: 'Acceptance of Terms',
      body: 'By accessing or using Random Decision at https://utilverse.info, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of the service.'
    },
    {
      heading: 'Service Scope',
      body: 'Random Decision provides random decision utilities for informational and entertainment purposes. Features may be added, modified, or removed at any time without prior notice.'
    },
    {
      heading: 'Acceptable Use',
      body: 'You agree not to misuse the service, attempt to interfere with its operation, use it for any unlawful purpose, or attempt to access systems beyond the public-facing interface.'
    },
    {
      heading: 'Disclaimer of Warranties',
      body: 'The service is provided "as is" without any warranty of any kind. We do not warrant that the service will be uninterrupted, error-free, or suitable for any particular purpose.'
    },
    {
      heading: 'Limitation of Liability',
      body: 'Random outputs generated by our tools are not professional advice and must not be used as the sole basis for medical, legal, financial, or other high-stakes decisions. We are not liable for any damages arising from use or reliance on our outputs.'
    },
    {
      heading: 'Governing Law',
      body: 'These terms are governed by applicable law. Any disputes shall be resolved in the jurisdiction where the operator is located.'
    }
  ]
}

const es: LegalBundle = {
  aboutTitle: 'Acerca de Random Decision',
  aboutParagraphs: [
    'Random Decision es una colección gratuita de herramientas de decisión aleatoria diseñada para estudiantes, profesores, streamers y grupos de amigos que necesitan resultados rápidos, justos y transparentes.',
    'Nuestras herramientas cubren decisiones cotidianas: lanzar una moneda, tirar dados, girar una ruleta, elegir un nombre al azar, generar números aleatorios y mucho más.',
    'Todo se ejecuta localmente en tu navegador usando la Web Crypto API. Ningún dato se envía a nuestros servidores.',
    'Disponible en seis idiomas y optimizado para móvil y escritorio, sin registro requerido.',
    'Si tienes sugerencias o detectas algún error, escríbenos al correo de contacto.'
  ],
  contactTitle: 'Contacto',
  contactParagraphs: [
    'Agradecemos preguntas, comentarios y reportes de errores.',
    'Para problemas técnicos, incluye la URL de la página, el navegador y una descripción del problema.',
    'Para correcciones de contenido o sugerencias de traducción, indica la página y el idioma correspondiente.'
  ],
  contactEmail: 'kimcomplete8888@gmail.com',
  privacyTitle: 'Política de Privacidad',
  privacySections: [
    { heading: 'Información que recopilamos', body: 'No requerimos registro. El historial de herramientas se almacena localmente en tu navegador mediante localStorage y nunca se transmite a nuestros servidores.' },
    { heading: 'Cookies y almacenamiento local', body: 'Usamos localStorage para guardar la preferencia de tema. No usamos cookies de rastreo propias.' },
    { heading: 'Google AdSense y cookies publicitarias', body: 'Utilizamos Google AdSense para mostrar anuncios. Google usa cookies, incluida la cookie de DoubleClick, para mostrar anuncios personalizados. Puedes desactivar la publicidad personalizada en https://www.google.com/settings/ads.' },
    { heading: 'Derechos GDPR (usuarios UE)', body: 'Tienes derecho a acceder, rectificar, suprimir u objetar el tratamiento de tus datos. Para solicitudes, escríbenos al correo de contacto.' },
    { heading: 'Cambios en esta política', body: 'Podemos actualizar esta política. Los cambios se publicarán en esta página.' }
  ],
  termsTitle: 'Términos del Servicio',
  termsSections: [
    { heading: 'Alcance del servicio', body: 'Las herramientas se ofrecen con fines informativos y de entretenimiento. Las funciones pueden cambiar sin previo aviso.' },
    { heading: 'Uso aceptable', body: 'Está prohibido el uso ilegal, el abuso del servicio o cualquier intento de interferencia con su operación.' },
    { heading: 'Limitación de responsabilidad', body: 'Los resultados aleatorios no sustituyen asesoría profesional en decisiones médicas, legales o financieras.' }
  ]
}

const pt: LegalBundle = {
  aboutTitle: 'Sobre o Random Decision',
  aboutParagraphs: [
    'Random Decision é uma coleção gratuita de ferramentas de decisão aleatória para estudantes, professores, streamers e grupos de amigos.',
    'Nossas ferramentas cobrem decisões do dia a dia: cara ou coroa, dados, roleta, sorteio de nomes, números aleatórios e mais.',
    'Tudo funciona localmente no seu navegador com a Web Crypto API. Nenhum dado é enviado aos nossos servidores.',
    'Disponível em seis idiomas, sem cadastro necessário.',
    'Dúvidas ou sugestões? Fale conosco pelo e-mail de contato.'
  ],
  contactTitle: 'Contato',
  contactParagraphs: [
    'Agradecemos dúvidas, feedback e relatos de erros.',
    'Para problemas técnicos, inclua a URL da página e dados do navegador.',
    'Para correções de conteúdo, indique a página e o idioma.'
  ],
  contactEmail: 'kimcomplete8888@gmail.com',
  privacyTitle: 'Política de Privacidade',
  privacySections: [
    { heading: 'Dados coletados', body: 'Não exigimos cadastro. O histórico das ferramentas é salvo localmente no navegador via localStorage e nunca enviado aos nossos servidores.' },
    { heading: 'Cookies e armazenamento local', body: 'Usamos localStorage para salvar preferência de tema. Não usamos cookies de rastreamento próprios.' },
    { heading: 'Google AdSense e cookies de publicidade', body: 'Usamos Google AdSense para exibir anúncios. O Google usa cookies, incluindo o cookie DoubleClick, para anúncios personalizados. Você pode desativar em https://www.google.com/settings/ads.' },
    { heading: 'Direitos GDPR (usuários UE)', body: 'Você tem direito de acessar, corrigir, excluir ou se opor ao tratamento de dados. Entre em contato pelo e-mail indicado.' },
    { heading: 'Alterações nesta política', body: 'Podemos atualizar esta política. Alterações serão publicadas nesta página.' }
  ],
  termsTitle: 'Termos de Serviço',
  termsSections: [
    { heading: 'Escopo', body: 'As ferramentas são oferecidas para fins informativos e de entretenimento. Recursos podem mudar sem aviso prévio.' },
    { heading: 'Uso aceitável', body: 'É proibido uso ilegal, abuso do serviço ou tentativa de interferência em sua operação.' },
    { heading: 'Limitação de responsabilidade', body: 'Resultados aleatórios não substituem aconselhamento profissional em decisões médicas, legais ou financeiras.' }
  ]
}

const ar: LegalBundle = {
  aboutTitle: 'حول Random Decision',
  aboutParagraphs: [
    'Random Decision مجموعة مجانية من أدوات اتخاذ القرار العشوائي مصممة للطلاب والمعلمين والمبدعين ومجموعات الأصدقاء.',
    'تغطي أدواتنا قرارات يومية: رمي عملة، رمي نرد، تدوير عجلة، اختيار اسم عشوائي، توليد أرقام عشوائية والمزيد.',
    'كل شيء يعمل محلياً في متصفحك باستخدام Web Crypto API، ولا يُرسل أي بيانات إلى خوادمنا.',
    'متاح بست لغات دون الحاجة إلى تسجيل.',
    'لأي استفسارات أو اقتراحات، راسلنا على البريد الإلكتروني الموجود في صفحة التواصل.'
  ],
  contactTitle: 'اتصل بنا',
  contactParagraphs: [
    'نرحب بالأسئلة والملاحظات وتقارير الأخطاء.',
    'للمشكلات التقنية، يرجى تضمين رابط الصفحة واسم المتصفح.',
    'لاقتراحات ترجمة أو تصحيح محتوى، حدد الصفحة واللغة.'
  ],
  contactEmail: 'kimcomplete8888@gmail.com',
  privacyTitle: 'سياسة الخصوصية',
  privacySections: [
    { heading: 'البيانات التي نجمعها', body: 'لا نشترط التسجيل. يُحفظ سجل الأدوات محلياً في متصفحك عبر localStorage ولا يُرسل إلى خوادمنا.' },
    { heading: 'ملفات تعريف الارتباط والتخزين المحلي', body: 'نستخدم localStorage لحفظ تفضيل السمة. لا نستخدم ملفات تعريف تتبع خاصة بنا.' },
    { heading: 'Google AdSense وإعلانات الكوكيز', body: 'نستخدم Google AdSense لعرض الإعلانات. تستخدم Google ملفات تعريف الارتباط لعرض إعلانات مخصصة. يمكنك إلغاء تفعيل الإعلانات المخصصة على https://www.google.com/settings/ads.' },
    { heading: 'حقوق اللائحة الأوروبية (GDPR)', body: 'يحق لك الوصول إلى بياناتك وتصحيحها أو حذفها. تواصل معنا عبر البريد الإلكتروني للتواصل.' },
    { heading: 'تغييرات السياسة', body: 'قد نحدّث هذه السياسة. سيتم نشر التغييرات على هذه الصفحة.' }
  ],
  termsTitle: 'شروط الخدمة',
  termsSections: [
    { heading: 'نطاق الخدمة', body: 'تُقدَّم الأدوات لأغراض معلوماتية وترفيهية. قد تتغير الميزات دون إشعار مسبق.' },
    { heading: 'الاستخدام المقبول', body: 'يُمنع الاستخدام غير القانوني أو إساءة استخدام الخدمة أو محاولة التدخل في تشغيلها.' },
    { heading: 'تحديد المسؤولية', body: 'النتائج العشوائية ليست بديلاً عن الاستشارة المهنية في القرارات الطبية أو القانونية أو المالية.' }
  ]
}

const hi: LegalBundle = {
  aboutTitle: 'Random Decision के बारे में',
  aboutParagraphs: [
    'Random Decision छात्रों, शिक्षकों, स्ट्रीमर्स और दोस्तों के लिए बनाया गया मुफ़्त रैंडम डिसीज़न टूल्स का संग्रह है।',
    'हमारे टूल्स रोज़मर्रा के फैसलों को आसान बनाते हैं: सिक्का उछालना, पासा फेंकना, पहिया घुमाना, नाम चुनना, रैंडम नंबर जेनरेट करना और बहुत कुछ।',
    'सब कुछ Web Crypto API की मदद से आपके ब्राउज़र में स्थानीय रूप से चलता है। कोई डेटा हमारे सर्वर पर नहीं भेजा जाता।',
    'छह भाषाओं में उपलब्ध, बिना किसी पंजीकरण के।',
    'सुझाव या सवाल के लिए संपर्क पेज पर दिए ईमेल पर लिखें।'
  ],
  contactTitle: 'संपर्क',
  contactParagraphs: [
    'हम सवाल, फीडबैक और बग रिपोर्ट का स्वागत करते हैं।',
    'तकनीकी समस्या के लिए पेज URL और ब्राउज़र जानकारी शामिल करें।',
    'अनुवाद सुझाव या सामग्री सुधार के लिए पेज और भाषा बताएं।'
  ],
  contactEmail: 'kimcomplete8888@gmail.com',
  privacyTitle: 'गोपनीयता नीति',
  privacySections: [
    { heading: 'हम कौन-सा डेटा एकत्र करते हैं', body: 'हम पंजीकरण नहीं मांगते। टूल हिस्ट्री आपके ब्राउज़र के localStorage में सुरक्षित रहती है और हमारे सर्वर पर नहीं भेजी जाती।' },
    { heading: 'कुकी और लोकल स्टोरेज', body: 'हम थीम प्राथमिकता के लिए localStorage का उपयोग करते हैं। हम खुद कोई ट्रैकिंग कुकी नहीं लगाते।' },
    { heading: 'Google AdSense और विज्ञापन कुकी', body: 'हम Google AdSense के ज़रिए विज्ञापन दिखाते हैं। Google वैयक्तिकृत विज्ञापनों के लिए कुकी का उपयोग करता है। आप https://www.google.com/settings/ads पर ऑप्ट आउट कर सकते हैं।' },
    { heading: 'GDPR अधिकार (EU उपयोगकर्ता)', body: 'आप अपना डेटा देखने, सुधारने या हटाने का अनुरोध कर सकते हैं। संपर्क ईमेल पर लिखें।' },
    { heading: 'नीति में बदलाव', body: 'हम यह नीति अपडेट कर सकते हैं। बदलाव इसी पेज पर प्रकाशित होंगे।' }
  ],
  termsTitle: 'सेवा की शर्तें',
  termsSections: [
    { heading: 'सेवा का दायरा', body: 'टूल्स सूचनात्मक और मनोरंजन उद्देश्यों के लिए हैं। सुविधाएं बिना सूचना के बदल सकती हैं।' },
    { heading: 'स्वीकार्य उपयोग', body: 'गैरकानूनी उपयोग, सेवा का दुरुपयोग या संचालन में हस्तक्षेप निषिद्ध है।' },
    { heading: 'दायित्व की सीमा', body: 'रैंडम परिणाम चिकित्सा, कानूनी या वित्तीय निर्णयों में पेशेवर सलाह का विकल्प नहीं हैं।' }
  ]
}

const tr: LegalBundle = {
  aboutTitle: 'Random Decision Hakkında',
  aboutParagraphs: [
    'Random Decision; öğrenciler, öğretmenler, yayıncılar ve arkadaş grupları için tasarlanmış ücretsiz bir rastgele karar aracı koleksiyonudur.',
    'Araçlarımız günlük kararları kolaylaştırır: yazı-tura, zar atma, çark çevirme, isim seçimi, rastgele sayı üretme ve daha fazlası.',
    'Her şey Web Crypto API ile tarayıcınızda yerel olarak çalışır. Hiçbir veri sunucularımıza gönderilmez.',
    'Altı dilde kullanılabilir, kayıt gerekmez.',
    'Soru veya öneri için iletişim sayfasındaki e-postadan bize ulaşın.'
  ],
  contactTitle: 'İletişim',
  contactParagraphs: [
    'Soru, geri bildirim ve hata raporlarını bekliyoruz.',
    'Teknik sorunlar için sayfa URL\'si ve tarayıcı bilgilerini ekleyin.',
    'Çeviri önerisi veya içerik düzeltmesi için sayfa ve dili belirtin.'
  ],
  contactEmail: 'kimcomplete8888@gmail.com',
  privacyTitle: 'Gizlilik Politikası',
  privacySections: [
    { heading: 'Topladığımız veriler', body: 'Kayıt gerektirmiyoruz. Araç geçmişi tarayıcınızın localStorage\'ında saklanır, sunucularımıza gönderilmez.' },
    { heading: 'Çerezler ve yerel depolama', body: 'Tema tercihi için localStorage kullanıyoruz. Kendi izleme çerezimiz yoktur.' },
    { heading: 'Google AdSense ve reklam çerezleri', body: 'Google AdSense ile reklam gösteriyoruz. Google, kişiselleştirilmiş reklam için çerez kullanır. https://www.google.com/settings/ads adresinden vazgeçebilirsiniz.' },
    { heading: 'GDPR Hakları (AB kullanıcıları)', body: 'Kişisel verilerinize erişme, düzeltme veya silme hakkına sahipsiniz. İletişim e-postasından bize ulaşın.' },
    { heading: 'Politika değişiklikleri', body: 'Bu politikayı güncelleyebiliriz. Değişiklikler bu sayfada yayımlanır.' }
  ],
  termsTitle: 'Hizmet Şartları',
  termsSections: [
    { heading: 'Hizmet kapsamı', body: 'Araçlar bilgilendirici ve eğlence amaçlıdır. Özellikler önceden bildirilmeksizin değişebilir.' },
    { heading: 'Kabul edilebilir kullanım', body: 'Yasadışı kullanım, hizmet istismarı veya işleyişine müdahale yasaktır.' },
    { heading: 'Sorumluluk sınırı', body: 'Rastgele sonuçlar tıbbi, hukuki veya finansal kararlarda profesyonel tavsiye yerine geçmez.' }
  ]
}

const bundles: Record<Locale, LegalBundle> = { en, es, pt, ar, hi, tr }

export function getLegalBundle(locale: string): LegalBundle {
  if (locale in bundles) {
    return bundles[locale as Locale]
  }
  return en
}
