import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome',
        dashboard: 'Dashboard',
        settings: 'Settings',
        refresh: 'Refresh',
      },
    },
    es: {
      translation: {
        welcome: 'Bienvenido',
        dashboard: 'Panel de control',
        settings: 'Configuración',
        refresh: 'Actualizar',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
