'use client';

import { useState } from 'react';

interface BrochureDownloadPopupProps {
  isOpen: boolean;
  onClose: () => void;
  modelName: string;
}

export default function BrochureDownloadPopup({ isOpen, onClose, modelName }: BrochureDownloadPopupProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const downloadBrochure = (modelName: string) => {
    let fileName = '';
    
    // Map model names to PDF files
    switch (modelName) {
      case 'KAIYI X7':
        fileName = 'KAIYI X7 Specs - 2026.pdf';
        break;
      case 'KAIYI X3 PRO':
      case 'KAIYI X3 Pro':
        fileName = 'KAIYI X3 Pro Specs - 2026.pdf';
        break;
      case 'KAIYI E5':
        // For E5, we don't have a brochure, so we'll show a message
        alert('Brochure for E5 model is not available yet.');
        return;
      default:
        alert(`Brochure not found for model: ${modelName}`);
        return;
    }
    
    // Create link to open PDF in browser
    const link = document.createElement('a');
    link.href = `/downloads/${fileName}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Import the API function
      const { submitBrochureDownload } = await import('@/lib/api');
      
      // Validate phone number (must be exactly 9 digits)
      if (!/^\d{9}$/.test(formData.phone)) {
        alert('Phone number must be exactly 9 digits');
        return;
      }

      const result = await submitBrochureDownload({
        full_name: formData.fullName,
        phone: `+971${formData.phone}`,
        email: formData.email,
        model_name: modelName
      });

      if (result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Download the brochure PDF
        downloadBrochure(modelName);
        
        // Close popup after 3 seconds
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({ fullName: '', phone: '', email: '' });
        }, 3000);
      } else {
        setIsSubmitting(false);
        alert('Error submitting form. Please try again.');
      }
    } catch {
      setIsSubmitting(false);
      alert('Error submitting form. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Download {modelName} Brochure
              </h2>
              <p className="text-gray-600">
                Please provide your details to access the brochure
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-500"
                  placeholder="Enter your full name"
                />
              </div>

                                            {/* Phone Number */}
               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">
                   Phone Number <span className="text-red-600">*</span>
                 </label>
                 <div className="relative">
                   <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium z-10">
                     +971
                   </div>
                   <input
                     type="tel"
                     required
                     value={formData.phone}
                     onChange={(e) => {
                       const value = e.target.value.replace(/\D/g, '').slice(0, 9);
                       handleInputChange('phone', value);
                     }}
                     className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-500"
                     placeholder="5XXXXXXXX"
                     maxLength={9}
                   />
                 </div>
                 <p className="text-xs text-gray-500 mt-1">Enter 9-digit mobile number (e.g., 501234567)</p>
               </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-700 placeholder-gray-500"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Processing...' : 'Download Brochure'}
              </button>
            </form>
          </>
        ) : (
          /* Success Message */
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Thank You!
            </h3>
                         <p className="text-gray-600">
               Your {modelName} brochure will open in a new browser tab!
             </p>
          </div>
        )}
      </div>
    </div>
  );
} 