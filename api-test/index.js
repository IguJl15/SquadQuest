import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('http://localhost:8000', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE')

const phone = ''

// Sign in with phone number
// const { data, error } = await supabase.auth.signInWithOtp({
//     phone,
// })

// Verify the OTP
// const {
//     data: { session },
//     error,
// } = await supabase.auth.verifyOtp({
//     phone,
//     token: '368908',
//     type: 'sms',
// })

const accessToken = ''
const refreshToken = ''


const { data, error } = await supabase
  .from('topics')
  .select()

debugger
