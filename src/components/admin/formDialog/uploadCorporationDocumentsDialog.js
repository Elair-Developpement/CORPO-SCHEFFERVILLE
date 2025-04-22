"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function UploadCorporationDocumentsDialog() {
  const [uploadStatus, setUploadStatus] = useState("");
  const supabase = createClient();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileName = `${Date.now()}-${file.name}`; // Generate a unique file name
    const { error } = await supabase.storage
      .from("corpo-documents") // Replace with your bucket name
      .upload(fileName, file);

    if (error) {
      setUploadStatus("Error uploading file: " + error.message);
    } else {
      setUploadStatus("File uploaded successfully!");
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="hover:underline">
        Ajouter Document
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col container space-y-2">
          <h1 className="text-3xl text-left text-orange_1 justify-center font-bold">
            Nouveau document
          </h1>
          <p className="text-left">
            Pour ajouter un nouveau document, cliquez sur le bouton ci-dessous.
          </p>
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
