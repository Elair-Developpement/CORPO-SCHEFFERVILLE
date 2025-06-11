"use client";

import { useTranslations } from "next-intl";
import { useState, useTransition, useEffect } from "react";

import { createClient } from "@/lib/supabase/client";

export default function NewslettersTable() {
  const t = useTranslations("common");
  const [newsletters, setNewsletters] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const supabase = await createClient();
      const bucketId = "newsletters";

      const { data, error } = await supabase.storage.from(bucketId).list();

      if (error) {
        console.error("Erreur lors du chargement des documents:", error);
        return;
      }

      const newslettersMap = data.map((doc) => ({
        name: doc.name,
        url: supabase.storage.from(bucketId).getPublicUrl(doc.name).data
          .publicUrl,
      }));

      setNewsletters(newslettersMap);
    });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 border-b text-left">{t("name")}</th>
            <th className="px-6 py-3 border-b text-left">{t("action")}</th>
          </tr>
        </thead>
        <tbody>
          {newsletters.map((doc) => (
            <tr key={doc.name} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">{doc.name}</td>
              <td className="px-6 py-4 border-b">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {t("download")}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
