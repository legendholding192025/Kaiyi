'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SuccessPopup from '../../components/SuccessPopup';

interface FormData {
  car_id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  verification_code: string;
}

export default function TestDrivePage() {
  const [form, setForm] = useState<FormData>({
    car_id: '',
    name: '',
    phone: '',
    email: '',
    message: '',
    verification_code: ''
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const models = [
    { id: 1, name: "KAIYI X7" },
    { id: 2, name: "KAIYI X3 Pro" },
    { id: 3, name: "KAIYI E5" }
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (isLoading) return; // Prevent multiple submissions
    
    try {
      setIsLoading(true);
      
      // Validate required fields
      if (!form.car_id || !form.name || !form.phone || !form.email) {
        alert('Please fill in all required fields');
        return;
      }

      // Validate phone number (must be exactly 9 digits)
      if (!/^\d{9}$/.test(form.phone)) {
        alert('Phone number must be exactly 9 digits');
        return;
      }

      // Import the API function
      const { submitTestDriveBooking } = await import('@/lib/api');
      
                    // Get the model name from the selected car_id
      const selectedModel = models.find(model => model.id.toString() === form.car_id);
      
      const result = await submitTestDriveBooking({
        car_id: form.car_id, // Keep the original ID
        car_model: selectedModel?.name || '', // Store the model name in new field
        name: form.name,
        phone: `+971${form.phone}`,
        email: form.email,
        message: form.message || undefined
      });

      if (result.success) {
        setShowSuccessPopup(true);
        setForm({
          car_id: '',
          name: '',
          phone: '',
          email: '',
          message: '',
          verification_code: ''
        });
      } else {
        alert('Error submitting form. Please try again.');
        console.error('Form submission error:', result.error);
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="testdrive-page w-full min-h-screen bg-white">
      {/* Navbar Component */}
      <Navbar />
      
      <div className="flex flex-col lg:flex-row pt-16">
        {/* Image Section - Full width on mobile, 50% on desktop */}
        <div className="w-full lg:w-1/2 relative h-64 lg:h-auto">
          <Image
            src="https://www.kaiyiglobal.com/assets/joinus-e41a44c9.jpg"
            alt="Test Drive Landscape"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Form Section - Full width on mobile, 50% on desktop */}
        <div className="w-full lg:w-1/2 bg-white p-4 lg:p-8 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-2xl font-bold text-black mb-8 text-center">TEST DRIVE</h1>
            
            <form className="space-y-6">
              {/* Model Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                <select
                  value={form.car_id}
                  onChange={(e) => handleInputChange('car_id', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700"
                >
                  <option value="" className="text-gray-500">Please select the vehicle model</option>
                  {models.map((model) => (
                    <option key={model.id} value={model.id} className="text-gray-700">
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
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

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Please Enter content</label>
                <textarea
                  value={form.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder=""
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`bg-[#0e62a8] border border-[#0e62a8] text-white py-3 px-8 rounded-lg font-medium transition-colors ${
                    isLoading 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-[#0a4a7a] hover:border-[#0a4a7a]'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </div>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>


            {/* Success Popup */}
            <SuccessPopup
              isVisible={showSuccessPopup}
              onClose={() => setShowSuccessPopup(false)}
              title="Test Drive Request Submitted!"
              message="Thank you! Your test drive request has been received. We will contact you shortly to confirm the details and arrange your personalized test drive experience."
            />
          </div>
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
} 