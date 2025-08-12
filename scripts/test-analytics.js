// Google Analytics Testing Script
// Run this in browser console to test GA implementation

console.log('🔍 Testing Google Analytics Implementation...');

// Check if gtag is loaded
if (typeof gtag !== 'undefined') {
  console.log('✅ Google Analytics gtag is loaded');
  
  // Test basic page view
  gtag('event', 'page_view', {
    page_title: 'Test Page',
    page_location: window.location.href,
    send_to: (window.NEXT_PUBLIC_GA_TRACKING_ID || 'G-ELJSF9M19L')
  });
  console.log('✅ Test page view sent');
  
  // Test custom event
  gtag('event', 'test_event', {
    event_category: 'testing',
    event_label: 'analytics_test',
    value: 1
  });
  console.log('✅ Test custom event sent');
  
  // Test form submission event
  gtag('event', 'form_submit', {
    event_category: 'engagement',
    event_label: 'test_form',
    custom_parameter_1: 'direct',
    custom_parameter_2: 'test'
  });
  console.log('✅ Test form submission event sent');
  
  // Test conversion event
  gtag('event', 'conversion', {
    send_to: (window.NEXT_PUBLIC_GA_TRACKING_ID || 'G-ELJSF9M19L'),
    event_category: 'lead_generation',
    event_label: 'test_conversion',
    value: 10
  });
  console.log('✅ Test conversion event sent');
  
} else {
  console.error('❌ Google Analytics gtag is not loaded');
  console.log('Checking for common issues...');
  
  // Check if script is loaded
  const gaScript = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
  if (gaScript) {
    console.log('✅ GA script tag found:', gaScript.src);
  } else {
    console.error('❌ GA script tag not found');
  }
  
  // Check dataLayer
  if (typeof window.dataLayer !== 'undefined') {
    console.log('✅ dataLayer exists:', window.dataLayer);
  } else {
    console.error('❌ dataLayer not found');
  }
}

// Check for tracking ID
const trackingId = (window.NEXT_PUBLIC_GA_TRACKING_ID || 'G-ELJSF9M19L');
console.log(`🔍 Using tracking ID: ${trackingId}`);

// Check network requests
console.log('🔍 Check Network tab for requests to:');
console.log('- https://www.googletagmanager.com/gtag/js?id=' + trackingId);
console.log('- https://www.google-analytics.com/g/collect');

// Instructions
console.log(`
📋 Testing Instructions:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Filter by "google" or "analytics"
4. Interact with the website (forms, buttons, etc.)
5. Check for outgoing requests to Google Analytics

🔍 Real-time Testing:
1. Go to Google Analytics dashboard
2. Navigate to Reports > Realtime > Overview
3. Interact with your website
4. Check if events appear in real-time

⚠️  Note: It may take 24-48 hours for data to appear in standard reports.
`);
