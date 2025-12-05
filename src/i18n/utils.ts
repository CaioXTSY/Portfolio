import { translations, type Language } from './translations';

export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  
  const stored = localStorage.getItem('language');
  if (stored === 'pt' || stored === 'en') {
    return stored;
  }
  
  const browserLang = navigator.language.startsWith('pt') ? 'pt' : 'en';
  localStorage.setItem('language', browserLang);
  return browserLang;
}

export function setLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
  }
}

export function getTranslation(lang: Language) {
  return translations[lang];
}

export function t(key: string, lang: Language): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}
