import { createClient } from "@/utils/supabase/server";

export default async function MembersManagementTable() {
  const supabase = await createClient();
}
