'use client';

import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function WarrantyPage() {
  // SEO Structured Data for Warranty Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "KAIYI Warranty Service",
    "description": "Comprehensive warranty coverage for KAIYI vehicles including 5-year complete vehicle warranty, 3-year parts warranty, and special engine parts coverage up to 120 months/1,000,000 km.",
    "provider": {
      "@type": "Organization",
      "name": "KAIYI International",
      "url": "https://kaiyi.ae"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "serviceType": "Warranty Service",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://kaiyi.ae/warranty"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      {/* SEO Head Section */}
      <Head>
        <title>KAIYI Warranty | Comprehensive Coverage | 5-Year Warranty | KAIYI UAE</title>
        <meta name="description" content="KAIYI comprehensive warranty coverage includes 5-year complete vehicle warranty, 3-year parts warranty, and special engine parts coverage. Get peace of mind with KAIYI UAE." />
        <meta name="keywords" content="KAIYI warranty, KAIYI UAE warranty, car warranty UAE, KAIYI warranty coverage, 5-year warranty, vehicle warranty, parts warranty, engine warranty, KAIYI service" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="KAIYI Warranty | Comprehensive Coverage | 5-Year Warranty | KAIYI UAE" />
        <meta property="og:description" content="KAIYI comprehensive warranty coverage includes 5-year complete vehicle warranty, 3-year parts warranty, and special engine parts coverage." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cdn.legendholding.com/images/cdn_68947e6c590e79.53045565_20250807_102236.jpg" />
        <meta property="og:url" content="https://kaiyi.ae/warranty" />
        <meta property="og:site_name" content="KAIYI UAE" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KAIYI Warranty | Comprehensive Coverage | 5-Year Warranty | KAIYI UAE" />
        <meta name="twitter:description" content="KAIYI comprehensive warranty coverage includes 5-year complete vehicle warranty and special engine parts coverage." />
        <meta name="twitter:image" content="https://cdn.legendholding.com/images/cdn_68947e6c590e79.53045565_20250807_102236.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kaiyi.ae/warranty" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
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
    </>
  );
} 