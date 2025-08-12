// Google Analytics utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'G-401233023';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
      send_page_view: true,
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formType: 'test_drive' | 'service_booking' | 'brochure_download' | 'contact', leadSource?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formType,
      custom_parameter_1: leadSource || 'direct',
      custom_parameter_2: formType,
    });

    // Track as conversion
    window.gtag('event', 'conversion', {
      send_to: GA_TRACKING_ID,
      event_category: 'lead_generation',
      event_label: formType,
      value: 1,
    });
  }
};

// Track brochure downloads
export const trackBrochureDownload = (modelName: string, leadSource?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_download', {
      event_category: 'engagement',
      event_label: `${modelName}_brochure`,
      custom_parameter_1: leadSource || 'direct',
      custom_parameter_2: 'brochure_download',
    });
  }
};

// Track test drive bookings
export const trackTestDriveBooking = (modelName: string, leadSource?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'test_drive_booking', {
      event_category: 'conversion',
      event_label: modelName,
      custom_parameter_1: leadSource || 'direct',
      custom_parameter_2: 'test_drive',
      value: 10, // Assign a value to test drive bookings
    });
  }
};

// Track service bookings
export const trackServiceBooking = (serviceType: string, leadSource?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'service_booking', {
      event_category: 'conversion',
      event_label: serviceType,
      custom_parameter_1: leadSource || 'direct',
      custom_parameter_2: 'service_booking',
      value: 5, // Assign a value to service bookings
    });
  }
};

// Track user engagement
export const trackEngagement = (action: string, element: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: 'engagement',
      event_label: element,
      value: value,
    });
  }
};

// Track video interactions
export const trackVideoInteraction = (action: 'play' | 'pause' | 'complete', videoName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', `video_${action}`, {
      event_category: 'video',
      event_label: videoName,
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
      value: percentage,
    });
  }
};

// Track outbound links
export const trackOutboundLink = (url: string, linkText?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'outbound',
      event_label: url,
      transport_type: 'beacon',
    });
  }
};

// Enhanced ecommerce tracking for lead generation
export const trackLead = (leadType: string, leadValue: number, leadSource?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: `lead_${Date.now()}`,
      value: leadValue,
      currency: 'AED',
      items: [{
        item_id: leadType,
        item_name: leadType.replace('_', ' ').toUpperCase(),
        category: 'lead_generation',
        quantity: 1,
        price: leadValue,
      }],
      custom_parameter_1: leadSource || 'direct',
    });
  }
};
