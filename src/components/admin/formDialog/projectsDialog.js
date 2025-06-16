"use client";

import { useState, useEffect } from "react";

import { createClient } from "@/lib/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ProjectsDialog({ onSuccess }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [infoLink, setInfoLink] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const supabase = createClient();

  // Fetch enum values for category
  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase.rpc("get_activity_categories"); // or use meta query if you have
      if (!error) setCategories(data);
    }
    fetchCategories();
  }, []);

  // Handle file upload
  async function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const filePath = `documents/communal-life/${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("documents")
      .upload(`communal-life/${Date.now()}-${file.name}`, file);
    setUploading(false);
    if (!error) {
      const { data: publicUrl } = supabase.storage
        .from("documents")
        .getPublicUrl(`communal-life/${Date.now()}-${file.name}`);
      setInfoLink(publicUrl.publicUrl);
    }
  }

  // Handle form submit
  async function handleSubmit(e) {
    e.preventDefault();
    const { error } = await supabase
      .from("activities")
      .insert([{ name, category, info_link: infoLink }]);
    if (!error && onSuccess) onSuccess();
  }

  return (
    <Dialog>
      <DialogTitle className="sr-only">Ajouter un document</DialogTitle>
      <DialogTrigger asChild className="hover:underline bg-green_2 text-white">
        <Button variant="outline">Téléverser un document</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Activity Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div>
            <input
              type="url"
              placeholder="Info Link (URL)"
              value={infoLink}
              onChange={(e) => setInfoLink(e.target.value)}
              disabled={uploading}
            />
            <span>or</span>
            <input
              type="file"
              accept="application/pdf,image/*"
              onChange={handleFileUpload}
              disabled={uploading}
            />
            {uploading && <span>Uploading...</span>}
          </div>
          <button type="submit" disabled={uploading}>
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
