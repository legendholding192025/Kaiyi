'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CustomerSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        /* Custom scrollbar styles */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #000000;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #333333;
        }
        
        /* Firefox scrollbar */
        * {
          scrollbar-width: thin;
          scrollbar-color: #000000 #f1f1f1;
        }
      `}</style>
      
      <Navbar />
      
             {/* Hero Banner */}
       <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 py-48">
         <div className="absolute inset-0 bg-black opacity-60"></div>
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                       <h1 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-widest uppercase">
              CUSTOMER SUPPORT
            </h1>
         </div>
       </div>

      {/* Customer Support Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-medium text-black mb-8 tracking-widest uppercase">
               CUSTOMER SUPPORT
             </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              We are committed to providing you with the highest quality service, meeting your personalized needs, effectively improving your driving experience, and restoring your vehicle to its optimal condition in the shortest possible time. Based on the condition of your vehicle, we provide you with high-quality maintenance, repair and spare parts services. Our high-quality and sincere service accompanies you throughout the journey, providing you with 24/7 responsive customer service support and bringing you a worry-free driving experience.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance and After-Sale Service Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
                         <h2 className="text-3xl md:text-4xl font-medium text-black tracking-widest uppercase">
               MAINTENANCE AND AFTER-SALE SERVICE
             </h2>
          </div>
        </div>
      </section>

      {/* Professional Service Network Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Heading */}
            <div>
                             <h2 className="text-3xl md:text-4xl font-medium text-black tracking-widest uppercase">
                 <div>PROFESSIONAL SERVICE</div>
                 <div className="text-4xl md:text-5xl">NETWORK</div>
               </h2>
            </div>
            
            {/* Right Column - Content */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Kaiyi boasts a network of professional service dealers across countries worldwide, including Russia, Chile, Peru and Italy. With the support of a comprehensive training program, complete technical materials and a professional technical team, Kaiyi ensures that all service dealers have a comprehensive understanding of customer's vehicles and offer customers the highest level of after-sales service support.
              </p>
            </div>
          </div>
                 </div>
       </section>

               {/* Kaiyi Image Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <img
                src="https://www.kaiyiglobal.com/assets/kaiyi99-b7ef4e4a.jpg"
                alt="Kaiyi Global"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Genuine Spare Parts Section */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-black mb-8 tracking-widest uppercase">
                  GENUINE SPARE PARTS
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  In markets, customers can find complete and comprehensive genuine spare parts from Kaiyi authorized service dealers; these genuine spare parts will perfectly match your vehicle, ensuring that your vehicle can smoothly recover to its optimal condition in a short period of time. We will always deliver fast, efficient, and cost-effective parts to Kaiyi customers.
                </p>
              </div>
              
              {/* Right Column - Image */}
              <div className="flex justify-center">
                <img
                  src="https://www.kaiyiglobal.com/assets/kaiyiimg21-4cce8dcf.png"
                  alt="Kaiyi EV Chassis and Genuine Spare Parts"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Genuine Spare Parts Section - Duplicate */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-black mb-8 tracking-widest uppercase">
                  Warranty Service
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed text-justify">
                  The warranty is a reflection of Kaiyi Automobile's confidence in product quality and commitment to its customers. All Kaiyi vehicles are supported by a standard vehicle warranty policy, which ensures that each new vehicle is manufactured to the manufacturer's highest standards and inspected before delivery.
                </p>
              </div>
              
              {/* Right Column - Image */}
              <div className="flex justify-center">
                <img
                  src="https://www.kaiyiglobal.com/assets/kaiyiimg22-890b8fa7.png"
                  alt="Kaiyi EV Chassis and Genuine Spare Parts"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
       
       <Footer />
    </div>
  );
} 