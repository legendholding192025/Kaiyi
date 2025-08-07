'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function WarrantyPage() {
  return (
    <div className="min-h-screen flex flex-col">
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

      {/* Hero Section with Car Interior */}
      <section 
        className="relative text-white py-32 px-4 text-center min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.legendholding.com/images/cdn_68947e6c590e79.53045565_20250807_102236.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Warranty</h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Comprehensive coverage for your peace of mind
          </p>
        </div>
      </section>

      {/* Warranty Information Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="text-red-600">*</span> Warranty
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {/* Complete Vehicle */}
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-800 w-1/3">
                      Complete Vehicle
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <div className="mb-2">
                        The whole vehicle and several unspecified parts shock Absorber, Shock Absorber Rubber, Shock Absorber Dust Cover, Absorber Spring, Oil Seal, Horn, Ball Head, Steering Connection Lever, Water Pump, Brake Disc/ Drum, Wheel Hub Bearing, Air Conditioning Fan, Glass Lifter, Cooling Fan, Sensons, Steering Rod Ball Head, Clutch Plate, Belt Tensioner, Belt, Catalytic Convertor, Oxygen Sensor, Injector
                      </div>
                      <div className="font-semibold text-blue-600">
                        10 years / 1,000,000 KM
                      </div>
                    </td>
                  </tr>

                  {/* Other Parts */}
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-800 w-1/3">
                      Other Parts
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <div className="mb-2">
                        Shock Absorber, Shock Absorber Rubber, Shock Absorber Dust Cover, Absorber Spring, Oil Seal, Horn, Ball Head, Steering Connection Lever, Water Pump, Brake Disc/ Drum, Wheel Hub Bearing, Air Conditioning Fan, Glass Lifter, Cooling Fan, Sensons, Steering Rod Ball Head, Clutch Plate, Belt Tensioner, Belt, Catalytic Convertor, Oxygen Sensor, Injector
                      </div>
                      <div className="font-semibold text-green-600">
                        2 years / 40,000 KM
                      </div>
                    </td>
                  </tr>

                  {/* Vulnerable and Consumable Parts */}
                  {/* <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-800 w-1/3">
                      Vulnerable and Consumable Parts
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <div className="mb-2">
                        Spark Plugs, Clutch Disc, Brake Pads/ Shoe, Wiper Blade, Battery
                      </div>
                      <div className="font-semibold text-yellow-600">
                        3 Months / 5000 km
                      </div>
                    </td>
                  </tr> */}

                  {/* Other Details */}
                  <tr>
                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-800 w-1/3">
                      Other Details
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <div className="mb-2">
                        Glass, Light Bulb, Tire, Air Filter, Oil Filter, Fuel Filter, Air Conditioning filter, Fuse, Relay, Oil, Coolant, Air Conditioning Refrigerant
                      </div>
                      <div className="font-semibold text-red-600">
                        Not Cover Under Warranty
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 