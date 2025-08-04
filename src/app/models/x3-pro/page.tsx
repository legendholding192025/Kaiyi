'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BrochureDownloadPopup from '../../../components/BrochureDownloadPopup';

export default function X3ProPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [selectedColor, setSelectedColor] = useState(0);
  const [isBrochurePopupOpen, setIsBrochurePopupOpen] = useState(false);

  const carColors = [
    {
      name: "Red",
      hex: "#b82c2d",
      image: "https://kaiyiglobal.com/upload/8a/46091565c2cfce6bb801ba56f8db38.png"
    },
    {
      name: "Black",
      hex: "#0f0f0f",
      image: "https://kaiyiglobal.com/upload/c2/49c88e61e21d6bfa46b0f53e7bab3a.png"
    },
    {
      name: "Gray",
      hex: "#585858",
      image: "https://kaiyiglobal.com/upload/77/d58a3a43afeed2a9c0f192e1d1629c.png"
    },
    {
      name: "Blue Gray",
      hex: "#555b6b",
      image: "https://kaiyiglobal.com/upload/24/dddbb06f986bc404440ca839d88fc8.png"
    },
    {
      name: "Light Gray",
      hex: "#e4e6e7",
      image: "https://kaiyiglobal.com/upload/0f/d4884546c23d2829425106f4402518.png"
    }
  ];

  const secondSlideshowImages = [
    "https://kaiyiglobal.com/upload/e3/34fd83f67136f5d2827fd84d4804c7.jpg"
  ];

  const thirdSlideshowImages = [
    "https://kaiyiglobal.com/upload/b4/d6e8755dab78e986587ff0fb705c7e.jpg"
  ];

  const fourthSlideshowImages = [
    "https://kaiyiglobal.com/upload/5c/4559812c710591f2f1343a1a3c9deb.jpg"
  ];

  const fifthSlideshowImages = [
    "https://kaiyiglobal.com/upload/18/557b1c7fc06e422aac95f33675cd30.jpg"
  ];

  const technicalImages = [
    "https://kaiyiglobal.com/upload/dc/75c31b905d3a100ae538159e4bdf3e.jpg",
    "https://kaiyiglobal.com/upload/97/d6f027b79886ff6eb56b60aea6b2cf.jpg",
    "https://kaiyiglobal.com/upload/fc/f3b92b648eb8375792eb4fe1560c0e.jpg"
  ];

  const secondTechnicalImages = [
    "https://kaiyiglobal.com/upload/f0/48577966e293725e2379d32be5b9ae.jpg",
    "https://kaiyiglobal.com/upload/49/b280c67a66debb00b76d825f132512.jpg",
    "https://kaiyiglobal.com/upload/08/7572dcd95c9ed0a9ffe7b19701c195.jpg",
    "https://kaiyiglobal.com/upload/cf/7e5632c259defad216d9dba2011b1f.jpg"
  ];

  const thirdTechnicalImages = [
    "https://kaiyiglobal.com/upload/66/e0e1faadd9e3103bab2cacb998f083.jpg",
    "https://kaiyiglobal.com/upload/1e/21da6e53fa551c8d54d3ba15629ae7.jpg",
    "https://kaiyiglobal.com/upload/46/2ee5a7534b8965a277fc2a36b41da5.jpg",
    "https://kaiyiglobal.com/upload/ff/d013d5c3fb75771d16362c351cf26a.jpg"
  ];

  const fourthTechnicalImages = [
    "https://kaiyiglobal.com/upload/09/f2c77af836032a8f956194ce508f49.jpg",
    "https://kaiyiglobal.com/upload/63/0e6e63b7532617b9627d57d9883f7e.jpg",
    "https://kaiyiglobal.com/upload/35/f6a99049c10518576fdb8bb28af0d8.jpg"
  ];

  const fifthTechnicalImages = [
    "https://kaiyiglobal.com/upload/0a/170bb3611909f35026bd14dfdec603.jpg",
    "https://kaiyiglobal.com/upload/28/b55c13d81354376826557c22ac3bc2.jpg",
    "https://kaiyiglobal.com/upload/e7/746e122bd088e01d92f6083fc11b6d.jpg",
    "https://kaiyiglobal.com/upload/e4/658e61310d5dba71d97baa2c11240a.jpg",
    "https://kaiyiglobal.com/upload/4f/287ed1c486246802dde89d537364db.jpg"
  ];

  const technicalDetails = [
    "1.5T Engine", 
    "Simulated 9-Speed CVT",
    "Multi-Condition Driving Mode"
  ];

  const secondTechnicalDetails = [
    "Rear AC Outlet + Dual USB Jacks",
    "Keyless Entry + One-Key Start",
    "360° Panoramic Camera",
    "Cruise Control"
  ];

  const thirdTechnicalDetails = [
    "2632 mm Super Long Wheelbase",
    "Excellent Storage Space",
    "Bosch ESP 9.3 +EPS +HDC",
    "Side Airbags in Front Row"
  ];

  const fourthTechnicalDetails = [
    "10.25-inch Central Control Screen + 7-inch TFT Instrument",
    "Mobile Phone Wireless Charging",
    "CarLife"
  ];

  const fifthTechnicalDetails = [
    "Diamond Cutting Craft Front Grille",
    "Suspension Type Roof",
    "18-inch Aluminum Alloy Rims + Red Calipers",
    "LED Tailgate Light Bar",
    "Wrap-Around Style Cockpit"
  ];

  const [currentTechnicalSlide, setCurrentTechnicalSlide] = useState(0);
  const [hoveredTechnicalIndex, setHoveredTechnicalIndex] = useState<number | null>(null);
  const [currentSecondTechnicalSlide, setCurrentSecondTechnicalSlide] = useState(0);
  const [hoveredSecondTechnicalIndex, setHoveredSecondTechnicalIndex] = useState<number | null>(null);
  const [currentThirdTechnicalSlide, setCurrentThirdTechnicalSlide] = useState(0);
  const [hoveredThirdTechnicalIndex, setHoveredThirdTechnicalIndex] = useState<number | null>(null);
  const [currentFourthTechnicalSlide, setCurrentFourthTechnicalSlide] = useState(0);
  const [hoveredFourthTechnicalIndex, setHoveredFourthTechnicalIndex] = useState<number | null>(null);
  const [currentFifthTechnicalSlide, setCurrentFifthTechnicalSlide] = useState(0);
  const [hoveredFifthTechnicalIndex, setHoveredFifthTechnicalIndex] = useState<number | null>(null);

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
    handleVideoVisibility(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleVideoVisibility);
    };
  }, []);

  // Technical slideshow effect
  useEffect(() => {
    if (hoveredTechnicalIndex === null) {
      const interval = setInterval(() => {
        setCurrentTechnicalSlide((prevSlide) => (prevSlide + 1) % technicalImages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [hoveredTechnicalIndex, technicalImages.length]);

  // Second technical slideshow effect
  useEffect(() => {
    if (hoveredSecondTechnicalIndex === null) {
      const interval = setInterval(() => {
        setCurrentSecondTechnicalSlide((prevSlide) => (prevSlide + 1) % secondTechnicalImages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [hoveredSecondTechnicalIndex, secondTechnicalImages.length]);

  // Third technical slideshow effect
  useEffect(() => {
    if (hoveredThirdTechnicalIndex === null) {
      const interval = setInterval(() => {
        setCurrentThirdTechnicalSlide((prevSlide) => (prevSlide + 1) % thirdTechnicalImages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [hoveredThirdTechnicalIndex, thirdTechnicalImages.length]);

  // Fourth technical slideshow effect
  useEffect(() => {
    if (hoveredFourthTechnicalIndex === null) {
      const interval = setInterval(() => {
        setCurrentFourthTechnicalSlide((prevSlide) => (prevSlide + 1) % fourthTechnicalImages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [hoveredFourthTechnicalIndex, fourthTechnicalImages.length]);

  // Fifth technical slideshow effect
  useEffect(() => {
    if (hoveredFifthTechnicalIndex === null) {
      const interval = setInterval(() => {
        setCurrentFifthTechnicalSlide((prevSlide) => (prevSlide + 1) % fifthTechnicalImages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [hoveredFifthTechnicalIndex, fifthTechnicalImages.length]);

  const handleTechnicalHover = (index: number) => {
    setHoveredTechnicalIndex(index);
    setCurrentTechnicalSlide(index);
  };

  const handleTechnicalLeave = () => {
    setHoveredTechnicalIndex(null);
  };

  const handleSecondTechnicalHover = (index: number) => {
    setHoveredSecondTechnicalIndex(index);
    setCurrentSecondTechnicalSlide(index);
  };

  const handleSecondTechnicalLeave = () => {
    setHoveredSecondTechnicalIndex(null);
  };

  const handleThirdTechnicalHover = (index: number) => {
    setHoveredThirdTechnicalIndex(index);
    setCurrentThirdTechnicalSlide(index);
  };

  const handleThirdTechnicalLeave = () => {
    setHoveredThirdTechnicalIndex(null);
  };

  const handleFourthTechnicalHover = (index: number) => {
    setHoveredFourthTechnicalIndex(index);
    setCurrentFourthTechnicalSlide(index);
  };

  const handleFourthTechnicalLeave = () => {
    setHoveredFourthTechnicalIndex(null);
  };

  const handleFifthTechnicalHover = (index: number) => {
    setHoveredFifthTechnicalIndex(index);
    setCurrentFifthTechnicalSlide(index);
  };

  const handleFifthTechnicalLeave = () => {
    setHoveredFifthTechnicalIndex(null);
  };

  const handleTestDrive = () => {
    window.location.href = '/test-drive';
  };

  const handleDownloadBrochure = () => {
    setIsBrochurePopupOpen(true);
  };

  const handleColorChange = (index: number) => {
    setSelectedColor(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Component */}
      <Navbar />
      
      {/* Hero Section with Video */}
      <div className="relative h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
        >
          <source src="https://kaiyiglobal.com/upload/91/20eeeb94264327ae5edeb02c3974a6.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-bruno-ace-sc">
              KAIYI X3 Pro
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              All Around Hot Hatch
            </p>
            <div className="text-lg md:text-xl text-gray-300 space-y-2">
              <p>• Engine: 1.5T/ 1.5L</p>
              <p>• Length: 4400 mm</p>
              <p>• Wheelbase: 2632 mm</p>
            </div>
          </div>
        </div>
        
        {/* Action Buttons - Bottom Right */}
        <div className="absolute bottom-8 right-8 flex flex-col space-y-4">
          <button
            onClick={handleTestDrive}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Test Drive
          </button>
          <button
            onClick={handleDownloadBrochure}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-colors shadow-lg"
          >
            Download Brochure
          </button>
        </div>
      </div>
      
      {/* Color Selection Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Car Image - Large and Centered */}
          <div className="mb-12">
            <div className="flex justify-center">
              <Image
                src={carColors[selectedColor].image}
                alt={`KAIYI X3 Pro in ${carColors[selectedColor].name}`}
                width={800}
                height={600}
                className="w-full max-w-4xl h-auto"
              />
            </div>
          </div>
          
          {/* Details Row - Specifications, Colors, and Tagline */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Specifications */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">4400 mm</div>
                  <div className="text-sm text-gray-600 uppercase">Length</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">1831 mm</div>
                  <div className="text-sm text-gray-600 uppercase">Width</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">1653 mm</div>
                  <div className="text-sm text-gray-600 uppercase">Height</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">2632 mm</div>
                  <div className="text-sm text-gray-600 uppercase">Wheelbase</div>
                </div>
              </div>
            </div>
            
            {/* Color Selection */}
            <div className="flex-1 flex justify-center">
              <div className="flex flex-wrap gap-4 justify-center">
                {carColors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorChange(index)}
                    className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      selectedColor === index 
                        ? 'border-black scale-110 shadow-lg' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Text Section */}
      <div className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 font-bruno-ace-sc uppercase tracking-wide">
              STRONG POWER
            </h2>
            <p className="text-base md:text-lg text-black">
              The efficient powertrain, improving ride quality and noise transferring.
            </p>
          </div>
        </div>
      </div>
      
      {/* Full Size Image Section */}
      <div className="w-full relative overflow-hidden h-64 md:h-screen">
        <Image
          src="https://kaiyiglobal.com/upload/ed/14a2757e693c6b66f51fe02d672442.jpg"
          alt="KAIYI X3 Pro Interior"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      
      {/* Technical Features Section */}
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Image container with overflow-hidden */}
            <div className="relative overflow-hidden mx-auto h-64 md:h-[700px]" style={{ width: '1634px', maxWidth: '100%' }}>
              {/* Technical Images Slideshow */}
              <div className="relative w-full h-full">
                {technicalImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentTechnicalSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`KAIYI X3 Pro Technical Feature ${index + 1}`}
                      width={1634}
                      height={700}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Technical Details Bar - Outside image container for mobile visibility */}
            <div className="mt-4 md:mt-0 md:absolute md:bottom-0 md:left-0 md:right-0 bg-gray-800/90 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6">
                {technicalDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={`flex-1 text-center px-4 py-2 md:py-3 cursor-pointer transition-all duration-300 ${
                      hoveredTechnicalIndex === index || currentTechnicalSlide === index
                        ? 'text-white bg-white/20'
                        : 'text-gray-300 hover:text-white'
                    } ${index < technicalDetails.length - 1 ? 'border-r border-gray-600' : ''}`}
                    onMouseEnter={() => handleTechnicalHover(index)}
                    onMouseLeave={handleTechnicalLeave}
                  >
                    <p className="text-sm md:text-base font-medium">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Text Section */}
      <div className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 font-bruno-ace-sc uppercase tracking-wide">
              EXTRAORDINARY CONFIGURATION
            </h2>
            <p className="text-base md:text-lg text-black">
              Rich configurations, causing no loss of driving joy.
            </p>
          </div>
        </div>
      </div>
      
      {/* Second Full Size Image Section */}
      <div className="w-full relative overflow-hidden h-64 md:h-screen">
        <Image
          src={secondSlideshowImages[0]}
          alt="KAIYI X3 Pro Interior"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      
      {/* Second Technical Features Section */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Image container with overflow-hidden */}
            <div className="relative overflow-hidden mx-auto h-64 md:h-[700px]" style={{ width: '1634px', maxWidth: '100%' }}>
              {/* Second Technical Images Slideshow */}
              <div className="relative w-full h-full">
                {secondTechnicalImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentSecondTechnicalSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`KAIYI X3 Pro Second Technical Feature ${index + 1}`}
                      width={1634}
                      height={700}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Second Technical Details Bar - Outside image container for mobile visibility */}
            <div className="mt-4 md:mt-0 md:absolute md:bottom-0 md:left-0 md:right-0 bg-gray-800/90 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6">
                {secondTechnicalDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={`flex-1 text-center px-4 py-2 md:py-3 cursor-pointer transition-all duration-300 ${
                      hoveredSecondTechnicalIndex === index || currentSecondTechnicalSlide === index
                        ? 'text-white bg-white/20'
                        : 'text-gray-300 hover:text-white'
                    } ${index < secondTechnicalDetails.length - 1 ? 'border-r border-gray-600' : ''}`}
                    onMouseEnter={() => handleSecondTechnicalHover(index)}
                    onMouseLeave={handleSecondTechnicalLeave}
                  >
                    <p className="text-sm md:text-base font-medium">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Text Section */}
      <div className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 font-bruno-ace-sc uppercase tracking-wide">
              RIDE QUALITY
            </h2>
            <p className="text-base md:text-lg text-black">
              Active safety configurations, furnishing you with intuitive rides.
            </p>
          </div>
        </div>
      </div>
      
      {/* Third Full Size Image Section */}
      <div className="w-full relative overflow-hidden h-64 md:h-screen">
        <Image
          src={thirdSlideshowImages[0]}
          alt="KAIYI X3 Pro Interior"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      
      {/* Third Technical Features Section */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Image container with overflow-hidden */}
            <div className="relative overflow-hidden mx-auto h-64 md:h-[700px]" style={{ width: '1634px', maxWidth: '100%' }}>
              {/* Third Technical Images Slideshow */}
              <div className="relative w-full h-full">
                {thirdTechnicalImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentThirdTechnicalSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`KAIYI X3 Pro Third Technical Feature ${index + 1}`}
                      width={1634}
                      height={700}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Third Technical Details Bar - Outside image container for mobile visibility */}
            <div className="mt-4 md:mt-0 md:absolute md:bottom-0 md:left-0 md:right-0 bg-gray-800/90 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6">
                {thirdTechnicalDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={`flex-1 text-center px-4 py-2 md:py-3 cursor-pointer transition-all duration-300 ${
                      hoveredThirdTechnicalIndex === index || currentThirdTechnicalSlide === index
                        ? 'text-white bg-white/20'
                        : 'text-gray-300 hover:text-white'
                    } ${index < thirdTechnicalDetails.length - 1 ? 'border-r border-gray-600' : ''}`}
                    onMouseEnter={() => handleThirdTechnicalHover(index)}
                    onMouseLeave={handleThirdTechnicalLeave}
                  >
                    <p className="text-sm md:text-base font-medium">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Text Section */}
      <div className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 font-bruno-ace-sc uppercase tracking-wide">
              INTELLIGENT TECHNOLOGY
            </h2>
            <p className="text-base md:text-lg text-black">
              Updated configurations, making driving much easier.
            </p>
          </div>
        </div>
      </div>
      
      {/* Fourth Full Size Image Section */}
      <div className="w-full relative overflow-hidden h-64 md:h-screen">
        <Image
          src={fourthSlideshowImages[0]}
          alt="KAIYI X3 Pro Interior"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      
      {/* Fourth Technical Features Section */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Image container with overflow-hidden */}
            <div className="relative overflow-hidden mx-auto h-64 md:h-[700px]" style={{ width: '1634px', maxWidth: '100%' }}>
              {/* Fourth Technical Images Slideshow */}
              <div className="relative w-full h-full">
                {fourthTechnicalImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentFourthTechnicalSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`KAIYI X3 Pro Fourth Technical Feature ${index + 1}`}
                      width={1634}
                      height={700}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Fourth Technical Details Bar - Outside image container for mobile visibility */}
            <div className="mt-4 md:mt-0 md:absolute md:bottom-0 md:left-0 md:right-0 bg-gray-800/90 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6">
                {fourthTechnicalDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={`flex-1 text-center px-4 py-2 md:py-3 cursor-pointer transition-all duration-300 ${
                      hoveredFourthTechnicalIndex === index || currentFourthTechnicalSlide === index
                        ? 'text-white bg-white/20'
                        : 'text-gray-300 hover:text-white'
                    } ${index < fourthTechnicalDetails.length - 1 ? 'border-r border-gray-600' : ''}`}
                    onMouseEnter={() => handleFourthTechnicalHover(index)}
                    onMouseLeave={handleFourthTechnicalLeave}
                  >
                    <p className="text-sm md:text-base font-medium">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Text Section */}
      <div className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 font-bruno-ace-sc uppercase tracking-wide">
              DYNAMIC APPEARANCE
            </h2>
            <p className="text-base md:text-lg text-black">
              Sporty appearance, awakening the feeling of enchantment in onlookers.
            </p>
          </div>
        </div>
      </div>
      
      {/* Fifth Full Size Image Section */}
      <div className="w-full relative overflow-hidden h-64 md:h-screen">
        <Image
          src={fifthSlideshowImages[0]}
          alt="KAIYI X3 Pro Interior"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      
      {/* Fifth Technical Features Section */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Image container with overflow-hidden */}
            <div className="relative overflow-hidden mx-auto h-64 md:h-[700px]" style={{ width: '1634px', maxWidth: '100%' }}>
              {/* Fifth Technical Images Slideshow */}
              <div className="relative w-full h-full">
                {fifthTechnicalImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentFifthTechnicalSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`KAIYI X3 Pro Fifth Technical Feature ${index + 1}`}
                      width={1634}
                      height={700}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Fifth Technical Details Bar - Outside image container for mobile visibility */}
            <div className="mt-4 md:mt-0 md:absolute md:bottom-0 md:left-0 md:right-0 bg-gray-800/90 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6">
                {fifthTechnicalDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={`flex-1 text-center px-4 py-2 md:py-3 cursor-pointer transition-all duration-300 ${
                      hoveredFifthTechnicalIndex === index || currentFifthTechnicalSlide === index
                        ? 'text-white bg-white/20'
                        : 'text-gray-300 hover:text-white'
                    } ${index < fifthTechnicalDetails.length - 1 ? 'border-r border-gray-600' : ''}`}
                    onMouseEnter={() => handleFifthTechnicalHover(index)}
                    onMouseLeave={handleFifthTechnicalLeave}
                  >
                    <p className="text-sm md:text-base font-medium">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Brochure Download Popup */}
      <BrochureDownloadPopup
        isOpen={isBrochurePopupOpen}
        onClose={() => setIsBrochurePopupOpen(false)}
        modelName="KAIYI X3 Pro"
      />
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
} 