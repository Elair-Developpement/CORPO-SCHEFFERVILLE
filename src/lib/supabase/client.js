import { createBrowserClient } from "@supabase/ssr";

/**
 * Crée un client Supabase pour les page côté navigateur. "use client"
 * @returns {SupabaseClient<any, "public" extends keyof any ? "public" : (string & keyof any), any>} Le client supabase.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}
