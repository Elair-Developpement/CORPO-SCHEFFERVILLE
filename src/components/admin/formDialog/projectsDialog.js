"use client";

import { useState, useEffect } from "react";

import { createClient } from "@/lib/supabase/client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProjectsDialog({
  onSuccess,
  dialogTrigger,
  modifyProject,
}) {
  const supabase = createClient();
  const bucketId = "documents";
  const tableName = "projects";
  const categories = [
    "en-cours",
    "en-developpement",
    "equipements-disponibles",
  ];

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [infoLink, setInfoLink] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (modifyProject) {
      setName(modifyProject.name || "");
      setCategory(modifyProject.category || "");
      setInfoLink(modifyProject.info_link || "");
    } else {
      setName("");
      setCategory("");
      setInfoLink("");
    }
  }, [modifyProject]);

  // Handle file upload
  async function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const filePath = `communal_life/${Date.now()}-${file.name}`;

    setUploading(true);
    const { data, error } = await supabase.storage
      .from(bucketId)
      .upload(filePath, file);
    setUploading(false);

    if (!error) {
      const { data: publicUrl } = supabase.storage
        .from(bucketId)
        .getPublicUrl(filePath);
      setInfoLink(publicUrl.publicUrl);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (modifyProject && modifyProject.id) {
      // Update existing project
      const { error } = await supabase
        .from(tableName)
        .update({ name, category, info_link: infoLink })
        .eq("id", modifyProject.id);
      if (!error && onSuccess) onSuccess();
    } else {
      // Insert new project
      const { error } = await supabase
        .from(tableName)
        .insert([{ name, category, info_link: infoLink }]);
      if (!error && onSuccess) onSuccess();
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {modifyProject
              ? "Modifier un projet ou équipement"
              : "Nouveau projet ou équipement"}
          </DialogTitle>
          <DialogDescription>
            {modifyProject
              ? "Modifiez les détails du projet ou équipement."
              : "Ajoutez un nouveau projet ou équipement à la liste."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Nom du projet ou équipement
            </label>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block mb-2">
              État du projet ou équipement
            </label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full p-2 border rounded"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="infoLink" className="block mb-2">
              Lien d'information ou fichier (Optionnel)
            </label>
            <input
              type="url"
              name="infoLink"
              placeholder="Lien (URL)"
              value={infoLink}
              onChange={(e) => setInfoLink(e.target.value)}
              className="w-full p-2 border rounded mb-2"
              disabled={uploading}
            />
            <span>ou</span>
            <input
              type="file"
              name="infoFile"
              accept="application/pdf,image/*"
              onChange={handleFileUpload}
              className="w-full p-2 border rounded mt-2"
              disabled={uploading}
            />
            {uploading && <span>Téléversement...</span>}
          </div>
          <button
            type={"submit"}
            disabled={uploading}
            className="w-full bg-green_1 hover:bg-white hover:text-green_1 hover:border-green_1 text-white font-bold py-3 px-5 border-2 rounded"
          >
            {}
            {modifyProject ? "Modifier le projet" : "Ajouter un projet"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
