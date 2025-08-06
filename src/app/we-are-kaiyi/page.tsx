'use client';

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function WeAreKaiyiPage() {

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
          <div className="hero-title absolute left-[5vw] md:left-[10vw] top-[35vh] md:top-[30vh] text-white font-bruno-ace-sc text-[8vw] md:text-[4vw] z-10 drop-shadow-lg">
            We Are Kaiyi
          </div>
        </div>

        {/* Content Section */}
        <div className="cooperation-section mx-auto mt-[12vw] md:mt-[5vw] max-w-[1100px] px-4">
          <div className="section-title font-bruno-ace-sc text-[5vw] md:text-[2vw] text-[#222] text-center mb-[6vw] md:mb-[2vw]">
            We are Kaiyi
          </div>
          <div className="video-container flex justify-center">
          </div>
          <div className="stats-content flex flex-col md:flex-row justify-between items-start mt-[6vw] md:mt-[2vw] space-y-[6vw] md:space-y-0">
            <div className="stats-grid flex justify-center md:justify-start gap-[6vw] md:gap-[2vw] w-full md:w-auto">
              <div className="stat-item text-center">
                <div className="stat-number text-[6vw] md:text-[2vw] text-[#dc0000] font-bold">2024</div>
                <div className="stat-label text-[3.5vw] md:text-[1vw] text-[#222]">Since</div>
              </div>
              {/* <div className="stat-item text-center">
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
              </div> */}
            </div>
            <div className="story-text w-full md:flex-1 md:ml-[3vw] text-[4vw] md:text-[1vw] text-[#444] space-y-[3vw] md:space-y-[1vw] leading-relaxed">
              <p>
              Kaiyi UAE, part of Legend Holding Group, serves as the exclusive dealership of Kaiyi vehicles in the United Arab Emirates. Committed to deliver maximum innovation and customer satisfaction, we offer a dynamic range of technologically advanced vehicles designed to elevate your driving experience, in line with Kaiyi Auto Manufacturer. 
              Strategically located in the heart of Dubai, our Showroom facility delivers comprehensive sales and after-sales services, ensuring convenience, trust, and excellence at every step. At Kaiyi UAE, we don&apos;t just sell cars. We drive the future together forward.
              </p>
            </div>
          </div>
        </div>

        {/* Cooperation Story Section */}
        <div className="cooperation-section mx-auto mt-[12vw] md:mt-[5vw] max-w-[1100px] px-4">
          <div className="section-title font-bruno-ace-sc text-[5vw] md:text-[2vw] text-[#222] text-center mb-[6vw] md:mb-[2vw]">
            KAIYI COOPERATION STORY
          </div>
          <div className="video-container flex justify-center">
            <div className="video-wrapper relative w-full md:w-[40vw] max-w-[600px]">
              <Image
                src="https://cdn.legendholding.com/images/cdn_68934ccb8dcf25.67672295_20250806_123835.jpg"
                alt="Kaiyi Factory"
                width={600}
                height={400}
                className="w-full rounded-[2vw] md:rounded-[1vw]"
              />
            </div>
          </div>
          <div className="stats-content flex flex-col md:flex-row justify-between items-start mt-[6vw] md:mt-[2vw] space-y-[6vw] md:space-y-0">
            <div className="stats-grid flex justify-center md:justify-start gap-[6vw] md:gap-[2vw] w-full md:w-auto">
              <div className="stat-item text-center">
                <div className="stat-number text-[6vw] md:text-[2vw] text-[#dc0000] font-bold">2014</div>
                <div className="stat-label text-[3.5vw] md:text-[1vw] text-[#222]">Since</div>
              </div>
              {/* <div className="stat-item text-center">
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
              </div> */}
            </div>
            <div className="story-text w-full md:flex-1 md:ml-[3vw] text-[4vw] md:text-[1vw] text-[#444] space-y-[3vw] md:space-y-[1vw] leading-relaxed">
              <p>
                Kaiyi was established in January 2014, and it was originally a wholly-owned subsidiary of Chery Automobile Co.,Ltd. It is the only complete vehicle manufacturing enterprise in Sichuan Province with full qualifications of fuel and new energy for sedan, SUV and MPV.
              </p>
              <p>
                We are located in Yibin, Sichuan Province, with a registered capital of 4.727 billion yuan and more than 2,800 employees. Our factory was completed and put into production in December 2019, with an annual production capacity of 150,000 units, a maximum of 250,000 units.
              </p>
            </div>
          </div>
        </div>

        {/* Smart Factory Section */}
        <div className="factory-section mx-auto mt-[12vw] md:mt-[5vw] max-w-[900px] px-4">
          <div className="section-title font-bruno-ace-sc text-[5vw] md:text-[2vw] text-[#222] text-center mb-[6vw] md:mb-[1vw]">
            KAIYI SMART FACTORY
          </div>
          <div className="section-content text-[#444] text-[4.5vw] md:text-[1.1vw] text-center mb-[6vw] md:mb-[2vw] leading-relaxed">
            Located in Yibin City, Sichuan Province, China, our factory has the capacity to produce 150,000 vehicles annually, even with a maximum capacity of 250,000 units. We offer smart solutions with outstanding technology innovation and advanced manufacturing, providing users with more eco-friendly, efficient, and reliable solutions.
          </div>
          {/* <div className="factory-video flex justify-center">
            <div className="video-wrapper relative w-full md:w-[40vw] max-w-[600px]">
              <Image
                src="https://www.kaiyiglobal.com/assets/hom3-efad44ac.jpg"
                alt="Smart Factory"
                width={600}
                height={400}
                className="w-full rounded-[2vw] md:rounded-[1vw]"
              />
            </div>
          </div> */}
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
} 