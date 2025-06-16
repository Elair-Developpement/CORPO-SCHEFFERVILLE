"use client";

import { useState, useEffect, useTransition, startTransition } from "react";
import { createClient } from "@/lib/supabase/client";

import { toast } from "sonner";

export default function SonnerNewsletterService() {
  const supabase = createClient();
  const bucketId = "newsletters";

  // If the last newsletter was uploaded less than 10  days ago, show a sonner to redirect to newsletter, inviting guests to look at it

  const [isPending, startTransition] = useTransition();
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const { data, error } = await supabase.storage.from(bucketId).list();

      if (error) {
        console.error("Error fetching newsletters:", error);
        return;
      }

      const newslettersList = data.map((doc) => ({
        name: doc.name,
        url: supabase.storage.from(bucketId).getPublicUrl(doc.name).data
          .publicUrl,
        updatedAt: doc.updated_at,
      }));

      setNewsletters(newslettersList);

      if (newslettersList.length > 0) {
        const lastNewsletter = newslettersList[newslettersList.length - 1];
        const lastUpdated = new Date(lastNewsletter.updatedAt);
        const now = new Date();
        const diffDays = Math.ceil((now - lastUpdated) / (1000 * 60 * 60 * 24));

        if (diffDays < 10) {
          toast("&#128226 Une nouvelle infolettre est disponible !", {
            action: {
              label: "Télécharger l'infolettre",
              onClick: () => {
                window.open(lastNewsletter.url, "_blank");
              },
            },
            duration: 10000,
          });
        }
      }
    });
  }, []);
}
