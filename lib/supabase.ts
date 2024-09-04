import { createClient } from "@supabase/supabase-js"
// import { supabaseAnonKey, supabaseURL } from "./config"

export const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_KEY || "",
)
