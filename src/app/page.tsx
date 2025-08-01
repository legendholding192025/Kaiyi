'use client';

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Type definitions for video fullscreen methods
interface VideoWithFullscreen extends HTMLVideoElement {
  webkitRequestFullscreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

export default function Home() {

  const videoRef = useRef<HTMLVideoElement>(null);

  const heroSlides = [
    {
      id: 1,
      image: 'https://kaiyiglobal.com/upload/dd/87741cf96bb4d4d48290491df9b47d.png',
      title: 'KAIYI X7',
      subtitle: 'HomeLike Mobile Space',
      button1: 'Test Drive',
      button2: 'Download Brochure'
    },
    {
      id: 2,
      image: 'https://kaiyiglobal.com/upload/54/fb0a14b7c86bece73f7ddd0f9ce861.png',
      title: 'KAIYI X3 PRO',
      subtitle: 'All Around Hot Hatch',
      button1: 'Test Drive',
      button2: 'Download Brochure'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

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
      name: 'X3',
      image: 'https://kaiyiglobal.com/upload/b1/d0ec3cd4b9c9ba7e0d6f2f8f7f7d69.png',
      description: 'Compact SUV with modern design and advanced features',
      specs: {
        length: '3720 mm',
        width: '1700 mm',
        height: '1608 mm',
        wheelbase: '2520 mm'
      }
    },
    {
      name: 'X7',
      image: 'https://www.kaiyiglobal.com/upload/e6/6d37b19416d131b3c6651f28aad9b1.png',
      description: 'Premium luxury SUV with exceptional performance',
      specs: {
        length: '4850 mm',
        width: '1950 mm',
        height: '1750 mm',
        wheelbase: '2950 mm'
      }
    },
    {
      name: 'E5',
      image: 'https://kaiyiglobal.com/upload/99/b95b13234541763b68eccb90303e65.png',
      description: 'Electric vehicle with cutting-edge technology',
      specs: {
        length: '4200 mm',
        width: '1800 mm',
        height: '1650 mm',
        wheelbase: '2700 mm'
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
                <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300">
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
              {carModels.map((model) => (
                <button
                  key={model.name}
                  className={`text-base sm:text-lg font-medium transition-all duration-300 ${
                    (hoveredModel === model.name || selectedModel === model.name)
                      ? 'text-purple-600 underline'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onMouseEnter={() => setHoveredModel(model.name)}
                  onMouseLeave={() => setHoveredModel(null)}
                  onClick={() => setSelectedModel(model.name)}
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
                  src={hoveredModel ? carModels.find(m => m.name === hoveredModel)?.image || carModels[0].image : selectedModel ? carModels.find(m => m.name === selectedModel)?.image || carModels[0].image : carModels[0].image}
                  alt="KAIYI Car Model"
                  fill
                  className="object-contain transition-all duration-500"
                />
              </div>
              
              {/* Car Specifications */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {hoveredModel || selectedModel ? (
                  carModels.find(m => m.name === (hoveredModel || selectedModel))?.specs && Object.entries(carModels.find(m => m.name === (hoveredModel || selectedModel))!.specs).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">{value}</div>
                      <div className="text-xs sm:text-sm text-gray-600 uppercase">{key}</div>
                    </div>
                  ))
                ) : (
                  carModels[0].specs && Object.entries(carModels[0].specs).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-black">{value}</div>
                      <div className="text-xs sm:text-sm text-gray-600 uppercase">{key}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
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
          <p className="text-2xl font-bold">KAIYI Showcase</p>
          <p className="text-lg text-gray-300">Click to play in fullscreen</p>
        </div>
      </section>

      {/* We Are KAIYI Section */}
      <section id="about" className="bg-white">
        {/* Top Section - WE ARE KAIYI */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              WE ARE KAIYI
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              We specialize in delivering intelligent products that are backed by an ongoing commitment to technological innovation.
            </p>
            <button className="border-2 border-black text-black px-8 py-3 rounded-none font-semibold text-lg hover:bg-black hover:text-white transition-all duration-300">
              MORE
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
                    SERVICE
                  </h3>
                  <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-lg">
                    bringing you a worry-free driving experience
                  </p>
                  <button className="bg-black text-white px-8 py-3 rounded-none font-semibold text-lg hover:bg-gray-800 transition-all duration-300">
                    MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
