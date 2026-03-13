import type { BlogPost } from '../types'

export const toolPosts: BlogPost[] = [
  {
    slug: 'history-of-coin-flipping',
    category: 'tools',
    title: 'تاريخ رمي العملة: من روما القديمة إلى متصفحك',
    description: 'كيف تطور رمي العملة من الطقوس القديمة إلى أداة رقمية حديثة.',
    publishedDate: '2026-01-12',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "رمي العملة هو أحد أقدم أدوات اتخاذ القرار لدى البشرية. قبل نظرية الاحتمالات بكثير — كان الناس يستخدمون أشياء مميزة لترك الصدفة تحل النزاعات.",
    sections: [
      { heading: 'الأصول القديمة', body: ['أطلق عليه الرومان "نافيا أوت كابوت" — سفن أو رؤوس. كانت العملات الرومانية تحمل رأس إله على أحد الجانبين وسفينة على الجانب الآخر.', 'كانت ممارسات مماثلة موجودة في جميع الثقافات.'] },
      { heading: 'الرياضة والتبني المؤسسي', body: ['تم تقنين رمي العملة الحديث في الرياضة في القرن التاسع عشر.', 'تبنّت الأنظمة القانونية أيضاً الاختيار العشوائي.'] },
      { heading: 'الانتقال الرقمي', body: ['ظهرت أولى أدوات رمي العملة الرقمية في أوائل العقد الأول من الألفية الثالثة.', 'اليوم، توفر الأدوات المستندة إلى المتصفح عشوائية تشفيرية.'] }
    ],
    faqs: [
      { question: 'هل رمي العملة عشوائي حقاً؟', answer: 'رمي العملة المادي ليس عشوائياً تماماً. رمي العملة الرقمي أكثر اتساقاً إحصائياً.' }
    ],
    relatedSlugs: ['coin-flip-psychology', 'coin-flip-vs-dice-roll', 'famous-coin-flip-moments'],
    relatedToolHrefs: ['/coin-flip', '/random-number-generator', '/yes-or-no'],
    tags: ['رمي العملة', 'التاريخ', 'العشوائية', 'أدوات القرار']
  },
  {
    slug: 'coin-flip-vs-dice-roll',
    category: 'tools',
    title: 'رمي العملة مقابل رمي النرد: أي أداة عشوائية تستخدم؟',
    description: 'مقارنة عملية بين رمي العملة ورمي النرد — متى تستخدم كلاً منهما.',
    publishedDate: '2026-01-18',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "كلتا الأداتين عشوائيتان. كلتاهما عادلتان. لكنهما تخدمان أشكالاً مختلفة من القرارات.",
    sections: [
      { heading: 'الفرق الجوهري: ثنائي مقابل نتائج متعددة', body: ['رمي العملة ينتج نتيجتين بالضبط. النرد ذو الستة أوجه ينتج ست نتائج.'] },
      { heading: 'متى تستخدم رمي العملة', body: ['رمي العملة مثالي للقرارات الثنائية: نعم أو لا، الخيار أ أو الخيار ب.'] },
      { heading: 'متى تستخدم رمي النرد', body: ['رمي النرد مثالي عندما يكون لديك ثلاثة إلى ستة خيارات.'] }
    ],
    faqs: [
      { question: 'هل يمكنني استخدام رمي العملة لأكثر من خيارين؟', answer: 'نعم، لكنه يتطلب رميات متعددة. لثلاثة خيارات أو أكثر، النرد أو العجلة أكثر كفاءة.' }
    ],
    relatedSlugs: ['history-of-coin-flipping', 'coin-flip-psychology', 'dnd-dice-roller-guide'],
    relatedToolHrefs: ['/coin-flip', '/dice-roller', '/random-number-generator'],
    tags: ['رمي العملة', 'رمي النرد', 'الأدوات العشوائية', 'المقارنة']
  },
  {
    slug: 'dnd-dice-roller-guide',
    category: 'tools',
    title: 'محرك النرد لـ D&D: سير عمل عملي لسيد الزنزانة',
    description: 'قلل الاحتكاك على الطاولة وحافظ على زخم السرد مع سير عمل واضح لرمي النرد.',
    publishedDate: '2026-01-22',
    author: 'kimcomplete',
    readingTime: 7,
    intro: "يتخذ سيد الزنزانة مئات القرارات الدقيقة لكل جلسة. كل واحد منها انقطاع محتمل في السرد.",
    sections: [
      { heading: 'النرد الأساسي لـ D&D', body: ['تستخدم D&D سبعة نرود قياسية: d4 وd6 وd8 وd10 وd12 وd20 وd100.', 'النرد d20 هو أهم نرد في D&D.'] },
      { heading: 'الإعداد قبل الجلسة', body: ['قبل كل جلسة، قم بإعداد محرك النرد الخاص بك بأكثر مجموعات الرمي شيوعاً لتلك الجلسة.'] }
    ],
    faqs: [
      { question: 'هل يجب على سادة الزنزانة رمي النرد سراً أم علناً؟', answer: 'لكلا النهجين مزايا. الرمي العلني يبني الثقة ويخلق لحظات درامية.' }
    ],
    relatedSlugs: ['coin-flip-vs-dice-roll', 'random-number-generator-uses', 'party-games-spinner-wheel'],
    relatedToolHrefs: ['/dice-roller', '/random-number-generator', '/spin-the-wheel'],
    tags: ['محرك النرد', 'D&D', 'لعب الأدوار على الطاولة', 'الأدوات العشوائية']
  },
  {
    slug: 'spin-wheel-streamer-guide',
    category: 'tools',
    title: 'كيف يستخدم المذيعون عجلات الدوران لتفاعل أفضل مع الجمهور',
    description: 'دليل إعداد عملي لاستخدام عجلات الدوران لإنشاء لحظات بث شفافة وجذابة.',
    publishedDate: '2026-01-28',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "عجلة الدوران هي أحد أكثر أدوات التفاعل مع الجمهور فعالية في البث.",
    sections: [
      { heading: 'لماذا تعمل عجلات الدوران في البث', body: ['تخلق عجلات الدوران ما يسميه علماء النفس "الإثارة التوقعية".'] },
      { heading: 'إعداد عجلتك لأقصى تأثير', body: ['أكثر عجلات البث فعالية تحتوي على 6-12 قطاعاً.'] }
    ],
    faqs: [
      { question: 'ما هي أفضل أداة عجلة دوران للبث؟', answer: 'أدوات العجلة المستندة إلى المتصفح التي يمكن التقاطها كمصدر متصفح في OBS تعمل بشكل أفضل.' }
    ],
    relatedSlugs: ['party-games-spinner-wheel', 'wheel-spinner-complete-guide', 'random-number-generator-uses'],
    relatedToolHrefs: ['/spin-the-wheel', '/random-name-picker', '/yes-or-no'],
    tags: ['عجلة الدوران', 'البث', 'تفاعل الجمهور', 'Twitch']
  },
  {
    slug: 'random-number-generator-uses',
    category: 'tools',
    title: '10 استخدامات مفاجئة لمولد الأرقام العشوائية',
    description: 'مولدات الأرقام العشوائية تفعل أكثر بكثير من مجرد توليد الأرقام.',
    publishedDate: '2026-02-03',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "معظم الناس يستخدمون مولد الأرقام العشوائية لشيء واحد: توليد رقم عشوائي. لكن الأداة أكثر تنوعاً من ذلك بكثير.",
    sections: [
      { heading: 'الاستخدامات 1-5', body: ['1. اختيار الوجبة. 2. تحديد أولويات المهام. 3. اختيار التمرين. 4. إنشاء شخصية RPG. 5. اختيار الموسيقى.'] },
      { heading: 'الاستخدامات 6-10', body: ['6. اختيار عينات البحث. 7. تعيين المهام. 8. ترتيب العروض التقديمية. 9. توليد كلمات المرور. 10. أرقام اليانصيب.'] }
    ],
    faqs: [
      { question: 'هل مولد الأرقام العشوائية عشوائي حقاً؟', answer: 'مولدات الأرقام العشوائية البرمجية هي تقنياً شبه عشوائية.' }
    ],
    relatedSlugs: ['coin-flip-vs-dice-roll', 'lottery-number-myths', 'random-facts-about-randomness'],
    relatedToolHrefs: ['/random-number-generator', '/dice-roller', '/coin-flip'],
    tags: ['مولد الأرقام العشوائية', 'الاستخدامات', 'الأدوات', 'الإنتاجية']
  },
  {
    slug: 'name-picker-classroom',
    category: 'tools',
    title: 'منتقي الأسماء العشوائي للمعلمين: دليل العدالة في الفصل الدراسي',
    description: 'كيفية استخدام منتقي الأسماء العشوائي لإنشاء مشاركة عادلة في الفصل الدراسي.',
    publishedDate: '2026-02-10',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "يتخذ المعلمون عشرات قرارات الاستدعاء لكل فصل دراسي. بدون عملية منظمة، يميلون إلى استدعاء نفس الطلاب مراراً وتكراراً.",
    sections: [
      { heading: 'مشكلة الاستدعاء المتحيز', body: ['تُظهر الأبحاث أن المعلمين يميلون إلى استدعاء الطلاب الجالسين في مقدمة الفصل.'] },
      { heading: 'كيف يحل منتقي الأسماء العشوائي هذه المشكلة', body: ['يضمن منتقي الأسماء العشوائي أن جميع الطلاب لديهم احتمال متساوٍ للاستدعاء.'] }
    ],
    faqs: [
      { question: 'ماذا أفعل إذا لم يعرف الطالب الإجابة؟', answer: 'اجعل عدم المعرفة أمراً طبيعياً: "لا بأس بعدم المعرفة — لنكتشف معاً."' }
    ],
    relatedSlugs: ['classroom-random-activities', 'team-generator-guide', 'random-number-generator-uses'],
    relatedToolHrefs: ['/random-name-picker', '/team-generator', '/spin-the-wheel'],
    tags: ['منتقي الأسماء', 'الفصل الدراسي', 'التعليم', 'العدالة']
  },
  {
    slug: 'team-generator-guide',
    category: 'tools',
    title: 'مولد الفرق العشوائي: الطريقة الأعدل لتقسيم المجموعات',
    description: 'كيفية استخدام مولد الفرق العشوائي لإنشاء مجموعات عادلة ومتوازنة لأي نشاط.',
    publishedDate: '2026-02-17',
    author: 'kimcomplete',
    readingTime: 5,
    intro: "تقسيم الناس إلى فرق يبدو بسيطاً، لكنه نادراً ما يكون كذلك.",
    sections: [
      { heading: 'لماذا يعمل تقسيم الفرق العشوائي', body: ['يزيل تقسيم الفرق العشوائي الديناميكية الاجتماعية لـ"اختيار الفرق" التي يمكن أن تكون مُقصية.'] },
      { heading: 'كيفية استخدام مولد الفرق بفعالية', body: ['أدخل أسماء جميع المشاركين. حدد عدد الفرق أو حجم الفريق.'] }
    ],
    faqs: [
      { question: 'ماذا أفعل إذا بدت الفرق العشوائية غير متوازنة؟', answer: 'للأنشطة غير الرسمية، اقبل عدم التوازن — فهو جزء من العشوائية.' }
    ],
    relatedSlugs: ['name-picker-classroom', 'classroom-random-activities', 'icebreaker-games-remote-teams'],
    relatedToolHrefs: ['/team-generator', '/random-name-picker', '/spin-the-wheel'],
    tags: ['مولد الفرق', 'تقسيم المجموعات', 'العدالة', 'الأنشطة']
  },
  {
    slug: 'wheel-spinner-complete-guide',
    category: 'tools',
    title: 'الدليل الكامل لتدوير العجلة: الإعداد والنصائح وحالات الاستخدام',
    description: 'كل ما تحتاج معرفته لاستخدام عجلة الدوران بفعالية.',
    publishedDate: '2026-02-24',
    author: 'kimcomplete',
    readingTime: 6,
    intro: "عجلة الدوران هي واحدة من أكثر أدوات القرار تنوعاً المتاحة.",
    sections: [
      { heading: 'الإعداد الأساسي للعجلة', body: ['لإعداد عجلة فعّالة: اسرد جميع الخيارات التي تريد تضمينها.'] },
      { heading: 'حالات الاستخدام', body: ['اختيار الوجبة: أضف خيارات وجباتك المفضلة وادوّر عندما لا تستطيع الحسم.', 'تيسير الاجتماعات: استخدم عجلة لاختيار من يتحدث التالي.'] }
    ],
    faqs: [
      { question: 'هل العجلة الرقمية أكثر عشوائية من المادية؟', answer: 'نعم. تستخدم العجلات الرقمية مولدات أرقام عشوائية آمنة تشفيرياً.' }
    ],
    relatedSlugs: ['spin-wheel-streamer-guide', 'party-games-spinner-wheel', 'coin-flip-vs-dice-roll'],
    relatedToolHrefs: ['/spin-the-wheel', '/random-name-picker', '/yes-or-no'],
    tags: ['عجلة الدوران', 'الدليل الكامل', 'أدوات القرار', 'الإعداد']
  }
]
