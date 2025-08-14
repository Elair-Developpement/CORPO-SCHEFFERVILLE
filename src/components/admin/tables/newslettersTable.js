"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

import { removeYYYYMMDDFromFileName } from "@/lib/utils";
import NewslettersDialog from "@/components/admin/formDialog/newslettersDialog";
import { Button } from "@/components/ui/button";

export default function NewslettersTable() {
  const supabase = createClient();
  const tableName = "newsletters";

  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsletters = async () => {
      const { data, error } = await supabase.from(tableName).select("*");
      if (!error) {
        setNewsletters(data);
      }
      setLoading(false);
    };

    fetchNewsletters();
  }, [supabase]);

  const handleDelete = async (id) => {
    const confirmed = confirm(
      "Êtes-vous sûr de vouloir supprimer ce document ?"
    );
    if (!confirmed) return;

    const { error } = await supabase.from(tableName).delete().eq("id", id);

    if (!error) {
      setNewsletters((prev) =>
        prev.filter((newsletter) => newsletter.id !== id)
      );
      alert("Document supprimé avec succès !");
    } else {
      alert("Erreur lors de la suppression du document : " + error.message);
    }
  };

  const onDialogSuccess = () => {
    // Re-fetch projects after dialog success
    setLoading(true);
    createClient()
      .from(tableName)
      .select("*")
      .then(({ data, error }) => {
        if (!error) {
          setNewsletters(data);
        } else {
          console.error("Error fetching projects:", error);
        }
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Chargement des infolettres...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <NewslettersDialog
        dialogTrigger={
          <Button variant="outline" className="bg-green_2 text-white my-2">
            Ajouter une infolettre
          </Button>
        }
        onSuccess={onDialogSuccess}
      />
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
                  onClick={() => handleDelete(doc.id)}
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
