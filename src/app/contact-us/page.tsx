'use client';

import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ContactPage() {
  // SEO Structured Data for Contact Information
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact KAIYI UAE",
    "description": "Get in touch with KAIYI UAE for inquiries about our premium vehicles, test drives, service, and support.",
    "url": "https://kaiyi.ae/contact-us",
    "mainEntity": {
      "@type": "Organization",
      "name": "KAIYI International",
      "url": "https://kaiyi.ae",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "UAE",
        "availableLanguage": ["English", "Arabic"]
      }
    }
  };

  return (
    <>
      {/* SEO Head Section */}
      <Head>
        <title>Contact KAIYI UAE | Get in Touch | Customer Support | KAIYI International</title>
        <meta name="description" content="Contact KAIYI UAE for inquiries about our premium vehicles, test drives, service, and support. Get in touch with our customer service team today." />
        <meta name="keywords" content="contact KAIYI UAE, KAIYI contact, KAIYI customer service, KAIYI support, KAIYI inquiry, KAIYI UAE contact, car dealership contact UAE" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact KAIYI UAE | Get in Touch | Customer Support | KAIYI International" />
        <meta property="og:description" content="Contact KAIYI UAE for inquiries about our premium vehicles, test drives, service, and support." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cdn.legendholding.com/images/cdn_68947e6c590e79.53045565_20250807_102236.jpg" />
        <meta property="og:url" content="https://kaiyi.ae/contact-us" />
        <meta property="og:site_name" content="KAIYI UAE" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact KAIYI UAE | Get in Touch | Customer Support | KAIYI International" />
        <meta name="twitter:description" content="Contact KAIYI UAE for inquiries about our premium vehicles, test drives, and support." />
        <meta name="twitter:image" content="https://cdn.legendholding.com/images/cdn_68947e6c590e79.53045565_20250807_102236.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kaiyi.ae/contact-us" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>

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

        {/* We're Here for You Section */}
        <section 
          className="relative text-white py-32 px-4 text-center min-h-[80vh] flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.legendholding.com/images/cdn_689344d73e9e57.73056438_20250806_120439.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">We&apos;re Here for You</h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            At Kaiyi, we value our customers and are committed to providing exceptional service. Contact us with any inquiries about our
            vehicles, services, or support. Your satisfaction is our priority.
          </p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                         {/* Showroom */}
             <div className="flex flex-col items-center">
               <svg className="w-12 h-12 text-black mb-4" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
               </svg>
               <h3 className="text-xl font-semibold text-gray-800 mb-2">Showroom # S02</h3>
               <p className="text-gray-600">787M+3WWW - Al Ittihad Rd - Al Khabaisi - Dubai</p>
             </div>

             {/* Phone */}
             <div className="flex flex-col items-center">
               <svg className="w-12 h-12 text-black mb-4" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
               </svg>
               <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
               <p className="text-gray-600">800 - KAIYI</p>
             </div>

             {/* Email */}
             <div className="flex flex-col items-center">
               <svg className="w-12 h-12 text-black mb-4" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
               </svg>
               <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
               <p className="text-gray-600">sales@kaiyi.ae</p>
             </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Find Us</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9999999999995!2d55.3347887!3d25.2627088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d8e6bbddd23%3A0x6d7bf97df8b3220e!2sKaiyi%20Automobile%20-%20Legend%20Motors!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kaiyi Automobile - Legend Motors Location"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
} 