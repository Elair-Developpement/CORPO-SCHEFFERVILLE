import { createClient } from "@/utils/supabase/server";

export default async function CorporationMembersTable() {
  const supabase = await createClient();
}
