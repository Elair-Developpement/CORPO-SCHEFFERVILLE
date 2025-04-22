"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

export default function CorporationMembersTable() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const tableName = "members";

  useEffect(() => {
    const fetchMembers = async () => {
      const { data, error } = await supabase
        .from(tableName)
        .select("*")
        .order("section");
      if (!error) {
        setMembers(data);
      }
      setLoading(false);
    };

    fetchMembers();
  }, [supabase]);

  const handleDelete = async (id) => {
    const confirmed = confirm("Êtes-vous sûr de vouloir supprimer ce membre ?");
    if (!confirmed) return;

    const { error } = await supabase.from(tableName).delete().eq("id", id);
    if (!error) {
      setMembers((prev) => prev.filter((member) => member.id !== id));
      alert("Membre supprimé avec succès !");
    } else {
      alert("Erreur lors de la suppression du membre : " + error.message);
    }
  };

  if (loading) {
    return <div>Chargement des membres...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 border-b text-left">Nom</th>
            <th className="px-6 py-3 border-b text-left">Rôle</th>
            <th className="px-6 py-3 border-b text-left">Section</th>
            <th className="px-6 py-3 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">{member.name}</td>
              <td className="px-6 py-4 border-b">{member.role}</td>
              <td className="px-6 py-4 border-b">
                {member.section === "assemblee" && "Assemblée générale"}
                {member.section === "conseil" && "Conseil d'administration"}
                {member.section === "direction" && "Direction générale"}
              </td>
              <td className="px-6 py-4 border-b">
                <button
                  onClick={() => alert("Modifier functionality here")}
                  className="text-blue-600 hover:text-blue-800 mr-2"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(member.id)}
                  className="text-red-600 hover:text-red-800"
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
