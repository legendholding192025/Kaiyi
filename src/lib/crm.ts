// CRM Integration Configuration
export const CRM_CONFIG = {
  API_URL: 'https://lmmta.legendholding.com/CRM_IS/rest/RESTAPIDealerShip/RESTAPI_WEB',
  API_KEY: '6807da3c6c9a35dad0d98355',
  COMPANY_ID: 'KAIYI-001',
  COMPANY_CODE: 'KAIYI',
  DEALERSHIP_ID: '6807da3c6c9a35dad0d98355'
} as const

// Lead source codes for different traffic sources
export const LEAD_SOURCE_CODES = {
  default: 'TD-WEB-001',    // Test Drive - Website
  facebook: 'TD-FAC-201',   // Test Drive - Facebook
  instagram: 'TD-INS-301',  // Test Drive - Instagram
  linkedin: 'TD-LIN-401',   // Test Drive - LinkedIn
  twitter: 'TD-TWI-501',    // Test Drive - Twitter
  youtube: 'TD-VID-701',    // Test Drive - YouTube
  whatsapp: 'TD-MSG-801',   // Test Drive - WhatsApp
  google: 'TD-GOO-101',     // Test Drive - Google
  email: 'TD-EML-901',      // Test Drive - Email
  tiktok: 'TD-TIK-1001'     // Test Drive - TikTok
} as const

// CRM Lead interface
export interface CRMLead {
  name: string
  phone: string
  email: string
  carModel: string
  location: string
  additionalInfo?: string
  formType: 'test_drive' | 'service_booking' | 'brochure_download'
}

// Get lead source based on UTM parameters and referrer
export function getLeadSource(): string {
  if (typeof window === 'undefined') return LEAD_SOURCE_CODES.default

  const urlParams = new URLSearchParams(window.location.search)
  const utmSource = urlParams.get('utm_source')?.toLowerCase()
  const referrer = document.referrer.toLowerCase()

  // Check for Facebook/Messenger
  if (urlParams.get('fbclid') || referrer.includes('facebook.com') || referrer.includes('messenger.com')) {
    return LEAD_SOURCE_CODES.facebook
  }

  // Check for Instagram
  if (referrer.includes('instagram.com')) {
    return LEAD_SOURCE_CODES.instagram
  }

  // Check for LinkedIn
  if (referrer.includes('linkedin.com')) {
    return LEAD_SOURCE_CODES.linkedin
  }

  // Check for Twitter/X
  if (referrer.includes('twitter.com') || referrer.includes('x.com')) {
    return LEAD_SOURCE_CODES.twitter
  }

  // Check for YouTube
  if (referrer.includes('youtube.com')) {
    return LEAD_SOURCE_CODES.youtube
  }

  // Check for WhatsApp
  if (referrer.includes('whatsapp.com') || referrer.includes('wa.me')) {
    return LEAD_SOURCE_CODES.whatsapp
  }

  // Check for Google
  if (referrer.includes('google.com') || referrer.includes('google.ae')) {
    return LEAD_SOURCE_CODES.google
  }

  // Check for Email
  if (referrer.includes('mail.google.com') || referrer.includes('outlook.com') || referrer.includes('yahoo.com')) {
    return LEAD_SOURCE_CODES.email
  }

  // Check for TikTok
  if (referrer.includes('tiktok.com')) {
    return LEAD_SOURCE_CODES.tiktok
  }

  // Check UTM source
  if (utmSource) {
    switch (utmSource) {
      case 'facebook':
        return LEAD_SOURCE_CODES.facebook
      case 'instagram':
        return LEAD_SOURCE_CODES.instagram
      case 'linkedin':
        return LEAD_SOURCE_CODES.linkedin
      case 'twitter':
        return LEAD_SOURCE_CODES.twitter
      case 'youtube':
        return LEAD_SOURCE_CODES.youtube
      case 'whatsapp':
        return LEAD_SOURCE_CODES.whatsapp
      case 'google':
        return LEAD_SOURCE_CODES.google
      case 'email':
        return LEAD_SOURCE_CODES.email
      case 'tiktok':
        return LEAD_SOURCE_CODES.tiktok
      default:
        return LEAD_SOURCE_CODES.default
    }
  }

  return LEAD_SOURCE_CODES.default
}

// Get UTM parameters
export function getUTMParams() {
  if (typeof window === 'undefined') return {}
  
  const urlParams = new URLSearchParams(window.location.search)
  return {
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_term: urlParams.get('utm_term') || '',
    utm_content: urlParams.get('utm_content') || ''
  }
}

// Submit lead to CRM
export async function submitToCRM(lead: CRMLead): Promise<{ success: boolean; error?: string }> {
  try {
    const leadSourceCode = getLeadSource()
    const utmParams = getUTMParams()
    
    // Determine location based on form type
    const location = lead.location || 'Dubai'
    
    // Create headers
    const headers = new Headers()
    headers.append('CompanyID', CRM_CONFIG.COMPANY_ID)
    headers.append('CompanyCode', CRM_CONFIG.COMPANY_CODE)
    headers.append('DearlerShipId', CRM_CONFIG.DEALERSHIP_ID)
    headers.append('LeadSourceId', leadSourceCode)
    headers.append('CustomerName', lead.name)
    headers.append('MobileNumber', lead.phone)
    headers.append('CarModal', lead.carModel)
    headers.append('Location', location)
    headers.append('BookingDate', new Date().toISOString().split('T')[0])
    headers.append('BookingTime', new Date().toTimeString().split(' ')[0])
    headers.append('Email', lead.email)
    headers.append('AdditionalInformation', `${lead.formType} - ${lead.additionalInfo || ''}`)
    headers.append('UTMSource', utmParams.utm_source || '')
    headers.append('UTMMedium', utmParams.utm_medium || '')
    headers.append('UTMCampaign', utmParams.utm_campaign || '')
    headers.append('UTMTerm', utmParams.utm_term || '')
    headers.append('UTMContent', utmParams.utm_content || '')



    const response = await fetch(CRM_CONFIG.API_URL, {
      method: 'POST',
      headers
    })

    await response.text()

    if (!response.ok) {
      throw new Error(`CRM API error: ${response.status} ${response.statusText}`)
    }

    return { success: true }
  } catch (error) {

    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown CRM error' 
    }
  }
}

// Create CRM lead from form data
export function createCRMLead(
  formData: Record<string, string | undefined>, 
  formType: 'test_drive' | 'service_booking' | 'brochure_download'
): CRMLead {
  const baseLead: CRMLead = {
    name: formData.name || formData.full_name || '',
    phone: formData.phone || '',
    email: formData.email || '',
    carModel: formData.car_model || formData.model_name || '',
    location: 'Dubai', // Default location
    formType,
    additionalInfo: formData.message || formData.additional_info || ''
  }

  // Helper function to clean model name (remove duplicate KAIYI)
  const cleanModelName = (modelName: string) => {
    // Remove "KAIYI" prefix if it already exists
    return modelName.replace(/^KAIYI\s+/i, '')
  }

  // Add form-specific data
  switch (formType) {
    case 'test_drive':
      const testDriveModel = cleanModelName(formData.car_model || '')
      baseLead.carModel = `KAIYI ${testDriveModel} Test Drive`
      break
    case 'service_booking':
      const serviceModel = cleanModelName(formData.car_model || '')
      baseLead.carModel = `KAIYI ${serviceModel} Service`
      baseLead.additionalInfo = `Number Plate: ${formData.number_plate || ''}`
      break
    case 'brochure_download':
      const brochureModel = cleanModelName(formData.model_name || '')
      baseLead.carModel = `KAIYI ${brochureModel} Brochure`
      break
  }

  return baseLead
} 