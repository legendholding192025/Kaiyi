'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SuccessPopup from '../../components/SuccessPopup';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  carModel: string;
  numberPlate: string;
}

export default function ServiceBookingPage() {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    carModel: '',
    numberPlate: ''
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const carModels = [
    { id: 1, name: "KAIYI X7" },
    { id: 2, name: "KAIYI X3 Pro" },
    { id: 3, name: "KAIYI E5" }
  ];



  const handleInputChange = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      // Validate required fields
      if (!form.fullName || !form.phone || !form.email || !form.carModel || !form.numberPlate) {
        alert('Please fill in all required fields');
        return;
      }

      // Validate phone number (must be exactly 9 digits)
      if (!/^\d{9}$/.test(form.phone)) {
        alert('Phone number must be exactly 9 digits');
        return;
      }

      // Import the API function
      const { submitServiceBooking } = await import('@/lib/api');
      
      const result = await submitServiceBooking({
        full_name: form.fullName,
        phone: `+971${form.phone}`,
        email: form.email,
        car_model: form.carModel,
        number_plate: form.numberPlate
      });

      if (result.success) {
        setShowSuccessPopup(true);
        setForm({
          fullName: '',
          phone: '',
          email: '',
          carModel: '',
          numberPlate: ''
        });
      } else {
        alert('Error submitting form. Please try again.');
        console.error('Form submission error:', result.error);
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      alert('Error submitting form. Please try again.');
    }
  };

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
      
             {/* Hero Section */}
       <section 
         className="relative text-white py-32 px-4 text-center min-h-[80vh] flex items-center justify-center overflow-hidden"
         style={{
           background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.legendholding.com/images/cdn_68934909c669f0.07959011_20250806_122233.jpg')`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           backgroundAttachment: 'fixed'
         }}
       >
         {/* Content */}
         <div className="relative z-10 max-w-4xl mx-auto">
           <h1 className="text-5xl md:text-7xl font-bold mb-8">
             <span className="text-white-600">SERVICE</span>
             <span className="text-white"> BOOKING</span>
           </h1>
           <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
             At Kaiyi, we understand the importance of keeping your vehicle in top condition. Our service booking process is designed for your convenience, ensuring a seamless experience from scheduling to completion. Trust our certified technicians and state-of-the-art facilities to provide the best care for your Kaiyi.
           </p>
         </div>
       </section>

       {/* Main Content Section */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
           {/* Left Side - Service Center Info */}
           <div className="space-y-8">
             {/* Service Center Image */}
             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
               <Image
                 src="https://cdn.legendholding.com/images/cloudinary_688c79962032e3.30736361_20250801_082350.jpg"
                 alt="Kaiyi Service Center"
                 width={800}
                 height={320}
                 className="w-full h-80 object-cover"
               />
             </div>

             {/* Contact Information */}
             <div className="bg-white rounded-xl shadow-lg p-6">
               <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
               <div className="space-y-4">
                 <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                   <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                   </svg>
                   <div>
                     <p className="text-sm font-medium text-gray-600">Email</p>
                     <p className="text-lg font-semibold text-gray-800">Service@kaiyi.ae</p>
                   </div>
                 </div>
                 <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                   <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                   </svg>
                   <div>
                     <p className="text-sm font-medium text-gray-600">Address</p>
                     <p className="text-lg font-semibold text-gray-800">Plot 59, 22nd St, Al Quoz Industrial Area 2, Dubai</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Google Maps */}
             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
               <div className="p-6 border-b border-gray-200">
                 <h3 className="text-2xl font-bold text-gray-800">Our Service Center Location</h3>
               </div>
               <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.9999999999995!2d55.2455193!3d25.1291623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f696fe56cf769%3A0xf798a999ce6259d2!2sLegend%20World%20Automobile%20Services%20L.L.C%20-%20Luxury%20Car%20Repair%20%26%20Service%20Garage%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                 width="100%"
                 height="300"
                 style={{ border: 0 }}
                 allowFullScreen={true}
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Legend World Automobile Services - Dubai"
               ></iframe>
             </div>
           </div>

           {/* Right Side - Service Booking Form */}
           <div className="bg-white rounded-xl shadow-lg p-8">
             <div className="mb-8">
               <h2 className="text-3xl font-bold text-gray-800 mb-2">Book Your Service</h2>
               <p className="text-gray-600">Fill out the form below to schedule your service appointment</p>
             </div>
             
             <form className="space-y-6">
               {/* Full Name */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                 <input
                   type="text"
                   value={form.fullName}
                   onChange={(e) => handleInputChange('fullName', e.target.value)}
                   placeholder="Please enter your name"
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-500"
                 />
               </div>

               {/* Phone */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                 <div className="relative">
                   <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium z-10">
                     +971
                   </div>
                   <input
                     type="tel"
                     value={form.phone}
                     onChange={(e) => {
                       const value = e.target.value.replace(/\D/g, '').slice(0, 9);
                       handleInputChange('phone', value);
                     }}
                     placeholder="5XXXXXXXX"
                     className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-500"
                     maxLength={9}
                   />
                 </div>
                 <p className="text-xs text-gray-500 mt-1">Enter 9-digit mobile number (e.g., 501234567)</p>
               </div>

               {/* Email */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                 <input
                   type="email"
                   value={form.email}
                   onChange={(e) => handleInputChange('email', e.target.value)}
                   placeholder="Please enter your e-mail"
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-500"
                 />
               </div>

               {/* Car Model */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                 <select
                   value={form.carModel}
                   onChange={(e) => handleInputChange('carModel', e.target.value)}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
                 >
                   <option value="" className="text-gray-500">Please select the vehicle model</option>
                   {carModels.map((model) => (
                     <option key={model.id} value={model.name} className="text-gray-700">
                       {model.name}
                     </option>
                   ))}
                 </select>
               </div>

               {/* Number Plate */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Number Plate</label>
                 <input
                   type="text"
                   value={form.numberPlate}
                   onChange={(e) => handleInputChange('numberPlate', e.target.value)}
                   placeholder="Please enter your number plate"
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-500"
                 />
               </div>

               {/* Submit Button */}
               <div className="pt-6">
                 <button
                   type="button"
                   onClick={handleSubmit}
                   className="w-full bg-black text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                 >
                   BOOK NOW
                 </button>
               </div>
             </form>

             {/* Success Popup */}
             <SuccessPopup
               isVisible={showSuccessPopup}
               onClose={() => setShowSuccessPopup(false)}
               title="Service Booking Submitted!"
               message="Thank you! Your service booking request has been received. We will contact you shortly to confirm your appointment details."
             />
           </div>
         </div>
       </div>
      
      <Footer />
    </div>
  );
} 