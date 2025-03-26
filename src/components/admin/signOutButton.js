"use client";

import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export default function SignOutButton() {
  const supabase = createClient();

  async function signOut() {
    const { error } = supabase.auth.signOut();

    if (error) {
    }

    redirect("/");
  }

  return (
    <span
      className="hover:underline text-red-600 cursor-pointer"
      onClick={signOut}
    >
      Se déconnecter
    </span>
  );
}
