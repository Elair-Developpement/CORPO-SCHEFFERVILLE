"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

import { removeYYYYMMDDFromFileName } from "@/lib/utils";

export default function NewslettersTable() {
  const supabase = createClient();
  const bucketId = "newsletters";

  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsletters = async () => {
      const { data, error } = await supabase.storage.from(bucketId).list();
      if (!error) {
        const newslettersList = data.map((doc) => ({
          name: doc.name,
          url: supabase.storage.from(bucketId).getPublicUrl(doc.name).data
            .publicUrl,
        }));
        setNewsletters(newslettersList);
      }
      setLoading(false);
    };

    fetchNewsletters();
  }, [supabase]);

  const handleDelete = async (fileName) => {
    const confirmed = confirm(
      "Êtes-vous sûr de vouloir supprimer ce document ?",
    );
    if (!confirmed) return;

    const { error } = await supabase.storage.from(bucketId).remove([fileName]);
    if (!error) {
      setNewsletters((prev) =>
        prev.filter((newsletter) => newsletter.name !== fileName),
      );
      alert("Document supprimé avec succès !");
    } else {
      alert("Erreur lors de la suppression du document : " + error.message);
    }
  };

  if (loading) {
    return <div>Chargement des infolettres...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 border-b text-left">Nom</th>
            <th className="px-6 py-3 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {newsletters.map((doc) => (
            <tr key={doc.name} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">
                {removeYYYYMMDDFromFileName(doc.name)}
              </td>
              <td className="px-6 py-4 border-b">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Télécharger
                </a>
                <button
                  onClick={() => handleDelete(doc.name)}
                  className="text-red-500 hover:underline ml-4"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
