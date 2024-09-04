import { createClient } from "@supabase/supabase-js"
// import { supabaseAnonKey, supabaseURL } from "./config"

// export const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY,
// )

const supabaseURL = "https://gdgccriibsrmjzltjugb.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkZ2NjcmlpYnNybWp6bHRqdWdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMzY1MTksImV4cCI6MjAzNzkxMjUxOX0.2pcOOewtOBs7OhXSCET73LYt8p9_BIO6iYGFVpfatP0"

export const supabase = createClient(supabaseURL, supabaseAnonKey)
