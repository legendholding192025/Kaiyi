'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BrochureDownloadPopup from '../../../components/BrochureDownloadPopup';

export default function X7Page() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [selectedColor, setSelectedColor] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBrochurePopupOpen, setIsBrochurePopupOpen] = useState(false);

  const carColors = [
    {
      name: "Dark Blue",
      hex: "#234265",
      image: "https://www.kaiyiglobal.com/upload/f2/853d818c9f0f392d8928e6a34a2a3d.png"
    },
    {
      name: "Light Gray",
      hex: "#DCDCDC",
      image: "https://www.kaiyiglobal.com/upload/7e/f66cded61bf8413ff7d4085735149f.png"
    },
    {
      name: "Black",
      hex: "#101010",
      image: "https://www.kaiyiglobal.com/upload/33/e7b4a90e8242c66df0c43c54b2fb92.png"
    },
    {
      name: "Gray",
      hex: "#737877",
      image: "https://www.kaiyiglobal.com/upload/fe/c1eac0db5dedc07aa80867f646a500.png"
    },
    {
      name: "Dark Gray",
      hex: "#373737",
      image: "https://www.kaiyiglobal.com/upload/98/2b87b9ac0d18611d9b4fc94f952384.png"
    },
    {
      name: "Purple",
      hex: "#342f60",
      image: "https://www.kaiyiglobal.com/upload/44/9043b11a4bf74cebfaa2222156d14f.png"
    }
  ];

  const slideshowImages = [
    "https://www.kaiyiglobal.com/upload/dc/42090eb88c6bc67dc715fa8c3ec1e0.jpg",
    "https://www.kaiyiglobal.com/upload/1e/c0209fcc53ad030100dd1aeb4820af.jpg"
  ];

  const secondSlideshowImages = [
    "https://www.kaiyiglobal.com/upload/5f/d0dfc8cf98ce9ce7686d62921469fb.jpg",
    "https://www.kaiyiglobal.com/upload/11/7779125a327b55d22ce3bb817466d5.jpg"
  ];

  const thirdSlideshowImages = [
    "https://www.kaiyiglobal.com/upload/25/3e72d3b60e6104ae2e4f5163f80028.jpg",
    "https://www.kaiyiglobal.com/upload/2c/9dafa67716ec0a37bc4b7b98423411.jpg",
    "https://www.kaiyiglobal.com/upload/ab/1069b22a62a5a08af32bf088cd79f0.jpg"
  ];

  const fourthSlideshowImages = [
    "https://www.kaiyiglobal.com/upload/f7/a845ec0520287b5b2d0ae6ab7f4dd5.jpg",
    "https://www.kaiyiglobal.com/upload/3f/f0f5efb3207a6b979af41dfa3b321d.jpg"
  ];

  const technicalImages = [
    "https://www.kaiyiglobal.com/upload/d9/c7d7e9cd4e334eb728217521143dce.png",
    "https://www.kaiyiglobal.com/upload/d4/365a9ae47e3ef20849fb66ae3e933e.png",
    "https://www.kaiyiglobal.com/upload/e4/297f99c8facce5df1e7480403ba288.png",
    "https://www.kaiyiglobal.com/upload/83/c913c44dd57b70dd96a5bd65a213e8.png"
  ];

  const secondTechnicalImages = [
    "https://www.kaiyiglobal.com/upload/60/f0bbe3244e71b5d5a5c97f72c5b03c.png",
    "https://www.kaiyiglobal.com/upload/fd/43e78b28495503b4903737c6ae5d82.png",
    "https://www.kaiyiglobal.com/upload/99/4a002c29a4f8545ec127ad1055dd66.png",
    "https://www.kaiyiglobal.com/upload/56/f1148449870472d03b977f3f0be874.png"
  ];

  const thirdTechnicalImages = [
    "https://www.kaiyiglobal.com/upload/8a/4ae214f49ab101463d394d38a6b839.png",
    "https://www.kaiyiglobal.com/upload/fa/29e7691737b7b2bbc5b0cc81e07f8b.png",
    "https://www.kaiyiglobal.com/upload/2b/58b44e050e56ad2b1d014ca1b89fc4.png",
    "https://www.kaiyiglobal.com/upload/42/dd7e40031a42635fb3cc5fd6f821a3.png"
  ];

  const fourthTechnicalImages = [
    "https://www.kaiyiglobal.com/upload/5a/85bb86c3429544cf7d32147a9436bb.png",
    "https://www.kaiyiglobal.com/upload/0b/d335b43b05f4bba9d8c6d20e4b7a05.png",
    "https://www.kaiyiglobal.com/upload/0b/a36f8c1d63a542e0e50e7200c5ae3c.png",
    "https://www.kaiyiglobal.com/upload/7f/ced6a1837544ca9b76f2c811a5c221.png"
  ];

  const technicalDetails = [
    "Kunpeng Power 2.0T/ 1.6T",
    "7-Speed Wet Type DCT Transmission",
    "Suspension Comfort Optimization Adjustment",
    "Intelligent Timely Four-wheel Drive"
  ];

  const secondTechnicalDetails = [
    "All-New Sporty Flowing Front Design",
    "Sporty Tail Spoiler",
    "R20 Tires (255 mm width)",
    "5+2 Seats Space Design"
  ];

  const thirdTechnicalDetails = [
    "D-Type Multi-Functional Steering Wheel",
    "Head Airbags (Air curtain)",
    "Panoramic Sunroof",
    "Cowin Smart Voice System"
  ];

  const fourthTechnicalDetails = [
    "14.6 Inches Central Control LCD Screen With Interconnection Of Mobile Phone",
    "540° Panoramic Camera",
    "Wireless Charging",
    "Intelligence High Beam Control"
  ];

  const [currentTechnicalSlide, setCurrentTechnicalSlide] = useState(0);
  const [hoveredTechnicalIndex, setHoveredTechnicalIndex] = useState<number | null>(null);
  const [currentSecondSlide, setCurrentSecondSlide] = useState(0);
  const [currentSecondTechnicalSlide, setCurrentSecondTechnicalSlide] = useState(0);
  const [hoveredSecondTechnicalIndex, setHoveredSecondTechnicalIndex] = useState<number | null>(null);
  const [currentThirdSlide, setCurrentThirdSlide] = useState(0);
  const [currentThirdTechnicalSlide, setCurrentThirdTechnicalSlide] = useState(0);
  const [hoveredThirdTechnicalIndex, setHoveredThirdTechnicalIndex] = useState<number | null>(null);
  const [currentFourthSlide, setCurrentFourthSlide] = useState(0);
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

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideshowImages.length]);

  // Technical slideshow effect
  useEffect(() => {
    if (hoveredTechnicalIndex === null) {
      const interval = setInterval(() => {
        setCurrentTechnicalSlide((prevSlide) => (prevSlide + 1) % technicalImages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [hoveredTechnicalIndex, technicalImages.length]);

  // Second slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSecondSlide((prevSlide) => (prevSlide + 1) % secondSlideshowImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [secondSlideshowImages.length]);

  // Second technical slideshow effect
  useEffect(() => {
    if (hoveredSecondTechnicalIndex === null) {
      const interval = setInterval(() => {
        setCurrentSecondTechnicalSlide((prevSlide) => (prevSlide + 1) % secondTechnicalImages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [hoveredSecondTechnicalIndex, secondTechnicalImages.length]);

  // Third slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThirdSlide((prevSlide) => (prevSlide + 1) % thirdSlideshowImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [thirdSlideshowImages.length]);

  // Third technical slideshow effect
  useEffect(() => {
    if (hoveredThirdTechnicalIndex === null) {
      const interval = setInterval(() => {
        setCurrentThirdTechnicalSlide((prevSlide) => (prevSlide + 1) % thirdTechnicalImages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [hoveredThirdTechnicalIndex, thirdTechnicalImages.length]);

  // Fourth slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFourthSlide((prevSlide) => (prevSlide + 1) % fourthSlideshowImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [fourthSlideshowImages.length]);

  // Fourth technical slideshow effect
  useEffect(() => {
    if (hoveredFourthTechnicalIndex === null) {
      const interval = setInterval(() => {
        setCurrentFourthTechnicalSlide((prevSlide) => (prevSlide + 1) % fourthTechnicalImages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [hoveredFourthTechnicalIndex, fourthTechnicalImages.length]);

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
          <source src="https://www.kaiyiglobal.com/upload/e3/132f226f438795a5df78b2afef0094.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-bruno-ace-sc">
              KAIYI X7
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Homelike Mobile Space
            </p>
            <div className="text-lg md:text-xl text-gray-300 space-y-2">
              <p>• Engine: 1.6T/ 2.0T</p>
              <p>• Length: 4710 mm</p>
              <p>• Wheelbase: 2800 mm</p>
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
                alt={`KAIYI X7 in ${carColors[selectedColor].name}`}
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
                  <div className="text-2xl font-bold text-black mb-1">4710 mm</div>
                  <div className="text-sm text-gray-600 uppercase">Length</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">1955 mm</div>
                  <div className="text-sm text-gray-600 uppercase">Width</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">1705 mm</div>
                  <div className="text-sm text-gray-600 uppercase">Height</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">2800 mm</div>
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
            
            {/* Tagline */}
            <div className="flex-1 text-center">
              <h2 className="text-2xl font-bold text-black mb-2 font-bruno-ace-sc">
                KUNPENG POWER, PASSIONATELY DRIVE
              </h2>
              <p className="text-base text-gray-600">
                Whenever and wherever, the strong power is always ready for your trip.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full Size Image Section */}
      <div className="w-full relative overflow-hidden h-64 md:h-screen">
        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`KAIYI X7 Interior ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
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
                      alt={`KAIYI X7 Technical Feature ${index + 1}`}
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
              BROAD BODY, SPORTY AND HI-TECH STYLE
            </h2>
            <p className="text-base md:text-lg text-black">
              Master level exterior design, rendering a sharp and stylish road companion.
            </p>
          </div>
        </div>
      </div>
      
      {/* Second Full Size Image Section */}
      <div className="w-full relative overflow-hidden h-64 md:h-screen">
        {secondSlideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSecondSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`KAIYI X7 Interior ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {secondSlideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSecondSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSecondSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
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
                      alt={`KAIYI X7 Second Technical Feature ${index + 1}`}
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
              COMFORTABLE SPACE, ENJOY WONDERFUL LIFE
            </h2>
            <p className="text-base md:text-lg text-black">
              Create flagship spatial experience for the driver and passengers.
            </p>
          </div>
        </div>
      </div>
      
      {/* Third Full Size Image Section */}
      <div className="w-full relative overflow-hidden h-64 md:h-screen">
        {thirdSlideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentThirdSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`KAIYI X7 Interior ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {thirdSlideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentThirdSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentThirdSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
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
                      alt={`KAIYI X7 Third Technical Feature ${index + 1}`}
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
              LINKAGE BETWEEN SCREENS, TECHNICAL SECURITY GUARD
            </h2>
            <p className="text-base md:text-lg text-black">
              Multiple driver assistance, optimizing responses over the different terrain automatically.
            </p>
          </div>
        </div>
      </div>
      
      {/* Fourth Full Size Image Section */}
      <div className="w-full relative overflow-hidden h-64 md:h-screen">
        {fourthSlideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentFourthSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`KAIYI X7 Interior ${index + 1}`}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {fourthSlideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFourthSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentFourthSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
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
                      alt={`KAIYI X7 Fourth Technical Feature ${index + 1}`}
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
        modelName="KAIYI X7"
      />
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
} 