import { translations, type Language } from './translations';

export function updateAllTranslations(lang: Language) {
  const t = translations[lang];
  
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (key) {
      const value = getNestedValue(t, key);
      if (value) {
        if (el.tagName === 'INPUT' || el.tagName === 'BUTTON') {
          (el as HTMLInputElement | HTMLButtonElement).placeholder = value;
        } else {
          el.textContent = value;
        }
      }
    }
  });
  
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);
}

export function getNestedValue(obj: any, path: string): any {
  const keys = path.split('.');
  let value = obj;
  for (const key of keys) {
    value = value?.[key];
    if (!value) return null;
  }
  return value;
}

export function setupLanguageListener() {
  window.addEventListener('languageChange', (event: any) => {
    updateAllTranslations(event.detail);
  });
  
  const lang = (localStorage.getItem('language') || 'en') as Language;
  updateAllTranslations(lang);
}
