import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export default async function Admin() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  async function signOut() {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
      return { error: "Erreur lors de la déconnexion" };
    }
  }

  return (
    <main className={"container mx-auto min-h-[calc(100vh-249.27px)]"}>
      <div>
        <h1>Bienvenue {data.user.email}</h1>
      </div>
    </main>
  );
}
