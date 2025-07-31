'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface FormData {
  car_id: string;
  name: string;
  country: string;
  phone: string;
  email: string;
  message: string;
  verification_code: string;
}

export default function TestDrivePage() {
  const [form, setForm] = useState<FormData>({
    car_id: '',
    name: '',
    country: '',
    phone: '',
    email: '',
    message: '',
    verification_code: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const models = [
    { id: 1, name: "KAIYI X7" },
    { id: 2, name: "KAIYI X3 Pro" },
    { id: 3, name: "KAIYI E5" }
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        car_id: '',
        name: '',
        country: '',
        phone: '',
        email: '',
        message: '',
        verification_code: ''
      });
    }, 3000);
  };

  return (
    <div className="testdrive-page w-full min-h-screen bg-white">
      {/* Navbar Component */}
      <Navbar />
      
      <div className="flex pt-16">
        {/* Left Side - Image (50% width) */}
        <div className="w-1/2 relative">
          <Image
            src="https://www.kaiyiglobal.com/assets/joinus-e41a44c9.jpg"
            alt="Test Drive Landscape"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side - Form (50% width) */}
        <div className="w-1/2 bg-white p-8 flex flex-col justify-center">
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

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <input
                  type="text"
                  value={form.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  placeholder="Please enter your country"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Please enter your phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-500"
                />
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

              {/* Verification Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Verification code</label>
                <input
                  type="text"
                  value={form.verification_code}
                  onChange={(e) => handleInputChange('verification_code', e.target.value)}
                  placeholder="Please enter the verification code"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-500"
                />
                {/* Captcha Image */}
                <div className="mt-2 p-3 bg-gray-50 rounded border border-gray-200">
                  <div className="text-center text-lg font-bold text-gray-800 tracking-wider">
                    as 31
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-white border border-gray-300 text-black py-3 px-8 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>

            {submitted && (
              <div className="success-message text-center text-green-600 font-bold mt-6">
                Thank you! Your test drive request has been received.
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
} 