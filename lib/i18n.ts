export const locales = ['en', 'es', 'pt', 'ar', 'hi', 'tr'] as const

export type Locale = (typeof locales)[number]

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  ar: 'العربية',
  hi: 'हिन्दी',
  tr: 'Türkçe'
}

type Dictionary = {
  siteName: string
  nav: {
    tools: string
    blog: string
    about: string
    contact: string
    privacy: string
    terms: string
  }
  home: {
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    featuredTools: string
    featuredPosts: string
  }
  toolCommon: {
    generate: string
    result: string
    history: string
    clearHistory: string
  }
}

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    siteName: 'Decision Toolkit',
    nav: {
      tools: 'Tools',
      blog: 'Blog',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms'
    },
    home: {
      title: 'Make fast decisions with delightful random tools',
      subtitle: 'Coin flip, dice roller, wheel spinner, yes/no generator, and random number tools in one clean experience.',
      ctaPrimary: 'Try Coin Flip',
      ctaSecondary: 'Explore Blog',
      featuredTools: 'Featured Tools',
      featuredPosts: 'Latest Guides'
    },
    toolCommon: {
      generate: 'Generate',
      result: 'Result',
      history: 'History',
      clearHistory: 'Clear history'
    }
  },
  es: {
    siteName: 'Decision Toolkit',
    nav: { tools: 'Herramientas', blog: 'Blog', about: 'Acerca de', contact: 'Contacto', privacy: 'Privacidad', terms: 'Términos' },
    home: {
      title: 'Toma decisiones rápidas con herramientas aleatorias',
      subtitle: 'Moneda, dados, ruleta, sí/no y números aleatorios en una experiencia limpia.',
      ctaPrimary: 'Probar Moneda',
      ctaSecondary: 'Ver Blog',
      featuredTools: 'Herramientas',
      featuredPosts: 'Guías recientes'
    },
    toolCommon: { generate: 'Generar', result: 'Resultado', history: 'Historial', clearHistory: 'Borrar historial' }
  },
  pt: {
    siteName: 'Decision Toolkit',
    nav: { tools: 'Ferramentas', blog: 'Blog', about: 'Sobre', contact: 'Contato', privacy: 'Privacidade', terms: 'Termos' },
    home: {
      title: 'Tome decisões rápidas com ferramentas aleatórias',
      subtitle: 'Moeda, dado, roleta, sim/não e números aleatórios em uma experiência limpa.',
      ctaPrimary: 'Testar Moeda',
      ctaSecondary: 'Abrir Blog',
      featuredTools: 'Ferramentas',
      featuredPosts: 'Guias recentes'
    },
    toolCommon: { generate: 'Gerar', result: 'Resultado', history: 'Histórico', clearHistory: 'Limpar histórico' }
  },
  ar: {
    siteName: 'Decision Toolkit',
    nav: { tools: 'الأدوات', blog: 'المدونة', about: 'من نحن', contact: 'اتصل بنا', privacy: 'الخصوصية', terms: 'الشروط' },
    home: {
      title: 'اتخذ قرارات سريعة بأدوات عشوائية',
      subtitle: 'عملة، نرد، عجلة، نعم/لا وأرقام عشوائية ضمن تجربة نظيفة.',
      ctaPrimary: 'جرّب العملة',
      ctaSecondary: 'افتح المدونة',
      featuredTools: 'الأدوات',
      featuredPosts: 'أحدث الأدلة'
    },
    toolCommon: { generate: 'إنشاء', result: 'النتيجة', history: 'السجل', clearHistory: 'مسح السجل' }
  },
  hi: {
    siteName: 'Decision Toolkit',
    nav: { tools: 'टूल्स', blog: 'ब्लॉग', about: 'हमारे बारे में', contact: 'संपर्क', privacy: 'गोपनीयता', terms: 'नियम' },
    home: {
      title: 'रैंडम टूल्स से तेज़ फैसले लें',
      subtitle: 'कॉइन फ्लिप, डाइस रोलर, व्हील, हाँ/ना और रैंडम नंबर एक साफ अनुभव में।',
      ctaPrimary: 'कॉइन फ्लिप करें',
      ctaSecondary: 'ब्लॉग देखें',
      featuredTools: 'मुख्य टूल्स',
      featuredPosts: 'नई गाइड'
    },
    toolCommon: { generate: 'जनरेट', result: 'परिणाम', history: 'इतिहास', clearHistory: 'इतिहास साफ करें' }
  },
  tr: {
    siteName: 'Decision Toolkit',
    nav: { tools: 'Araçlar', blog: 'Blog', about: 'Hakkında', contact: 'İletişim', privacy: 'Gizlilik', terms: 'Şartlar' },
    home: {
      title: 'Rastgele araçlarla hızlı karar verin',
      subtitle: 'Yazı tura, zar, çark, evet/hayır ve rastgele sayı araçları tek ve temiz deneyimde.',
      ctaPrimary: 'Yazı Tura',
      ctaSecondary: 'Bloga Git',
      featuredTools: 'Öne Çıkan Araçlar',
      featuredPosts: 'Son Yazılar'
    },
    toolCommon: { generate: 'Üret', result: 'Sonuç', history: 'Geçmiş', clearHistory: 'Geçmişi temizle' }
  }
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function getDictionary(locale: string): Dictionary {
  if (isLocale(locale)) {
    return dictionaries[locale]
  }
  return dictionaries.en
}

export function localePath(locale: string, path = ''): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `/${locale}${normalized === '/' ? '' : normalized}`
}
