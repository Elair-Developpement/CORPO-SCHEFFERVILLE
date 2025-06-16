"use client";

import { useState, useEffect } from "react";

import { createClient } from "@/lib/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function NewslettersDialog({ onSuccess, dialogTrigger }) {
  const supabase = createClient();
  const bucketId = "newsletters";
  const tableName = "newsletters";

  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [uploading, setUploading] = useState(false);

  // Handle file upload
  async function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const filePath = `${Date.now()}-${file.name}`;

    setUploading(true);
    const { data, error } = await supabase.storage
      .from(bucketId)
      .upload(filePath, file);
    setUploading(false);

    if (!error) {
      const { data: publicUrl } = supabase.storage
        .from(bucketId)
        .getPublicUrl(filePath);
      setLink(publicUrl.publicUrl);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Insert new project
    const { error } = await supabase.from(tableName).insert([{ name, link }]);
    if (!error && onSuccess) onSuccess();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-orange_1 font-bold">
            Téléverser une infolettre
          </DialogTitle>
          <DialogDescription className="text-lg">
            "Pour ajouter une nouvelle infolettre, veuillez sélectionner le
            fichier à téléverser en cliquant ci-dessous."
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Nom de l'infolettre
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
            <label htmlFor="file" className="block">
              Fichier d'infolettre
            </label>
            <input
              type="file"
              name="file"
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
            Nouvelle infolettre
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
