'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'EN' | 'AR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  EN: {
    // Navigation
    'nav.models': 'MODELS',
    'nav.weAreKaiyi': 'WE ARE KAIYI',
    'nav.afterSales': 'AFTER SALES',
    'nav.contactUs': 'CONTACT US',
    'nav.warranty': 'Warranty',
    'nav.serviceBooking': 'Service Booking',
    'nav.customerSupport': 'Customer Support',
    'nav.testDrive': 'Test Drive',
    'nav.contact': 'Contact',
    
    // Home page
    'home.hero.title': 'KAIYI X7',
    'home.hero.subtitle': 'HomeLike Mobile Space',
    'home.hero.testDrive': 'Test Drive',
    'home.hero.downloadBrochure': 'Download Brochure',
    'home.hero.title2': 'KAIYI X3 PRO',
    'home.hero.subtitle2': 'All Around Hot Hatch',
    'home.hero.title3': 'KAIYI E5',
    'home.hero.subtitle3': 'Family Luxury Car',
    'home.weAreKaiyi.title': 'WE ARE KAIYI',
    'home.weAreKaiyi.description': 'We specialize in delivering intelligent products that are backed by an ongoing commitment to technological innovation.',
    'home.weAreKaiyi.more': 'MORE',
    'home.service.title': 'SERVICE',
    'home.service.subtitle': 'bringing you a worry-free driving experience',
    'home.service.more': 'MORE',
    
    // Footer
    'footer.lineup': 'Check out the line up:',
    'footer.afterSales': 'After Sales:',
    'footer.about': 'About:',
    'footer.showroom': 'Showroom:',
    'footer.connectSocial': 'Connect with us on social:',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.copyright': 'All right reserved by legend holding group',
    
    // Common
    'common.loading': 'Loading...',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.close': 'Close',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
  },
  AR: {
    // Navigation
    'nav.models': 'الموديلات',
    'nav.weAreKaiyi': 'نحن كايي',
    'nav.afterSales': 'ما بعد البيع',
    'nav.contactUs': 'اتصل بنا',
    'nav.warranty': 'الضمان',
    'nav.serviceBooking': 'حجز الخدمة',
    'nav.customerSupport': 'دعم العملاء',
    'nav.testDrive': 'تجربة القيادة',
    'nav.contact': 'اتصل',
    
    // Home page
    'home.hero.title': 'كايي إكس 7',
    'home.hero.subtitle': 'مساحة متنقلة تشبه المنزل',
    'home.hero.testDrive': 'تجربة القيادة',
    'home.hero.downloadBrochure': 'تحميل الكتيب',
    'home.hero.title2': 'كايي إكس 3 برو',
    'home.hero.subtitle2': 'هاتشباك شامل',
    'home.hero.title3': 'كايي إي 5',
    'home.hero.subtitle3': 'سيارة عائلية فاخرة',
    'home.weAreKaiyi.title': 'نحن كايي',
    'home.weAreKaiyi.description': 'نحن متخصصون في تقديم منتجات ذكية مدعومة بالتزام مستمر بالابتكار التكنولوجي.',
    'home.weAreKaiyi.more': 'المزيد',
    'home.service.title': 'الخدمة',
    'home.service.subtitle': 'نقدم لك تجربة قيادة خالية من القلق',
    'home.service.more': 'المزيد',
    
    // Footer
    'footer.lineup': 'تحقق من التشكيلة:',
    'footer.afterSales': 'ما بعد البيع:',
    'footer.about': 'حول:',
    'footer.showroom': 'المعرض:',
    'footer.connectSocial': 'تواصل معنا على وسائل التواصل الاجتماعي:',
    'footer.privacyPolicy': 'سياسة الخصوصية',
    'footer.copyright': 'جميع الحقوق محفوظة لمجموعة ليجند القابضة',
    
    // Common
    'common.loading': 'جاري التحميل...',
    'common.submit': 'إرسال',
    'common.cancel': 'إلغاء',
    'common.close': 'إغلاق',
    'common.save': 'حفظ',
    'common.edit': 'تعديل',
    'common.delete': 'حذف',
    'common.back': 'رجوع',
    'common.next': 'التالي',
    'common.previous': 'السابق',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'EN' || savedLanguage === 'AR')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Update document direction and language
  useEffect(() => {
    document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'AR' ? 'ar' : 'en';
    
    // Add RTL styles if needed
    if (language === 'AR') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    console.log('LanguageContext: Setting language to', lang);
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]] || key;
    console.log(`Translation: ${key} -> ${translation} (language: ${language})`);
    return translation;
  };

  const isRTL = language === 'AR';

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 