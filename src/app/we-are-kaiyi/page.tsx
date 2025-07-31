'use client';

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function WeAreKaiyiPage() {
  const goToContact = () => {
    // Navigate to contact section or page
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Component */}
      <Navbar />
      
      <div className="wearekaiyi-section w-full bg-white pt-16">
        {/* Hero Section */}
        <div className="hero-section relative w-full min-h-screen overflow-hidden">
          <div className="hero-image w-full h-full">
            <Image
              src="https://www.kaiyiglobal.com/assets/wearekaiimg-59afc21d.jpg"
              alt="We Are Kaiyi"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="hero-title absolute left-[5vw] md:left-[10vw] top-[25vh] md:top-[30vh] text-white font-bruno-ace-sc text-[6vw] md:text-[4vw] z-10 drop-shadow-lg">
            We Are Kaiyi
          </div>
        </div>

        {/* Content Section */}
        <div className="content-section w-full flex justify-center items-center mt-[8vw] md:mt-[4vw] px-4">
          <div className="content-wrapper max-w-[900px]">
            <div className="content-title font-bruno-ace-sc text-[5vw] md:text-[2.5vw] text-[#222] text-center mb-[3vw] md:mb-[1vw]">
              We Are KAIYI
            </div>
            <div className="content-text text-[#444] text-[3.5vw] md:text-[1.1vw] leading-relaxed text-center space-y-[2vw] md:space-y-[0.5vw]">
              <p>We are Kind with a strong affinity to our users and global market.</p>
              <p>We are Active in your daily activities and explore ways to make you see the beauty.</p>
              <p>We are Innovative to give you a new definition of ownership experience.</p>
              <p>We are Young and the new power.</p>
              <p>We are Intelligent in respect of products characterized by constant technological innovation.</p>
              <p>But we are relentless in our pursuit of a more fulfilling lifestyle.</p>
            </div>
          </div>
        </div>

        {/* Cooperation Story Section */}
        <div className="cooperation-section mx-auto mt-[10vw] md:mt-[5vw] max-w-[1100px] px-4">
          <div className="section-title font-bruno-ace-sc text-[4vw] md:text-[2vw] text-[#222] text-center mb-[4vw] md:mb-[2vw]">
            KAIYI COOPERATION STORY
          </div>
          <div className="video-container flex justify-center">
            <div className="video-wrapper relative w-full md:w-[40vw] max-w-[600px]">
              <Image
                src="https://www.kaiyiglobal.com/assets/hom3-efad44ac.jpg"
                alt="Kaiyi Factory"
                width={600}
                height={400}
                className="w-full rounded-[2vw] md:rounded-[1vw]"
              />
            </div>
          </div>
          <div className="stats-content flex flex-col md:flex-row justify-between items-start mt-[4vw] md:mt-[2vw] space-y-[4vw] md:space-y-0">
            <div className="stats-grid grid grid-cols-2 md:flex gap-[4vw] md:gap-[2vw] w-full md:w-auto">
              <div className="stat-item text-center">
                <div className="stat-number text-[4vw] md:text-[2vw] text-[#dc0000] font-bold">2014</div>
                <div className="stat-label text-[2.5vw] md:text-[1vw] text-[#222]">Since</div>
              </div>
              <div className="stat-item text-center">
                <div className="stat-number text-[4vw] md:text-[2vw] text-[#dc0000] font-bold">4.727B</div>
                <div className="stat-label text-[2.5vw] md:text-[1vw] text-[#222]">Registered Capital (Yuan)</div>
              </div>
              <div className="stat-item text-center">
                <div className="stat-number text-[4vw] md:text-[2vw] text-[#dc0000] font-bold">2,800+</div>
                <div className="stat-label text-[2.5vw] md:text-[1vw] text-[#222]">Staff</div>
              </div>
              <div className="stat-item text-center">
                <div className="stat-number text-[4vw] md:text-[2vw] text-[#dc0000] font-bold">250,000</div>
                <div className="stat-label text-[2.5vw] md:text-[1vw] text-[#222]">Annual Capacity</div>
              </div>
            </div>
            <div className="story-text w-full md:flex-1 md:ml-[3vw] text-[3vw] md:text-[1vw] text-[#444] space-y-[2vw] md:space-y-[1vw]">
              <p>
                Kaiyi was established in January 2014, and it was originally a wholly-owned subsidiary of Chery Automobile Co.,Ltd. It is the only complete vehicle manufacturing enterprise in Sichuan Province with full qualifications of fuel and new energy for sedan, SUV and MPV.
              </p>
              <p>
                We are located in Yibin, Sichuan Province, with a registered capital of 4.727 billion yuan and more than 2,800 employees. Our factory was completed and put into production in December 2019, with an annual production capacity of 150,000 units, a maximum of 250,000 units.
              </p>
            </div>
          </div>
        </div>

        {/* Global Layout Section */}
        <div className="global-section mx-auto mt-[10vw] md:mt-[5vw] max-w-[900px] px-4">
          <div className="section-title font-bruno-ace-sc text-[4vw] md:text-[2vw] text-[#222] text-center mb-[3vw] md:mb-[1vw]">
            GLOBAL LAYOUT & DIVERSE TALENT BASE
          </div>
          <div className="section-content text-[#444] text-[3.5vw] md:text-[1.1vw] text-center mb-[4vw] md:mb-[2vw]">
            We have more than 500 dealers and 800 service providers around the world. Our user groups span across over 30 countries and regions including Eastern Europe, Middle East, Africa, Central and South America and Southeast Asia.
          </div>
          <div className="contact-button flex justify-center mb-[4vw] md:mb-[2vw]">
            <button
              onClick={goToContact}
              className="bg-gradient-to-b from-[#ebebeb] to-[#afb0b0] rounded-full px-[4vw] md:px-[2vw] py-[2vw] md:py-[0.8vw] text-[#222] text-[3vw] md:text-[1vw] cursor-pointer border border-[#ddd] transition-colors hover:bg-[#ececec]"
            >
              Contact Us
            </button>
          </div>
          
          {/* Legend Holding Image */}
          <div className="flex justify-center mb-[4vw] md:mb-[2vw]">
            <Image
              src="https://cdn.legendholding.com/images/cdn_688a15cd3575d9.32434529_20250730_125333.png"
              alt="Legend Holding"
              width={800}
              height={600}
              className="w-auto h-auto max-w-full"
            />
          </div>
        </div>

        {/* Smart Factory Section */}
        <div className="factory-section mx-auto mt-[10vw] md:mt-[5vw] max-w-[900px] px-4">
          <div className="section-title font-bruno-ace-sc text-[4vw] md:text-[2vw] text-[#222] text-center mb-[3vw] md:mb-[1vw]">
            KAIYI SMART FACTORY
          </div>
          <div className="section-content text-[#444] text-[3.5vw] md:text-[1.1vw] text-center mb-[4vw] md:mb-[2vw]">
            Located in Yibin City, Sichuan Province, China, our factory has the capacity to produce 150,000 vehicles annually, even with a maximum capacity of 250,000 units. We offer smart solutions with outstanding technology innovation and advanced manufacturing, providing users with more eco-friendly, efficient, and reliable solutions.
          </div>
          <div className="factory-video flex justify-center">
            <div className="video-wrapper relative w-full md:w-[40vw] max-w-[600px]">
              <Image
                src="https://www.kaiyiglobal.com/assets/hom3-efad44ac.jpg"
                alt="Smart Factory"
                width={600}
                height={400}
                className="w-full rounded-[2vw] md:rounded-[1vw]"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
} 