'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BrochureDownloadPopup from '../../../components/BrochureDownloadPopup';
import { useLanguage } from '../../../contexts/LanguageContext';

export default function E5Page() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [selectedColor, setSelectedColor] = useState(0);
  const [isBrochurePopupOpen, setIsBrochurePopupOpen] = useState(false);

  // SEO Structured Data for KAIYI E5
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Car",
    "name": "KAIYI E5",
    "description": "Sporty efficiency with the power you need every day. The KAIYI E5 is a premium sedan designed for modern families and young drivers.",
    "brand": {
      "@type": "Brand",
      "name": "KAIYI"
    },
    "category": "Sedan",
    "url": "https://kaiyi.ae/models/e5",
    "image": [
      "https://kaiyiglobal.com/upload/99/b95b13234541763b68eccb90303e65.png",
      "https://kaiyiglobal.com/upload/df/c71c66fd8b5d73bb54527e7c4b07dd.png",
      "https://kaiyiglobal.com/upload/e3/fea88113e0fcc9debef3a417ee0bec.png",
      "https://kaiyiglobal.com/upload/88/6adf34c003e998864522c0d739d2b0.png"
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "AED",
      "seller": {
        "@type": "Organization",
        "name": "KAIYI International"
      }
    },
    "vehicleEngine": {
      "@type": "EngineSpecification",
      "name": "1.5T Engine"
    },
    "vehicleTransmission": "Simulated 9-Speed CVT",
    "vehicleWheelbase": "2700 mm",
    "numberOfAirbags": 6,
    "fuelType": "Gasoline",
    "vehicleModelDate": "2026"
  };

  const carColors = [
    {
      name: "Blue Gray",
      hex: "#555b6b",
      image: "https://kaiyiglobal.com/upload/df/c71c66fd8b5d73bb54527e7c4b07dd.png"
    },
    {
      name: "Black",
      hex: "#0f0f0f",
      image: "https://kaiyiglobal.com/upload/e3/fea88113e0fcc9debef3a417ee0bec.png"
    },
    {
      name: "Red",
      hex: "#b82c2d",
      image: "https://kaiyiglobal.com/upload/88/6adf34c003e998864522c0d739d2b0.png"
    },
    {
      name: "Light Gray",
      hex: "#e4e6e7",
      image: "https://kaiyiglobal.com/upload/8b/831db3346acd154bdaee1271e1d9ef.png"
    }
  ];

  const firstSlideshowImages = [
    "https://kaiyiglobal.com/upload/c2/393faa33b92f2cd4c635ff02d0adfb.jpg"
  ];

  const secondSlideshowImages = [
    "https://kaiyiglobal.com/upload/fd/73c4d8d3489ff2885a12e7ae2f33af.jpg"
  ];

  const thirdSlideshowImages = [
    "https://kaiyiglobal.com/upload/10/e4371844c1619b0f0f1c20b344ecd4.jpg"
  ];

  const fourthSlideshowImages = [
    "https://kaiyiglobal.com/upload/5a/384abc1cc1f3f824fa3f8efefb96e1.jpg"
  ];

  const firstTechnicalImages = [
    "https://kaiyiglobal.com/upload/f3/3c443cd0ec48b464b9636ad09488f9.jpg",
    "https://kaiyiglobal.com/upload/1a/363fa6fe77a00ee85573b18f44c90a.jpg",
    "https://www.kaiyiglobal.com/upload/c3/4839c65d66c52fae1be6d2a6ad4053.jpg",
    "https://kaiyiglobal.com/upload/98/be0d9eb7fa339079967115b0088ff8.jpg"
  ];

  const secondTechnicalImages = [
    "https://kaiyiglobal.com/upload/bf/a7da6e8d8b78361bdb9eff97f1f861.jpg",
    "https://kaiyiglobal.com/upload/82/454d23c8b237a82c5ee00e8937ab63.jpg",
    "https://kaiyiglobal.com/upload/21/685b5b1f702de9a9e6ea2c2e7f1511.jpg",
    "https://kaiyiglobal.com/upload/d2/170f2b79d5c6f60237e9fe805dd0bf.jpg",
    "https://kaiyiglobal.com/upload/46/d5a7a31343cb2a178f10179e0cf622.jpg"
  ];

  const thirdTechnicalImages = [
    "https://kaiyiglobal.com/upload/36/8e870e5156491cec8c5a2c6752d669.jpg",
    "https://kaiyiglobal.com/upload/d4/d52ce7923c9d9282e307a934677950.jpg",
    "https://kaiyiglobal.com/upload/ff/de576fcccb6dbdad52c06daa6ab14e.jpg"
  ];

  const fourthTechnicalImages = [
    "https://kaiyiglobal.com/upload/0a/78071bdc8a47ea95ce764a4ffa32aa.jpg",
    "https://kaiyiglobal.com/upload/5b/b9473c8e49c918fdd3a3a39f0476c4.jpg",
    "https://kaiyiglobal.com/upload/8a/af5ba053c5972327dbf8924c1c06e3.jpg",
    "https://kaiyiglobal.com/upload/a0/cfa40f9b907c2096f7546b11d6341c.jpg"
  ];

  const firstTechnicalDetails = [
    "1.5T Engine",
    "Simulated 9-Speed CVT",
    "Bosch ESP 9.3 + EPS + EPB",
    "Front McPherson & Rear Multi-Link Independent Suspension"
  ];

  const secondTechnicalDetails = [
    "Keyless Entry + One-Key Start",
    "Cruise Control",
    "2700 mm  Super Long Wheelbase",
    "6 Hi-Fi Sounds",
    "6 Airbags"
  ];

  const thirdTechnicalDetails = [
    "7-inch LCD Instrument + 10.25-inch Central Control Screen",
    "Mobile Phone Wireless Charging",
    "CarLife"
  ];

  const fourthTechnicalDetails = [
    "Designed by Famous Italian Designer Lowie Vermeersch",
    "17-inch Five-Spoke Sporty Wheels + Red Brake Calipers",
    "Integrated Sportive Seat",
    "Suspended Instrument Panel"
  ];

  const [currentFirstTechnicalSlide, setCurrentFirstTechnicalSlide] = useState(0);
  const [hoveredFirstTechnicalIndex, setHoveredFirstTechnicalIndex] = useState<number | null>(null);
  const [currentSecondTechnicalSlide, setCurrentSecondTechnicalSlide] = useState(0);
  const [hoveredSecondTechnicalIndex, setHoveredSecondTechnicalIndex] = useState<number | null>(null);
  const [currentThirdTechnicalSlide, setCurrentThirdTechnicalSlide] = useState(0);
  const [hoveredThirdTechnicalIndex, setHoveredThirdTechnicalIndex] = useState<number | null>(null);
  const [currentFourthTechnicalSlide, setCurrentFourthTechnicalSlide] = useState(0);
  const [hoveredFourthTechnicalIndex, setHoveredFourthTechnicalIndex] = useState<number | null>(null);

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

  // First technical slideshow effect
  useEffect(() => {
    if (hoveredFirstTechnicalIndex === null) {
      const interval = setInterval(() => {
        setCurrentFirstTechnicalSlide((prevSlide) => (prevSlide + 1) % firstTechnicalImages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [hoveredFirstTechnicalIndex, firstTechnicalImages.length]);

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

  const handleFirstTechnicalHover = (index: number) => {
    setHoveredFirstTechnicalIndex(index);
    setCurrentFirstTechnicalSlide(index);
  };

  const handleFirstTechnicalLeave = () => {
    setHoveredFirstTechnicalIndex(null);
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
    <>
      {/* SEO Head Section */}
      <Head>
        <title>KAIYI E5 - Premium Sedan | Sporty Efficiency | KAIYI UAE</title>
        <meta name="description" content="Discover the KAIYI E5 - a premium sedan with sporty efficiency and the power you need every day. Features 1.5T engine, 9-speed CVT, and advanced safety. Book your test drive today." />
        <meta name="keywords" content="KAIYI E5, KAIYI sedan, KAIYI E5 UAE, KAIYI E5 price, KAIYI E5 specs, KAIYI E5 test drive, KAIYI E5 2026, premium sedan, family car, 1.5T engine, CVT transmission" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="KAIYI E5 - Premium Sedan | Sporty Efficiency | KAIYI UAE" />
        <meta property="og:description" content="Discover the KAIYI E5 - a premium sedan with sporty efficiency and the power you need every day. Features 1.5T engine, 9-speed CVT, and advanced safety." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kaiyiglobal.com/upload/99/b95b13234541763b68eccb90303e65.png" />
        <meta property="og:url" content="https://kaiyi.ae/models/e5" />
        <meta property="og:site_name" content="KAIYI UAE" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KAIYI E5 - Premium Sedan | Sporty Efficiency | KAIYI UAE" />
        <meta name="twitter:description" content="Discover the KAIYI E5 - a premium sedan with sporty efficiency and the power you need every day." />
        <meta name="twitter:image" content="https://kaiyiglobal.com/upload/99/b95b13234541763b68eccb90303e65.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kaiyi.ae/models/e5" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>

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
          <source src="https://www.kaiyiglobal.com/upload/83/2975a039be563100dea10b3964df23.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-bruno-ace-sc">
              KAIYI E5
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t('models.e5.description')}
            </p>
            <div className="text-lg md:text-xl text-gray-300 space-y-2">
              <p>• Engine: 1.5T</p>
              <p>• Length: 4666 mm</p>
              <p>• Wheelbase: 2700 mm</p>
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
                alt={`KAIYI E5 in ${carColors[selectedColor].name}`}
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
                  <div className="text-2xl font-bold text-black mb-1">4666 mm</div>
                  <div className="text-sm text-gray-600 uppercase">Length</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">1825 mm</div>
                  <div className="text-sm text-gray-600 uppercase">Width</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">1484 mm</div>
                  <div className="text-sm text-gray-600 uppercase">Height</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">2700 mm</div>
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
              Ultimate Driving Experience
            </h2>
            <p className="text-base md:text-lg text-black">
              Stable and strong power, reacting rapidly and swerving precisely.
            </p>
          </div>
        </div>
      </div>
      
      {/* First Full Size Image Section */}
      <div className="w-full relative overflow-hidden h-64 md:h-screen">
        <Image
          src={firstSlideshowImages[0]}
          alt="KAIYI E5 Interior"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      
      {/* First Technical Features Section */}
      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Image container with overflow-hidden */}
            <div className="relative overflow-hidden mx-auto h-64 md:h-[700px]" style={{ width: '1634px', maxWidth: '100%' }}>
              {/* First Technical Images Slideshow */}
              <div className="relative w-full h-full">
                {firstTechnicalImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      currentFirstTechnicalSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`KAIYI E5 First Technical Feature ${index + 1}`}
                      width={1634}
                      height={700}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* First Technical Details Bar - Outside image container for mobile visibility */}
            <div className="mt-4 md:mt-0 md:absolute md:bottom-0 md:left-0 md:right-0 bg-gray-800/90 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6">
                {firstTechnicalDetails.map((detail, index) => (
                  <div
                    key={index}
                    className={`flex-1 text-center px-4 py-2 md:py-3 cursor-pointer transition-all duration-300 ${
                      hoveredFirstTechnicalIndex === index || currentFirstTechnicalSlide === index
                        ? 'text-white bg-white/20'
                        : 'text-gray-300 hover:text-white'
                    } ${index < firstTechnicalDetails.length - 1 ? 'border-r border-gray-600' : ''}`}
                    onMouseEnter={() => handleFirstTechnicalHover(index)}
                    onMouseLeave={handleFirstTechnicalLeave}
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
              Ultimate Comfort
            </h2>
            <p className="text-base md:text-lg text-black">
              Extra-large inner space, offering you an easeful ride.
            </p>
          </div>
        </div>
      </div>
      
      {/* Second Full Size Image Section */}
      <div className="w-full relative overflow-hidden h-64 md:h-screen">
        <Image
          src={secondSlideshowImages[0]}
          alt="KAIYI E5 Interior"
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
                      alt={`KAIYI E5 Second Technical Feature ${index + 1}`}
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
              Ultimate Technology
            </h2>
            <p className="text-base md:text-lg text-black">
              Diverse technological features combined with large screens, keeping information on screens visible at all times.
            </p>
          </div>
        </div>
      </div>
      
      {/* Third Full Size Image Section */}
      <div className="w-full relative overflow-hidden h-64 md:h-screen">
        <Image
          src={thirdSlideshowImages[0]}
          alt="KAIYI E5 Interior"
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
                      alt={`KAIYI E5 Third Technical Feature ${index + 1}`}
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
              Ultimate Vogue
            </h2>
            <p className="text-base md:text-lg text-black">
              Stylish and sporty appearance, showcasing the innovative sedan styling.
            </p>
          </div>
        </div>
      </div>
      
      {/* Fourth Full Size Image Section */}
      <div className="w-full relative overflow-hidden h-64 md:h-screen">
        <Image
          src={fourthSlideshowImages[0]}
          alt="KAIYI E5 Interior"
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
                      alt={`KAIYI E5 Fourth Technical Feature ${index + 1}`}
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
      
      {/* Brochure Download Popup */}
      <BrochureDownloadPopup
        isOpen={isBrochurePopupOpen}
        onClose={() => setIsBrochurePopupOpen(false)}
        modelName="KAIYI E5"
      />
      
      {/* Footer Component */}
      <Footer />
    </div>
    </>
  );
} 