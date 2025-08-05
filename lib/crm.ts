// CRM Integration Configuration
export const CRM_CONFIG = {
  API_URL: process.env.NEXT_PUBLIC_CRM_API_URL || 'https://lmmta.legendholding.com/CRM_IS/rest/RESTAPIDealerShip/RESTAPI_WEB',
  API_KEY: process.env.NEXT_PUBLIC_CRM_API_KEY || '6807da3c6c9a35dad0d98355',
  COMPANY_ID: 'KAIYI-001',
  COMPANY_CODE: 'KAIYI',
  DEALERSHIP_ID: '68084c7835cef3626fca1532',
  LEAD_SOURCE_CODES: {
    default: "TD-WEB-001",   // Default for direct website visits
    facebook: "FB-SOC-101",  // Facebook/Messenger
    instagram: "IG-SOC-102", // Instagram
    google: "GO-SRC-201",    // Google
    email: "EM-MKT-301",     // Email campaigns
    tiktok: "TK-SOC-401",    // TikTok
    twitter: "TW-SOC-501",   // Twitter/X
    linkedin: "LI-SOC-601",  // LinkedIn
    youtube: "YT-VID-701",   // YouTube
    whatsApp: "WA-MSG-801"   // WhatsApp
  }
} as const;

// CRM Lead Interface
export interface CRMLead {
  full_name: string;
  phone: string;
  email: string;
  lead_source: string;
  form_type: 'test_drive' | 'service_booking' | 'brochure_download';
  car_model?: string;
  message?: string;
  number_plate?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

// Get lead source from URL parameters or referrer
export function getLeadSource(): string {
  if (typeof window === 'undefined') return CRM_CONFIG.LEAD_SOURCE_CODES.default;
  
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const referrer = document.referrer;
  
  // Check UTM parameters first
  if (utmSource) {
    const source = utmSource.toLowerCase();
    if (source.includes('facebook') || source.includes('fb')) return CRM_CONFIG.LEAD_SOURCE_CODES.facebook;
    if (source.includes('instagram') || source.includes('ig')) return CRM_CONFIG.LEAD_SOURCE_CODES.instagram;
    if (source.includes('google')) return CRM_CONFIG.LEAD_SOURCE_CODES.google;
    if (source.includes('email')) return CRM_CONFIG.LEAD_SOURCE_CODES.email;
    if (source.includes('tiktok') || source.includes('tk')) return CRM_CONFIG.LEAD_SOURCE_CODES.tiktok;
    if (source.includes('twitter') || source.includes('tw')) return CRM_CONFIG.LEAD_SOURCE_CODES.twitter;
    if (source.includes('linkedin') || source.includes('li')) return CRM_CONFIG.LEAD_SOURCE_CODES.linkedin;
    if (source.includes('youtube') || source.includes('yt')) return CRM_CONFIG.LEAD_SOURCE_CODES.youtube;
    if (source.includes('whatsapp') || source.includes('wa')) return CRM_CONFIG.LEAD_SOURCE_CODES.whatsApp;
  }
  
  // Check referrer
  if (referrer) {
    const referrerUrl = new URL(referrer);
    const hostname = referrerUrl.hostname.toLowerCase();
    
    if (hostname.includes('facebook.com') || hostname.includes('fb.com')) return CRM_CONFIG.LEAD_SOURCE_CODES.facebook;
    if (hostname.includes('instagram.com')) return CRM_CONFIG.LEAD_SOURCE_CODES.instagram;
    if (hostname.includes('google.com') || hostname.includes('google.ae')) return CRM_CONFIG.LEAD_SOURCE_CODES.google;
    if (hostname.includes('tiktok.com')) return CRM_CONFIG.LEAD_SOURCE_CODES.tiktok;
    if (hostname.includes('twitter.com') || hostname.includes('x.com')) return CRM_CONFIG.LEAD_SOURCE_CODES.twitter;
    if (hostname.includes('linkedin.com')) return CRM_CONFIG.LEAD_SOURCE_CODES.linkedin;
    if (hostname.includes('youtube.com')) return CRM_CONFIG.LEAD_SOURCE_CODES.youtube;
  }
  
  return CRM_CONFIG.LEAD_SOURCE_CODES.default;
}

// Get UTM parameters
export function getUTMParams() {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source') || undefined,
    utm_medium: urlParams.get('utm_medium') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined,
    utm_term: urlParams.get('utm_term') || undefined,
    utm_content: urlParams.get('utm_content') || undefined
  };
}

// Submit lead to CRM
export async function submitToCRM(leadData: CRMLead): Promise<{ success: boolean; error?: string }> {
  try {
    // Prepare headers as per your PHP implementation
    const headers = new Headers();
    headers.append('CompanyID', CRM_CONFIG.COMPANY_ID);
    headers.append('CompanyCode', CRM_CONFIG.COMPANY_CODE);
    headers.append('DearlerShipId', CRM_CONFIG.DEALERSHIP_ID);
    headers.append('LeadSourceId', leadData.lead_source);
    headers.append('CustomerName', leadData.full_name);
    headers.append('MobileNumber', leadData.phone);
    headers.append('CarModal', leadData.car_model || 'KAIYI Test Drive');
    headers.append('Location', leadData.form_type === 'test_drive' ? 'dubai' : 'abudhabi');
    headers.append('BookingDate', new Date().toISOString().split('T')[0]);
    headers.append('BookingTime', new Date().toTimeString().split(' ')[0]);
    headers.append('Email', leadData.email);
    headers.append('AdditionalInformation', `${leadData.form_type} Request - ${leadData.message || ''}`);
    headers.append('UTMSource', leadData.utm_source || '');
    headers.append('UTMMedium', leadData.utm_medium || '');
    headers.append('UTMCampaign', leadData.utm_campaign || '');
    headers.append('UTMTerm', leadData.utm_term || '');
    headers.append('UTMContent', leadData.utm_content || '');

    const response = await fetch(CRM_CONFIG.API_URL, {
      method: 'POST',
      headers: headers
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`);
    }

    const result = await response.text();
    console.log('CRM submission successful:', result);
    return { success: true };
  } catch (error) {
    console.error('CRM submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}

// Create CRM lead from form data
export function createCRMLead(
  formData: any, 
  formType: 'test_drive' | 'service_booking' | 'brochure_download'
): CRMLead {
  const leadSource = getLeadSource();
  const utmParams = getUTMParams();
  
  const baseLead: CRMLead = {
    full_name: formData.full_name || formData.name,
    phone: formData.phone,
    email: formData.email,
    lead_source: leadSource,
    form_type: formType,
    ...utmParams
  };

  // Add form-specific fields
  switch (formType) {
    case 'test_drive':
      return {
        ...baseLead,
        car_model: formData.car_model,
        message: formData.message
      };
    case 'service_booking':
      return {
        ...baseLead,
        car_model: formData.car_model,
        number_plate: formData.number_plate
      };
    case 'brochure_download':
      return {
        ...baseLead,
        car_model: formData.model_name
      };
    default:
      return baseLead;
  }
} 