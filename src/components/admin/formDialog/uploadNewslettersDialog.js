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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UploadNewslettersDialog({ bucketId }) {
  const [uploadStatus, setUploadStatus] = useState("");
  const supabase = createClient();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileName = `${file.name}`;
    const { error } = await supabase.storage
      .from(bucketId)
      .upload(fileName, file);

    if (error) {
      setUploadStatus("Error uploading file: " + error.message);
    } else {
      setUploadStatus("File uploaded successfully!");
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="hover:underline bg-green_2 text-white my-2"
      >
        <Button variant="outline">Téléverser un document</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl text-orange_1 font-bold">
            Ajouter une infolettre
          </DialogTitle>
          <DialogDescription className="text-lg">
            Pour ajouter une nouvelle infolettre, veuillez sélectionner le
            fichier à téléverser en cliquant ci-dessous.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col container space-y-2">
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="fileInput"
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
          >
            Ajouter un document
          </label>
          {uploadStatus && <p className="mt-2">{uploadStatus}</p>}
        </div>
      </DialogContent>
    </Dialog>
  );
}
