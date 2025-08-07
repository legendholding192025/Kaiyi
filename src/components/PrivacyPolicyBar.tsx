'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PrivacyPolicyBar() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const privacyChoice = localStorage.getItem('privacy-policy-choice');
    if (!privacyChoice) {
      setShowBar(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('privacy-policy-choice', 'accepted');
    setShowBar(false);
  };

  const handleDecline = () => {
    localStorage.setItem('privacy-policy-choice', 'declined');
    setShowBar(false);
  };

  if (!showBar) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm text-gray-700">
          <p>
            We use cookies and similar technologies to enhance your browsing experience, 
            analyze site traffic, and personalize content. By continuing to use this site, 
            you consent to our use of cookies. Learn more in our{' '}
            <Link href="/privacy-policy" className="text-[#0e62a8] hover:underline font-medium">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 text-sm font-medium text-white bg-[#0e62a8] hover:bg-[#0a4a7a] rounded-lg transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
