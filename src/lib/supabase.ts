import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database table names
export const TABLES = {
  TEST_DRIVE: 'kaiyi_test_drive_bookings',
  SERVICE_BOOKING: 'kaiyi_service_bookings',
  BROCHURE_DOWNLOAD: 'kaiyi_brochure_downloads'
} as const 