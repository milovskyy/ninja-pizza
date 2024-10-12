import { createBrowserClient } from "@supabase/ssr"

/*************  ✨ Codeium Command ⭐  *************/
/******  d9c97cad-7360-49fc-8b70-6d960f87801b  *******/
export function createUserClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}
