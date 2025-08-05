import { supabase, TABLES } from './supabase'
import { submitToCRM, createCRMLead } from './crm'

// Types for form data
export interface TestDriveFormData {
  car_id: string
  car_model?: string
  name: string
  phone: string
  email: string
  message?: string
}

export interface ServiceBookingFormData {
  full_name: string
  phone: string
  email: string
  car_model: string
  number_plate: string
}

export interface BrochureDownloadFormData {
  full_name: string
  phone: string
  email: string
  model_name: string
}

// Test Drive Booking API
export async function submitTestDriveBooking(data: TestDriveFormData) {
  try {
    // Submit to Supabase database
    const { data: result, error } = await supabase
      .from(TABLES.TEST_DRIVE)
      .insert([data])
      .select()

    if (error) {
      throw new Error(error.message)
    }

          // Submit to CRM (non-blocking)
      try {
        const crmLead = createCRMLead(data as unknown as Record<string, string | undefined>, 'test_drive')
        await submitToCRM(crmLead)
      } catch {
        // CRM submission failed silently
      }

    return { success: true, data: result }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Service Booking API
export async function submitServiceBooking(data: ServiceBookingFormData) {
  try {
    // Submit to Supabase database
    const { data: result, error } = await supabase
      .from(TABLES.SERVICE_BOOKING)
      .insert([data])
      .select()

    if (error) {
      throw new Error(error.message)
    }

    // Submit to CRM (non-blocking)
    try {
      const crmLead = createCRMLead(data as unknown as Record<string, string | undefined>, 'service_booking')
      await submitToCRM(crmLead)
    } catch {
      // CRM submission failed silently
    }

    return { success: true, data: result }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Brochure Download API
export async function submitBrochureDownload(data: BrochureDownloadFormData) {
  try {
    // Submit to Supabase database
    const { data: result, error } = await supabase
      .from(TABLES.BROCHURE_DOWNLOAD)
      .insert([data])
      .select()

    if (error) {
      throw new Error(error.message)
    }

    // Submit to CRM (non-blocking)
    try {
      const crmLead = createCRMLead(data as unknown as Record<string, string | undefined>, 'brochure_download')
      await submitToCRM(crmLead)
    } catch {
      // CRM submission failed silently
    }

    return { success: true, data: result }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

// Get all bookings (for admin purposes)
export async function getTestDriveBookings() {
  try {
    const { data, error } = await supabase
      .from(TABLES.TEST_DRIVE)
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw new Error(error.message)
    return { success: true, data }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function getServiceBookings() {
  try {
    const { data, error } = await supabase
      .from(TABLES.SERVICE_BOOKING)
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw new Error(error.message)
    return { success: true, data }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function getBrochureDownloads() {
  try {
    const { data, error } = await supabase
      .from(TABLES.BROCHURE_DOWNLOAD)
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw new Error(error.message)
    return { success: true, data }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
} 