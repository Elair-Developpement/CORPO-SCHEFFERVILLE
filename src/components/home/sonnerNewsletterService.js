"use client";

import { useState, useEffect, useTransition, startTransition } from "react";
import { createClient } from "@/lib/supabase/client";

import { toast } from "sonner";

export default function SonnerNewsletterService() {
  const supabase = createClient();
  const tableName = "newsletters";

  // If the last newsletter was uploaded less than 10  days ago, show a sonner to redirect to newsletter, inviting guests to look at it

  const [isPending, startTransition] = useTransition();
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const { data, error } = await supabase
        .from(tableName)
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching newsletters:", error);
        return;
      }

      setNewsletters(data);

      if (data.length > 0) {
        const lastNewsletter = data[0];
        const lastNewsletterDate = new Date(lastNewsletter.created_at);
        const currentDate = new Date();
        const daysDifference = Math.floor(
          (currentDate - lastNewsletterDate) / (1000 * 60 * 60 * 24),
        );

        if (
          daysDifference < 10 &&
          !sessionStorage.getItem("newsletterToastShown")
        ) {
          toast(
            `Une nouvelle infolettre est disponible ! ${lastNewsletter.name}`,
            {
              action: {
                label: "Télécharger",
                onClick: () => {
                  window.open(lastNewsletter.link, "_blank");
                },
              },
              duration: 30000,
            },
          );
          sessionStorage.setItem("newsletterToastShown", "true"); //
        }
      }
    });
  }, []);
}
