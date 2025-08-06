'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BrochureDownloadPopup from '../components/BrochureDownloadPopup';
import { useLanguage } from '@/contexts/LanguageContext';

// Type definitions for video fullscreen methods
interface VideoWithFullscreen extends HTMLVideoElement {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

export default function Home() {
  const { t } = useLanguage();

  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [isBrochurePopupOpen, setIsBrochurePopupOpen] = useState(false);
  const [selectedModelName, setSelectedModelName] = useState('');

  const heroSlides = [
    {
      id: 1,
      image: 'https://kaiyiglobal.com/upload/dd/87741cf96bb4d4d48290491df9b47d.png',
      title: t('home.hero.title'),
      subtitle: t('home.hero.subtitle'),
      button1: t('home.hero.testDrive'),
      button2: t('home.hero.downloadBrochure')
    },
    {
      id: 2,
      image: 'https://kaiyiglobal.com/upload/54/fb0a14b7c86bece73f7ddd0f9ce861.png',
      title: t('home.hero.title2'),
      subtitle: t('home.hero.subtitle2'),
      button1: t('home.hero.testDrive'),
      button2: t('home.hero.downloadBrochure')
    },
    {
      id: 3,
      image: 'https://kaiyiglobal.com/upload/10/e4371844c1619b0f0f1c20b344ecd4.jpg',
      title: t('home.hero.title3'),
      subtitle: t('home.hero.subtitle3'),
      button1: t('home.hero.testDrive'),
      button2: t('home.hero.downloadBrochure')
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Video visibility detection
  useEffect(() => {
    const handleVideoVisibility = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInViewport) {
          videoRef.current.play().catch(() => {
            // Autoplay was prevented
          });
        } else {
          videoRef.current.pause();
        }
      }
    };

    window.addEventListener('scroll', handleVideoVisibility);
    handleVideoVisibility(); // Check initial visibility

    return () => window.removeEventListener('scroll', handleVideoVisibility);
  }, []);

  const carModels = [
    {
      name: t('models.x3pro.name'),
      image: 'https://kaiyiglobal.com/upload/b1/d0ec3cd4b9c9ba7e0d6f2f8f7f7d69.png',
      description: t('models.x3pro.description'),
      specs: {
        length: t('models.x3pro.specs.length'),
        width: t('models.x3pro.specs.width'),
        height: t('models.x3pro.specs.height'),
        wheelbase: t('models.x3pro.specs.wheelbase')
      }
    },
    {
      name: t('models.x7.name'),
      image: 'https://www.kaiyiglobal.com/upload/e6/6d37b19416d131b3c6651f28aad9b1.png',
      description: t('models.x7.description'),
      specs: {
        length: t('models.x7.specs.length'),
        width: t('models.x7.specs.width'),
        height: t('models.x7.specs.height'),
        wheelbase: t('models.x7.specs.wheelbase')
      }
    },
    {
      name: t('models.e5.name'),
      image: 'https://kaiyiglobal.com/upload/99/b95b13234541763b68eccb90303e65.png',
      description: t('models.e5.description'),
      specs: {
        length: t('models.e5.specs.length'),
        width: t('models.e5.specs.width'),
        height: t('models.e5.specs.height'),
        wheelbase: t('models.e5.specs.wheelbase')
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Images */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[80vh]">
            {/* Text Content */}
            <div className="text-center space-y-6 sm:space-y-8 max-w-4xl px-4">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a href="/test-drive" className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 border-2 border-white text-center">
                  {heroSlides[currentSlide].button1}
                </a>
                {/* Hide Download Brochure button for E5 model (slide index 2) */}
                {currentSlide !== 2 && (
                  <button 
                    className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300"
                    onClick={() => {
                      setSelectedModelName(heroSlides[currentSlide].title);
                      setIsBrochurePopupOpen(true);
                    }}
                  >
                    {heroSlides[currentSlide].button2}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Model Section */}
      <section id="models" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Model Navigation */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {carModels.map((model, index) => (
                <button
                  key={model.name}
                  className={`text-xl sm:text-2xl md:text-3xl font-bold transition-all duration-300 ${
                    (hoveredModel === model.name || currentModelIndex === index)
                      ? 'text-[#0e62a8] underline'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onMouseEnter={() => setHoveredModel(model.name)}
                  onMouseLeave={() => setHoveredModel(null)}
                  onClick={() => {
                    setCurrentModelIndex(index);
                  }}
                >
                  {model.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Car Display */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg">
              {/* Car Image */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full mb-6 sm:mb-8">
                <Image
                  src={hoveredModel ? carModels.find(m => m.name === hoveredModel)?.image || carModels[currentModelIndex].image : carModels[currentModelIndex].image}
                  alt="KAIYI Car Model"
                  fill
                  className="object-contain transition-all duration-500"
                />
              </div>
              
              {/* Car Specifications */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {(hoveredModel ? carModels.find(m => m.name === hoveredModel)?.specs : carModels[currentModelIndex].specs) && Object.entries(hoveredModel ? carModels.find(m => m.name === hoveredModel)!.specs : carModels[currentModelIndex].specs).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">{value.split(': ')[1] || value}</div>
                    <div className="text-xs sm:text-sm text-gray-600 uppercase">{value.split(': ')[0] || key}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              onClick={() => {
                const newIndex = currentModelIndex === 0 ? carModels.length - 1 : currentModelIndex - 1;
                setCurrentModelIndex(newIndex);
              }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
              onClick={() => {
                const newIndex = currentModelIndex === carModels.length - 1 ? 0 : currentModelIndex + 1;
                setCurrentModelIndex(newIndex);
              }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="relative h-screen">
        <video
          ref={videoRef}
          id="kaiyi-video"
          className="w-full h-full object-cover"
          poster="https://kaiyiglobal.com/upload/dd/87741cf96bb4d4d48290491df9b47d.png"
          muted
          loop
        >
          <source src="https://kaiyiglobal.com/assets/shouyevie1-1-84f87b2c.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Play Button Overlay */}
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 cursor-pointer"
          onClick={() => {
            if (videoRef.current) {
              const video = videoRef.current as VideoWithFullscreen;
              if (video.requestFullscreen) {
                video.requestFullscreen();
              } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
              } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
              }
              video.muted = false;
              video.play();
            }
          }}
        >
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        
        {/* Video Info */}
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-2xl font-bold">{t('home.video.title')}</p>
          <p className="text-lg text-gray-300">{t('home.video.subtitle')}</p>
        </div>
      </section>

      {/* We Are KAIYI Section */}
      <section id="about" className="bg-white">
        {/* Top Section - WE ARE KAIYI */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              {t('home.weAreKaiyi.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t('home.weAreKaiyi.description')}
            </p>
            <button 
              className="border-2 border-black text-black px-8 py-3 rounded-none font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300"
              onClick={() => window.location.href = '/we-are-kaiyi'}
            >
              {t('home.weAreKaiyi.more')}
            </button>
          </div>
        </div>
        
        {/* Bottom Section - SERVICE with Car Interior Image */}
        <div className="relative bg-gray-100">
          <div className="max-w-7xl mx-auto px-8 py-16">
            <div className="relative">
          <Image
                src="https://www.kaiyiglobal.com/assets/hom3-efad44ac.jpg"
                alt="KAIYI Car Interior"
                width={1200}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
              />
              
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end items-center pb-16">
                <div className="text-center">
                  <h3 className="text-6xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                    {t('home.service.title')}
                  </h3>
                  <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-lg">
                    {t('home.service.subtitle')}
                  </p>
                  <button 
                    className="bg-black text-white px-8 py-3 rounded-none font-semibold text-lg hover:bg-gray-800 transition-all duration-300"
                    onClick={() => window.location.href = '/service-booking'}
                  >
                    {t('home.service.more')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Brochure Download Popup */}
      <BrochureDownloadPopup
        isOpen={isBrochurePopupOpen}
        onClose={() => setIsBrochurePopupOpen(false)}
        modelName={selectedModelName}
      />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
