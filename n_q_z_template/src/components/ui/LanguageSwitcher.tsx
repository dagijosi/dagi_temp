'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="h-11 px-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-zinc-50 transition-all"
    >
      <FaGlobe size={16} />
      {i18n.language === 'en' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageSwitcher;
