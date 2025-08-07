'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModelsDropdownOpen, setIsModelsDropdownOpen] = useState(false);
  const [isAfterSalesDropdownOpen, setIsAfterSalesDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isMobileModelsDropdownOpen, setIsMobileModelsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollListenerActive, setIsScrollListenerActive] = useState(false);
  
  const { language, setLanguage, t } = useLanguage();

  // Fix hydration mismatch by ensuring client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Reset mobile menu states when component mounts
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileModelsDropdownOpen(false);
    setIsAfterSalesDropdownOpen(false);
    setIsContactDropdownOpen(false);
  }, []);

  // Handle scroll events for navbar visibility
  useEffect(() => {
    // Only activate scroll listener after component has mounted
    if (!isClient) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar at the top of the page
      if (currentScrollY < 100) {
        setIsNavbarVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && isNavbarVisible) {
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY && !isNavbarVisible) {
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Set initial scroll position
    setLastScrollY(window.scrollY);
    setIsScrollListenerActive(true);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClient, lastScrollY, isNavbarVisible]);

  const tabsContent = [
    {
      src: "https://www.kaiyiglobal.com/upload/1a/d147a490cbc17bc9e4459ce608a1e3.png",
      car: "X7",
      carcent: t('models.x7.description'),
      id: 1,
      canshu: [t('models.x7.specs.engine'), t('models.x7.specs.length'), t('models.x7.specs.wheelbase')],
      link: "/models/x7"
    },
    {
      src: "https://kaiyiglobal.com/upload/52/8804af2de37a9d90c77b223cb5eac0.png",
      car: "X3 Pro",
      carcent: t('models.x3pro.description'),
      id: 2,
      canshu: [t('models.x3pro.specs.engine'), t('models.x3pro.specs.length'), t('models.x3pro.specs.wheelbase')],
      link: "/models/x3-pro"
    },
    {
      src: "https://kaiyiglobal.com/upload/f1/fc637859eee69a6faa255e9a0b2c67.png",
      car: "E5",
      carcent: t('models.e5.description'),
      id: 3,
      canshu: [t('models.e5.specs.engine'), t('models.e5.specs.length'), t('models.e5.specs.wheelbase')],
      link: "/models/e5"
    },
  ];

  // Ensure activeTab is within valid range
  const validActiveTab = Math.min(activeTab, tabsContent.length - 1);

  const socialMediaIcons = [
    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', url: 'https://www.facebook.com/Kaiyiuae' },
    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', url: 'https://instagram.com/kaiyiuae' },
    { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', url: 'https://www.linkedin.com/company/kaiyi-uae/about/' },
    { name: 'TikTok', icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z', url: 'https://www.tiktok.com/@kaiyiuae' }
  ];

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'AR', name: 'العربية' }
  ];

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      // When closing the mobile menu, also close all submenus
      setIsMobileMenuOpen(false);
      setIsMobileModelsDropdownOpen(false);
      setIsAfterSalesDropdownOpen(false);
      setIsContactDropdownOpen(false);
    } else {
      // When opening the mobile menu, just open it
      setIsMobileMenuOpen(true);
    }
  };

  const handleLanguageChange = (languageCode: 'EN' | 'AR') => {
    setLanguage(languageCode);
    setIsLanguageDropdownOpen(false);
  };

  // Mobile navigation functions - Enhanced with proper state management
  const handleMobileNavigation = (url: string) => {
    // Close all mobile dropdowns and menu immediately
    setIsMobileMenuOpen(false);
    setIsMobileModelsDropdownOpen(false);
    setIsAfterSalesDropdownOpen(false);
    setIsContactDropdownOpen(false);
    
    // Small delay to allow UI to update before navigation
    setTimeout(() => {
      window.location.href = url;
    }, 100);
  };

  const toggleMobileModels = () => {
    setIsMobileModelsDropdownOpen(!isMobileModelsDropdownOpen);
    // Close other dropdowns
    setIsAfterSalesDropdownOpen(false);
    setIsContactDropdownOpen(false);
  };

  const toggleMobileAfterSales = () => {
    setIsAfterSalesDropdownOpen(!isAfterSalesDropdownOpen);
    // Close other dropdowns
    setIsMobileModelsDropdownOpen(false);
    setIsContactDropdownOpen(false);
  };

  const toggleMobileContact = () => {
    setIsContactDropdownOpen(!isContactDropdownOpen);
    // Close other dropdowns
    setIsMobileModelsDropdownOpen(false);
    setIsAfterSalesDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      
      // Don't close dropdowns if clicking on dropdown content, buttons, or language selector
      if (target.closest('.language-selector') || 
          target.closest('[data-dropdown="models"]') ||
          target.closest('[data-dropdown="afterSales"]') ||
          target.closest('[data-dropdown="contact"]') ||
          target.closest('button')) {
        return;
      }
      
      if (isLanguageDropdownOpen) {
        setIsLanguageDropdownOpen(false);
      }
      if (isModelsDropdownOpen) {
        setIsModelsDropdownOpen(false);
      }
      if (isContactDropdownOpen) {
        setIsContactDropdownOpen(false);
      }
      if (isAfterSalesDropdownOpen) {
        setIsAfterSalesDropdownOpen(false);
      }
      if (isMobileModelsDropdownOpen) {
        setIsMobileModelsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen, isModelsDropdownOpen, isContactDropdownOpen, isAfterSalesDropdownOpen, isMobileModelsDropdownOpen]);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-gradient-to-b from-[#ebebeb] to-[#afb0b0] text-black transition-transform duration-300 ease-in-out ${
      isScrollListenerActive && !isNavbarVisible ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="w-full px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/logo/Kaiyi_logo_black.svg"
                alt="KAIYI Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Center Section - Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group" data-dropdown="models">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModelsDropdownOpen(!isModelsDropdownOpen);
                }}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-black hover:text-gray-700 transition-colors"
              >
                <span>{t('nav.models')}</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              
              {/* Models Dropdown */}
              <div className={`fixed top-16 left-1/2 transform -translate-x-1/2 mt-1 w-[95vw] sm:w-[90vw] max-w-6xl bg-white shadow-2xl rounded-lg transition-all duration-300 z-50 ${
                isModelsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:group-hover:opacity-100 lg:group-hover:visible'
              }`}>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left Side - Model List */}
                    <div className="w-full lg:w-[20%] flex flex-row lg:flex-col space-x-4 lg:space-x-0 lg:space-y-6 mb-6 lg:mb-0">
                      {tabsContent.map((model, index) => (
                        <Link 
                          key={model.id}
                          href={model.link}
                          className={`cursor-pointer transition-all duration-300 ${validActiveTab === index ? 'font-bold text-lg' : 'text-base'}`}
                          onMouseEnter={() => setActiveTab(index)}
                        >
                          <div className={`${validActiveTab === index ? 'border-b-4 lg:border-b-0 lg:border-l-4 border-[#0e62a8] pb-2 lg:pb-0 lg:pl-2' : 'pb-2 lg:pb-0 lg:pl-2'}`}>
                            {model.car}
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Right Side - Model Details */}
                    <div className="w-full lg:w-[80%] lg:pl-8">
                      <div className="flex flex-col lg:flex-row">
                        {/* Car Image - Now Clickable */}
                        <div className="w-full lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
                          <Link href={tabsContent[validActiveTab].link} className="block cursor-pointer hover:opacity-90 transition-opacity">
                            <Image 
                              src={tabsContent[validActiveTab].src}
                              alt={tabsContent[validActiveTab].car}
                              width={400}
                              height={300}
                              className="w-full h-auto"
                              priority
                            />
                          </Link>
                        </div>
                        
                        {/* Model Info */}
                        <div className="w-full lg:w-1/2">
                          <div className="text-2xl lg:text-3xl font-bold text-black mb-2">
                            <Image
                              src={`/logo/${tabsContent[validActiveTab].car}.svg`}
                              alt={tabsContent[validActiveTab].car}
                              width={120}
                              height={40}
                              className="h-8 w-auto"
                            />
                          </div>
                          <div className="text-base lg:text-lg text-gray-600 mb-4 lg:mb-6">
                            {tabsContent[validActiveTab].carcent}
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8">
                            <a href="/test-drive" className="px-6 lg:px-8 py-2 lg:py-3 rounded-full border border-black bg-white text-black hover:bg-gray-50 transition-colors text-sm lg:text-base text-center">
                              {t('nav.testDrive')}
                            </a>
                            <Link href={tabsContent[validActiveTab].link} className="px-6 lg:px-8 py-2 lg:py-3 rounded-full border border-black bg-white text-black hover:bg-gray-50 transition-colors text-sm lg:text-base text-center">
                              {t('common.more')}
                            </Link>
                          </div>
                          
                          {/* Specifications */}
                          <div className="grid grid-cols-3 gap-4 lg:gap-8">
                            {tabsContent[validActiveTab].canshu.map((spec, index) => (
                              <div key={index} className="text-center">
                                <div className="text-lg lg:text-xl font-bold text-black mb-1">{spec.split(': ')[1] || spec}</div>
                                <div className="text-xs lg:text-sm text-gray-600 uppercase">{spec.split(': ')[0] || ''}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <a href="/we-are-kaiyi" className="flex items-center px-3 py-2 text-sm font-medium text-black hover:text-gray-700 transition-colors">
              <span>{t('nav.weAreKaiyi')}</span>
            </a>

            <div className="relative group" data-dropdown="afterSales">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAfterSalesDropdownOpen(!isAfterSalesDropdownOpen);
                }}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-black hover:text-gray-700 transition-colors"
              >
                <span>{t('nav.afterSales')}</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              
              {/* After Sales Dropdown */}
              <div className={`absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px] transition-all duration-200 ${
                isAfterSalesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:group-hover:opacity-100 lg:group-hover:visible'
              }`}>
                <a href="/warranty" className="block px-4 py-2 text-sm text-black hover:bg-gray-50 transition-colors">
                  {t('nav.warranty')}
                </a>
                <a href="/service-booking" className="block px-4 py-2 text-sm text-black hover:bg-gray-50 transition-colors">
                  {t('nav.serviceBooking')}
                </a>
                <a href="/customer-support" className="block px-4 py-2 text-sm text-black hover:bg-gray-50 transition-colors">
                  {t('nav.customerSupport')}
                </a>
              </div>
            </div>

            <div className="relative group" data-dropdown="contact">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsContactDropdownOpen(!isContactDropdownOpen);
                }}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-black hover:text-gray-700 transition-colors"
              >
                <span>{t('nav.contactUs')}</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              
              {/* Contact Dropdown */}
              <div className={`absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[200px] transition-all duration-200 ${
                isContactDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:group-hover:opacity-100 lg:group-hover:visible'
              }`}>
                <a href="/test-drive" className="block px-4 py-2 text-sm text-black hover:bg-gray-50 transition-colors">
                  {t('nav.testDrive')}
                </a>
                <a href="/contact-us" className="block px-4 py-2 text-sm text-black hover:bg-gray-50 transition-colors">
                  {t('nav.contact')}
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Language & Social */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative language-selector">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-black hover:text-gray-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
                <span>{language}</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>
              
              {/* Language Dropdown */}
              <div className={`absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[120px] transition-all duration-200 ${
                isLanguageDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code as 'EN' | 'AR')}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
                      language === lang.code ? 'bg-gray-100 font-medium' : ''
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Separator */}
            <div className="w-px h-6 bg-gray-400"></div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-2">
              {socialMediaIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-black hover:text-gray-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-black hover:opacity-70 focus:outline-none transition-opacity"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* ENHANCED MOBILE MENU - Fixed all navigation issues */}
        {isClient && (
          <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-2">
              
              {/* Models Section */}
              <div className="border-b border-gray-100">
                                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleMobileModels();
                    }}
                    className="flex items-center justify-between w-full py-3 text-left text-base font-medium text-black hover:text-gray-700 transition-colors touch-manipulation"
                    type="button"
                  >
                    <span>{t('nav.models')}</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileModelsDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </button>
                
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isMobileModelsDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pb-2 space-y-1">
                    {tabsContent.map((model) => (
                      <button
                        key={model.id}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleMobileNavigation(model.link);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-black hover:text-gray-700 hover:bg-gray-50 transition-colors touch-manipulation"
                        type="button"
                      >
                        {model.car}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* We Are Kaiyi - Direct Link */}
              <div className="border-b border-gray-100">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleMobileNavigation('/we-are-kaiyi');
                  }}
                  className="w-full py-3 text-left text-base font-medium text-black hover:text-gray-700 transition-colors touch-manipulation"
                  type="button"
                >
                  <span>{t('nav.weAreKaiyi')}</span>
                </button>
              </div>

              {/* After Sales Section */}
              <div className="border-b border-gray-100">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleMobileAfterSales();
                  }}
                  className="flex items-center justify-between w-full py-3 text-left text-base font-medium text-black hover:text-gray-700 transition-colors touch-manipulation"
                  type="button"
                >
                  <span>{t('nav.afterSales')}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isAfterSalesDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isAfterSalesDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pb-2 space-y-1">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleMobileNavigation('/warranty');
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:text-gray-700 hover:bg-gray-50 transition-colors touch-manipulation"
                      type="button"
                    >
                      {t('nav.warranty')}
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleMobileNavigation('/service-booking');
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:text-gray-700 hover:bg-gray-50 transition-colors touch-manipulation"
                      type="button"
                    >
                      {t('nav.serviceBooking')}
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleMobileNavigation('/customer-support');
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:text-gray-700 hover:bg-gray-50 transition-colors touch-manipulation"
                      type="button"
                    >
                      {t('nav.customerSupport')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="border-b border-gray-100">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleMobileContact();
                  }}
                  className="flex items-center justify-between w-full py-3 text-left text-base font-medium text-black hover:text-gray-700 transition-colors touch-manipulation"
                  type="button"
                >
                  <span>{t('nav.contactUs')}</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isContactDropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isContactDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pb-2 space-y-1">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleMobileNavigation('/test-drive');
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:text-gray-700 hover:bg-gray-50 transition-colors touch-manipulation"
                      type="button"
                    >
                      {t('nav.testDrive')}
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleMobileNavigation('/contact-us');
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:text-gray-700 hover:bg-gray-50 transition-colors touch-manipulation"
                      type="button"
                    >
                      {t('nav.contact')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Language Section */}
              <div className="py-3">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 text-sm font-medium text-black">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <span>Language:</span>
                  </div>
                  <div className="flex space-x-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleLanguageChange(lang.code as 'EN' | 'AR');
                        }}
                        className={`px-3 py-1 text-xs rounded border transition-colors touch-manipulation ${
                          language === lang.code 
                            ? 'bg-black text-white border-black' 
                            : 'bg-white text-black border-gray-300 hover:bg-gray-50'
                        }`}
                        type="button"
                      >
                        {lang.code}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </nav>
  );
} 