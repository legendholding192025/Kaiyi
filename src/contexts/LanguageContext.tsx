'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'EN' | 'AR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
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
    'home.hero.subtitle': 'Where Family Adventures Begin.',
    'home.hero.testDrive': 'Test Drive',
    'home.hero.downloadBrochure': 'Download Brochure',
    'home.hero.title2': 'KAIYI X3 PRO',
    'home.hero.subtitle2': 'Designed for comfort and styled to fit your life.',
    'home.hero.title3': 'KAIYI E5',
    'home.hero.subtitle3': 'Sporty efficiency with the power you need every day.',
    'home.weAreKaiyi.title': 'We Are Kaiyi',
    'home.weAreKaiyi.description': 'Craft smart, stylish cars designed for modern families and young drivers. Driven by innovation, we\'re here to make every journey more comfortable, enjoyable, and connected to your lifestyle.',
    'home.weAreKaiyi.more': 'MORE',
    'home.service.title': 'SERVICE',
    'home.service.subtitle': 'bringing you a worry-free driving experience',
    'home.service.more': 'MORE',
    'home.video.title': 'KAIYI Showcase',
    'home.video.subtitle': 'Click to play in fullscreen',
    
    // We Are Kaiyi page
    'weAreKaiyi.hero.title': 'We Are Kaiyi',
    'weAreKaiyi.section.title': 'We are Kaiyi',
    'weAreKaiyi.story.content': 'Kaiyi UAE, part of Legend Holding Group, is the exclusive dealership of Kaiyi vehicles in the United Arab Emirates. As the official dealership of Kaiyi UAE, we\'re dedicated to providing reliable service and vehicles that fit your lifestyle.\n\nWe proudly bring Kaiyi\'s fresh and dynamic spirit to the UAE, offering models like the Kaiyi X3 Pro, X7 and E5, designed for growing families, young drivers, and anyone looking for a bold, stylish ride.\n\nLocated in the heart of Dubai, our welcoming showroom offers complete sales and after-sales support. Discover our standout model, the Kaiyi X7, now available across the UAE.\n\nLooking for a car that fits your family or your next adventure? Book your test drive today. Our team is ready to guide you every step of the way.\n\nAt Kaiyi UAE, we\'re not just about cars. We\'re about creating moments, memories, and journeys that matter.',
    
    // Footer
    'footer.lineup': 'Check out the line up:',
    'footer.afterSales': 'After Sales:',
    'footer.about': 'About:',
    'footer.showroom': 'Showroom:',
    'footer.address': '787M+3WW - Al Ittihad Rd - Al Khabaisi - Dubai',
    'footer.hours': 'Sunday-Saturday-9:00A.M. To 7:00 P.M.',
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
    'common.more': 'More',
    
    // Models
    'models.x7.name': 'X7',
    'models.x7.description': 'Where Family Adventures Begin.',
    'models.x7.specs.engine': 'ENGINE: 1.6T/ 2.0T',
    'models.x7.specs.length': 'LENGTH: 4710 mm',
    'models.x7.specs.width': 'WIDTH: 1955 mm',
    'models.x7.specs.height': 'HEIGHT: 1705 mm',
    'models.x7.specs.wheelbase': 'WHEELBASE: 2800 mm',
    
    'models.x3pro.name': 'X3 Pro',
    'models.x3pro.description': 'Designed for comfort and styled to fit your life.',
    'models.x3pro.specs.engine': 'ENGINE: 1.5T/ 1.5L',
    'models.x3pro.specs.length': 'LENGTH: 4400 mm',
    'models.x3pro.specs.width': 'WIDTH: 1831 mm',
    'models.x3pro.specs.height': 'HEIGHT: 1653 mm',
    'models.x3pro.specs.wheelbase': 'WHEELBASE: 2632 mm',
    
    'models.e5.name': 'E5',
    'models.e5.description': 'Sporty efficiency with the power you need every day.',
    'models.e5.specs.engine': 'ENGINE: 1.5T',
    'models.e5.specs.length': 'LENGTH: 4666 mm',
    'models.e5.specs.width': 'WIDTH: 1825 mm',
    'models.e5.specs.height': 'HEIGHT: 1484 mm',
    'models.e5.specs.wheelbase': 'WHEELBASE: 2700 mm',
    
    // Popup
    'popup.e5NotAvailable': 'Brochure for E5 model is not available yet.',
    'popup.brochureNotFound': 'Brochure not found for model: {modelName}',
    'popup.phoneValidation': 'Phone number must be exactly 9 digits',
    'popup.submitError': 'Error submitting form. Please try again.',
    'popup.downloadBrochure': 'Download {modelName} Brochure',
    'popup.provideDetails': 'Please provide your details to access the brochure',
    'popup.fullName': 'Full Name',
    'popup.fullNamePlaceholder': 'Enter your full name',
    'popup.phoneNumber': 'Phone Number',
    'popup.phoneHelp': 'Enter 9-digit mobile number (e.g., 501234567)',
    'popup.emailAddress': 'Email Address',
    'popup.emailPlaceholder': 'Enter your email address',
    'popup.processing': 'Processing...',
    'popup.downloadBrochureButton': 'Download Brochure',
    'popup.thankYou': 'Thank You!',
    'popup.brochureWillOpen': 'Your {modelName} brochure will open in a new browser tab!',
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
    'home.hero.title': 'كاييي X7',
    'home.hero.subtitle': 'هنا تبدأ مغامرات عائلتك.',
    'home.hero.testDrive': 'تجربة القيادة',
    'home.hero.downloadBrochure': 'تحميل الكتيب',
    'home.hero.title2': 'كاييي X3 برو',
    'home.hero.subtitle2': 'مصمم للراحة ومصمم ليناسب أسلوب حياتك.',
    'home.hero.title3': 'كاييي E5',
    'home.hero.subtitle3': 'كفاءة رياضية مع القوة التي تحتاجها يوميًا.',
    'home.weAreKaiyi.title': 'نحن كاييي',
    'home.weAreKaiyi.description': 'نصنع سيارات ذكية وأنيقة تناسب العائلات والسائقين الشباب. مدفوعون بالابتكار، نسعى لجعل كل رحلة أكثر راحة ومتعة وترابطًا مع أسلوب حياتك.',
    'home.weAreKaiyi.more': 'المزيد',
    'home.service.title': 'الخدمة',
    'home.service.subtitle': 'نقدم لك تجربة قيادة خالية من القلق',
    'home.service.more': 'المزيد',
    'home.video.title': 'عرض كايي',
    'home.video.subtitle': 'انقر للعب في ملء الشاشة',
    
    // We Are Kaiyi page
    'weAreKaiyi.hero.title': 'نحن كاييي',
    'weAreKaiyi.section.title': 'نحن كاييي',
    'weAreKaiyi.story.content': 'كاييي الإمارات، جزء من مجموعة ليجند هولدينغ، هي الوكيل الحصري لسيارات كاييي في الإمارات العربية المتحدة. بصفتنا الوكيل الرسمي، نلتزم بتقديم خدمة موثوقة وسيارات تناسب أسلوب حياتك.\n\nنفخر بأن نقدم روح كاييي الجديدة والديناميكية في الإمارات، مع موديلات مثل كاييي X3 برو، X7، وE5، المصممة للعائلات، والسائقين الشباب، وكل من يبحث عن قيادة جريئة وأنيقة.\n\nيقع معرضنا الترحيبي في قلب دبي، ويوفر دعمًا كاملاً للمبيعات وما بعد البيع. اكتشف موديلنا المميز كاييي X7، المتوفر الآن في جميع أنحاء الإمارات.\n\nهل تبحث عن سيارة تناسب عائلتك أو مغامرتك القادمة؟ احجز تجربة قيادة اليوم. فريقنا جاهز لمساعدتك في كل خطوة.\n\nفي كاييي الإمارات، نحن لا نقدم فقط سيارات، بل نخلق لحظات وذكريات ورحلات تستحق أن تعيشها.',
    
    // Footer
    'footer.lineup': 'تحقق من التشكيلة:',
    'footer.afterSales': 'ما بعد البيع:',
    'footer.about': 'حول:',
    'footer.showroom': 'المعرض:',
    'footer.address': '787M+3WW - طريق الاتحاد - الخبيصي - دبي',
    'footer.hours': 'الأحد-السبت-9:00 صباحاً إلى 7:00 مساءً',
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
    'common.more': 'المزيد',
    
    // Models
    'models.x7.name': 'X7',
    'models.x7.description': 'هنا تبدأ مغامرات عائلتك.',
    'models.x7.specs.engine': 'المحرك: 1.6T/ 2.0T',
    'models.x7.specs.length': 'الطول: 4710 مم',
    'models.x7.specs.width': 'العرض: 1955 مم',
    'models.x7.specs.height': 'الارتفاع: 1705 مم',
    'models.x7.specs.wheelbase': 'قاعدة العجلات: 2800 مم',
    
    'models.x3pro.name': 'X3 برو',
    'models.x3pro.description': 'مصمم للراحة ومصمم ليناسب أسلوب حياتك.',
    'models.x3pro.specs.engine': 'المحرك: 1.5T/ 1.5L',
    'models.x3pro.specs.length': 'الطول: 4400 مم',
    'models.x3pro.specs.width': 'العرض: 1831 مم',
    'models.x3pro.specs.height': 'الارتفاع: 1653 مم',
    'models.x3pro.specs.wheelbase': 'قاعدة العجلات: 2632 مم',
    
    'models.e5.name': 'كاييي E5',
    'models.e5.description': 'كفاءة رياضية مع القوة التي تحتاجها يوميًا.',
    'models.e5.specs.engine': 'المحرك: 1.5T',
    'models.e5.specs.length': 'الطول: 4666 مم',
    'models.e5.specs.width': 'العرض: 1825 مم',
    'models.e5.specs.height': 'الارتفاع: 1484 مم',
    'models.e5.specs.wheelbase': 'قاعدة العجلات: 2700 مم',
    
    // Popup
    'popup.e5NotAvailable': 'الكتيب غير متوفر بعد لموديل إي 5.',
    'popup.brochureNotFound': 'الكتيب غير موجود للموديل: {modelName}',
    'popup.phoneValidation': 'يجب أن يكون رقم الهاتف 9 أرقام بالضبط',
    'popup.submitError': 'خطأ في إرسال النموذج. يرجى المحاولة مرة أخرى.',
    'popup.downloadBrochure': 'تحميل كتيب {modelName}',
    'popup.provideDetails': 'يرجى تقديم بياناتك للوصول إلى الكتيب',
    'popup.fullName': 'الاسم الكامل',
    'popup.fullNamePlaceholder': 'أدخل اسمك الكامل',
    'popup.phoneNumber': 'رقم الهاتف',
    'popup.phoneHelp': 'أدخل رقم الهاتف المكون من 9 أرقام (مثال: 501234567)',
    'popup.emailAddress': 'عنوان البريد الإلكتروني',
    'popup.emailPlaceholder': 'أدخل عنوان بريدك الإلكتروني',
    'popup.processing': 'جاري المعالجة...',
    'popup.downloadBrochureButton': 'تحميل الكتيب',
    'popup.thankYou': 'شكراً لك!',
    'popup.brochureWillOpen': 'سيتم فتح كتيب {modelName} في تبويب جديد!',
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
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string, params?: Record<string, string>): string => {
    let translation = translations[language][key as keyof typeof translations[typeof language]] || key;
    
    // Handle parameter interpolation
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{${param}}`, value);
      });
    }
    
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