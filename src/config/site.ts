// Site configuration
export const SITE = {
  title: {
    en: 'EasyAgent - AI Virtual Receptionist for Your Business',
    es: 'EasyAgent - Recepcionista Virtual con IA para tu Negocio',
  },
  description: {
    en: 'AI-powered virtual receptionist that answers calls 24/7, schedules appointments, and manages your clients automatically. Never miss a business opportunity.',
    es: 'Recepcionista virtual con IA que atiende llamadas 24/7, agenda citas y gestiona tus clientes automáticamente. Nunca pierdas una oportunidad de negocio.',
  },
  url: 'https://easyagent.app',
  author: 'EasyAgent',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'Facilities', href: '/facilities' },
  { name: 'Request Quote', href: '/rfq' },
  { name: 'Documentation', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/yourcompany',
  twitter: 'https://twitter.com/yourcompany',
  facebook: 'https://facebook.com/yourcompany',
} as const;

