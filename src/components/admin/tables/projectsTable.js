"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

import ProjectsDialog from "@/components/admin/formDialog/projectsDialog";
import { Button } from "@/components/ui/button";

export default function ProjectsTable() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();
  const tableName = "projects";

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from(tableName)
        .select("*")
        .order("category");
      if (!error) {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, [supabase]);

  const handleDelete = async (id) => {
    const confirmed = confirm("Êtes-vous sûr de vouloir supprimer ce projet ?");
    if (!confirmed) return;

    const { error } = await supabase.from(tableName).delete().eq("id", id);
    if (!error) {
      setProjects((prev) => prev.filter((project) => project.id !== id));
      alert("Projet supprimé avec succès !");
    } else {
      alert("Erreur lors de la suppression du projet : " + error.message);
    }
  };

  const onDialogSuccess = () => {
    // Re-fetch projects after dialog success
    setLoading(true);
    createClient()
      .from(tableName)
      .select("*")
      .order("category")
      .then(({ data, error }) => {
        if (!error) {
          setProjects(data);
        } else {
          console.error("Error fetching projects:", error);
        }
        setLoading(false);
      });
  };

  if (loading) {
    return <div>Chargement des projets...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <ProjectsDialog
        dialogTrigger={
          <Button variant="outline" className="bg-green_2 text-white my-2">
            Ajouter un projet ou équipement
          </Button>
        }
        onSuccess={onDialogSuccess}
      />
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 border-b text-left">Nom</th>
            <th className="px-6 py-3 border-b text-left">Catégorie</th>
            <th className="px-6 py-3 border-b text-left">Lien Info</th>
            <th className="px-6 py-3 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">{project.name}</td>
              <td className="px-6 py-4 border-b">
                {project.category === "en-cours" && "En cours"}
                {project.category === "equipements-disponibles" &&
                  "Équipements disponibles"}
                {project.category === "en-developpement" && "En développement"}
              </td>
              <td className="px-6 py-4 border-b">
                {project.info_link && (
                  <a
                    href={project.info_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Voir Info
                  </a>
                )}
              </td>
              <td className="px-6 py-4 border-b">
                <ProjectsDialog
                  dialogTrigger={
                    <button className="text-blue-500 hover:text-blue-700 mr-2">
                      Modifier
                    </button>
                  }
                  onSuccess={onDialogSuccess}
                  modifyProject={project}
                />
                <button
                  onClick={() => handleDelete(project.id)}
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
