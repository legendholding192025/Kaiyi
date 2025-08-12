'use client';

import Image from 'next/image';
import { useEffect, useState, useRef, Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BrochureDownloadPopup from '../components/BrochureDownloadPopup';
import { useLanguage } from '@/contexts/LanguageContext';

// Lazy load non-critical components
const LazyVideoSection = lazy(() => import('@/components/VideoSection'));
const LazyModelSection = lazy(() => import('@/components/ModelSection'));

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
  const [isClient, setIsClient] = useState(false);

  const heroSlides = [
    {
      id: 1,
      image: 'https://cdn.legendholding.com/images/cdn_68933f58b721e4.14363203_20250806_114112.jpg',
      title: t('home.hero.title'),
      subtitle: t('home.hero.subtitle'),
      button1: t('home.hero.testDrive'),
      button2: t('home.hero.downloadBrochure')
    },
    {
      id: 2,
      image: 'https://cdn.legendholding.com/images/cdn_68933ff403d2b1.16599158_20250806_114348.jpg',
      title: t('home.hero.title2'),
      subtitle: t('home.hero.subtitle2'),
      button1: t('home.hero.testDrive'),
      button2: t('home.hero.downloadBrochure')
    },
    {
      id: 3,
      image: 'https://cdn.legendholding.com/images/cdn_6893408dd09af2.58861825_20250806_114621.jpg',
      title: t('home.hero.title3'),
      subtitle: t('home.hero.subtitle3'),
      button1: t('home.hero.testDrive'),
      button2: t('home.hero.downloadBrochure')
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);

  // Client-side hydration check
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Video visibility detection - deferred
  useEffect(() => {
    if (!isClient) return;
    
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
  }, [isClient]);

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
    <>
      {/* Structured Data for Car Models */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "KAIYI Car Models",
            "description": "Premium KAIYI cars and SUVs available in UAE",
            "itemListElement": [
              {
                "@type": "Car",
                "position": 1,
                "name": "KAIYI X7",
                "description": "Where Family Adventures Begin",
                "brand": {
                  "@type": "Brand",
                  "name": "KAIYI"
                },
                "category": "SUV",
                "url": "https://kaiyi.ae/models/x7"
              },
              {
                "@type": "Car",
                "position": 2,
                "name": "KAIYI X3 Pro",
                "description": "Designed for comfort and styled to fit your life",
                "brand": {
                  "@type": "Brand",
                  "name": "KAIYI"
                },
                "category": "SUV",
                "url": "https://kaiyi.ae/models/x3-pro"
              },
              {
                "@type": "Car",
                "position": 3,
                "name": "KAIYI E5",
                "description": "Sporty efficiency with the power you need every day",
                "brand": {
                  "@type": "Brand",
                  "name": "KAIYI"
                },
                "category": "Sedan",
                "url": "https://kaiyi.ae/models/e5"
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navbar Component */}
        <Navbar />

        {/* Hero Section */}
        <main>
          <section id="home" className="pt-16 min-h-[70vh] sm:min-h-[95vh] flex items-center justify-center relative overflow-hidden">
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
                  alt={`${slide.title} - ${slide.subtitle}`}
                  fill
                  className={`object-cover ${index === 0 ? 'object-right' : ''} ${index === 2 ? 'object-contain' : ''}`}
                  style={index === 0 ? { objectPosition: '100% center' } : index === 1 ? { objectPosition: '40% center' } : {}}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            ))}
            
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center min-h-[50vh] sm:min-h-[70vh]">
                {/* Text Content */}
                <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 max-w-4xl px-4">
                  <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white leading-tight">
                      {heroSlides[currentSlide].title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-medium">
                      {heroSlides[currentSlide].subtitle}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center">
                    <a href="/test-drive" className="bg-[#0e62a8] border border-[#0e62a8] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-medium transition-colors hover:bg-[#0a4a7a] hover:border-[#0a4a7a] text-center">
                      {heroSlides[currentSlide].button1}
                    </a>
                    <button 
                      className="bg-[#0e62a8] border border-[#0e62a8] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-medium transition-colors hover:bg-[#0a4a7a] hover:border-[#0a4a7a] cursor-pointer"
                      onClick={() => {
                        setSelectedModelName(heroSlides[currentSlide].title);
                        setIsBrochurePopupOpen(true);
                      }}
                    >
                      {heroSlides[currentSlide].button2}
                    </button>
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
                  aria-label={`Go to slide ${index + 1}`}
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

          {/* Model Section - Lazy Loaded */}
          <Suspense fallback={
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-pulse">
                  <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
                  <div className="h-64 bg-gray-200 rounded max-w-4xl mx-auto"></div>
                </div>
              </div>
            </div>
          }>
            <LazyModelSection 
              carModels={carModels}
              currentModelIndex={currentModelIndex}
              setCurrentModelIndex={setCurrentModelIndex}
              hoveredModel={hoveredModel}
              setHoveredModel={setHoveredModel}
            />
          </Suspense>

          {/* Video Section - Lazy Loaded */}
          <Suspense fallback={
            <div className="relative h-[70vh] sm:h-screen bg-gray-900 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="animate-pulse">
                  <div className="h-8 bg-gray-700 rounded w-1/2 mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/3 mx-auto"></div>
                </div>
              </div>
            </div>
          }>
            <LazyVideoSection videoRef={videoRef} />
          </Suspense>

          {/* We Are KAIYI Section */}
          <section id="about" className="bg-white" aria-labelledby="about-heading">
            {/* Top Section - WE ARE KAIYI */}
            <div className="py-20">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 id="about-heading" className="text-5xl md:text-6xl font-bold text-black mb-6">
                  {t('home.weAreKaiyi.title')}
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                  {t('home.weAreKaiyi.description')}
                </p>
                <a 
                  href="/we-are-kaiyi"
                  className="inline-block bg-[#0e62a8] border border-[#0e62a8] text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-[#0a4a7a] hover:border-[#0a4a7a]"
                >
                  {t('home.weAreKaiyi.more')}
                </a>
              </div>
            </div>

            {/* Image Section - Cross-wise Layout */}
            <div className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Image 1 */}
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src="https://cdn.legendholding.com/images/cdn_68934f98360432.89609659_20250806_125032.jpg"
                      alt="KAIYI Innovation and Technology"
                      width={400}
                      height={500}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Image 2 */}
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src="https://cdn.legendholding.com/images/cdn_68933ff403d2b1.16599158_20250806_114348.jpg"
                      alt="KAIYI Quality and Design"
                      width={400}
                      height={500}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* Image 3 */}
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src="https://cdn.legendholding.com/images/cdn_689350637bc023.32741045_20250806_125355.jpg"
                      alt="KAIYI Performance and Engineering"
                      width={400}
                      height={500}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Section - SERVICE with Car Interior Image */}
            <div className="relative bg-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
                <div className="relative">
                  <Image
                    src="https://cdn.legendholding.com/images/cdn_68935e577bba84.38122423_20250806_135327.jpg"
                    alt="KAIYI Car Interior - Premium Comfort and Technology"
                    width={1200}
                    height={600}
                    className="w-full h-48 sm:h-auto object-cover rounded-lg shadow-2xl"
                    loading="lazy"
                    sizes="100vw"
                  />
                  
                  {/* Text Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end items-center pb-4 sm:pb-8 lg:pb-16">
                    <div className="text-center px-4">
                      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg">
                        {t('home.service.title')}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-4 sm:mb-6 lg:mb-8 max-w-2xl drop-shadow-lg">
                        {t('home.service.subtitle')}
                      </p>
                      <a 
                        href="/service-booking"
                        className="inline-block bg-[#0e62a8] border border-[#0e62a8] text-white px-8 py-3 rounded-lg font-medium transition-colors hover:bg-[#0a4a7a] hover:border-[#0a4a7a]"
                      >
                        {t('home.service.more')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Brochure Download Popup */}
        <BrochureDownloadPopup
          isOpen={isBrochurePopupOpen}
          onClose={() => setIsBrochurePopupOpen(false)}
          modelName={selectedModelName}
        />

        {/* Footer Component */}
        <Footer />
      </div>
    </>
  );
}
