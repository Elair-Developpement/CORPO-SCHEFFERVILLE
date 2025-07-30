"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function CorporationDocumentsTable() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const bucketId = "documents";
  const folderId = "corporation";

  useEffect(() => {
    const fetchDocuments = async () => {
      const { data, error } = await supabase.storage
        .from(bucketId)
        .list(folderId);
      if (!error) {
        const documentsList = data.map((doc) => ({
          name: doc.name,
          url: supabase.storage.from(bucketId).getPublicUrl(doc.name).data
            .publicUrl,
        }));
        setDocuments(documentsList);
      }
      setLoading(false);
    };

    fetchDocuments();
  }, [supabase]);

  const handleDelete = async (fileName) => {
    const confirmed = confirm(
      "Êtes-vous sûr de vouloir supprimer ce document ?",
    );
    if (!confirmed) return;

    const { error } = await supabase.storage
      .from(bucketId)
      .remove([`${folderId}/${fileName}`]);
    if (!error) {
      setDocuments((prev) => prev.filter((doc) => doc.name !== fileName));
      alert("Document supprimé avec succès !");
    } else {
      alert("Erreur lors de la suppression du document : " + error.message);
    }
  };

  if (loading) {
    return <div>Chargement des documents...</div>;
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
          {documents.map((doc) => (
            <tr key={doc.name} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">{doc.name}</td>
              <td className="px-6 py-4 border-b">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Télécharger
                </a>
                <button
                  onClick={() => handleDelete(doc.name)}
                  className="text-red-600 hover:text-red-800 ml-4"
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
