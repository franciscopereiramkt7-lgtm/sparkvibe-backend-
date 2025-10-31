import { createServerClient } from "@supabase/ssr";
import { Database } from "./types/supabase";

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !key) throw new Error("Supabase credentials missing in environment");
  return createServerClient<Database>(url, key);
}
