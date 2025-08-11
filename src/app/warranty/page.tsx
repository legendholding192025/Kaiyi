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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              <span className="text-red-600">*</span> Warranty
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Details</th>
                    <th className="px-6 py-4 text-left font-semibold">Part Name and Details</th>
                    <th className="px-6 py-4 text-left font-semibold">Warranty Period</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Complete Vehicle */}
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-800">
                      Complete Vehicle
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      The whole vehicle and several unspecified parts
                    </td>
                    <td className="px-6 py-4 font-semibold text-blue-600">
                      5 years / 150,000 km
                    </td>
                  </tr>

                  {/* Other Parts */}
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-800">
                      Other Parts
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      Shock Absorber, Shock Absorber Rubber, Shock Absorber Dust Cover, Absorber Spring, Oil Seal, Horn, Ball Head, Steering Connection Lever, Water Pump, Brake Disc/Drum, Wheel Hub Bearing, Air Conditioning Fan, Glass Lifter, Cooling Fan, Sensors, Steering Rod Ball Head, Clutch Plate, Belt Tensioner, Belt, Catalytic Convertor, Oxygen Sensor, Injector
                    </td>
                    <td className="px-6 py-4 font-semibold text-green-600">
                      3 years / 60,000 km
                    </td>
                  </tr>

                  {/* Vulnerable and Consumable Parts */}
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-800">
                      Vulnerable and Consumable Parts
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      Spark Plugs, Clutch Disc, Brake Pads/Shoe, Wiper Blade, Battery
                    </td>
                    <td className="px-6 py-4 font-semibold text-yellow-600">
                      3 months / 5,000 km
                    </td>
                  </tr>

                  {/* Other Details */}
                  <tr>
                    <td className="px-6 py-4 bg-gray-50 font-semibold text-gray-800">
                      Other Details
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      Glass, Light Bulb, Tire, Air Filter, Oil Filter, Fuel Filter, Air Conditioning Filter, Fuse, Relay, Oil, Coolant, Air Conditioning Refrigerant
                    </td>
                    <td className="px-6 py-4 font-semibold text-red-600">
                      Not Covered under Warranty
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Special Parts List Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Special Parts List Covered by the Policy
            </h2>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-6 py-4 text-left font-semibold">No</th>
                    <th className="px-6 py-4 text-left font-semibold">Part Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Warranty Period (Months/KM)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">1</td>
                    <td className="px-6 py-4 text-gray-600">Cylinder Block</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">2</td>
                    <td className="px-6 py-4 text-gray-600">Crankshaft</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">3</td>
                    <td className="px-6 py-4 text-gray-600">Intake and Exhaust Camshaft</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">4</td>
                    <td className="px-6 py-4 text-gray-600">Cylinder Head</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">5</td>
                    <td className="px-6 py-4 text-gray-600">Intake Valve</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">6</td>
                    <td className="px-6 py-4 text-gray-600">Exhaust Valve</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">7</td>
                    <td className="px-6 py-4 text-gray-600">Seat Ring-Intake Valve</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">8</td>
                    <td className="px-6 py-4 text-gray-600">Valve Spring</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">9</td>
                    <td className="px-6 py-4 text-gray-600">Gasket-Valve Spring</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">10</td>
                    <td className="px-6 py-4 text-gray-600">Seat-Valve Spring</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">11</td>
                    <td className="px-6 py-4 text-gray-600">Seat Ring-Exhaust Valve</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">12</td>
                    <td className="px-6 py-4 text-gray-600">Valve Rocker</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">13</td>
                    <td className="px-6 py-4 text-gray-600">Tappet</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">14</td>
                    <td className="px-6 py-4 text-gray-600">Guide Pipe-Air Valve</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">15</td>
                    <td className="px-6 py-4 text-gray-600">Valve Lock Clip</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">16</td>
                    <td className="px-6 py-4 text-gray-600">Piston Set</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">17</td>
                    <td className="px-6 py-4 text-gray-600">Piston Ring</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">18</td>
                    <td className="px-6 py-4 text-gray-600">Piston Pin</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">19</td>
                    <td className="px-6 py-4 text-gray-600">Connecting Rod</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">20</td>
                    <td className="px-6 py-4 text-gray-600">Exhaust Manifold</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">21</td>
                    <td className="px-6 py-4 text-gray-600">Oil Collector</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">22</td>
                    <td className="px-6 py-4 text-gray-600">Intake Manifold</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">23</td>
                    <td className="px-6 py-4 text-gray-600">Oil Pan</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">24</td>
                    <td className="px-6 py-4 text-gray-600">Crankshaft Bearing</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">25</td>
                    <td className="px-6 py-4 text-gray-600">Exhaust Manifold Heat Shield</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">26</td>
                    <td className="px-6 py-4 text-gray-600">Crankshaft Pulley</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">27</td>
                    <td className="px-6 py-4 text-gray-600">Heat Insulation Cover-Supercharger</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-center font-semibold text-gray-800">28</td>
                    <td className="px-6 py-4 text-gray-600">Rod-Oil Level Gauge</td>
                    <td className="px-6 py-4 font-semibold text-blue-600">120/1000000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-right text-gray-600">
            <p className="text-sm">After-sales department of Kaiyi International</p>
            <p className="text-sm">July 22, 2025</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 