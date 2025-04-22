import { createClient } from "@/lib/supabase/server";

export default async function NewslettersTable() {
  const supabase = await createClient();
  const bucketId = "newsletters";

  const { data, error } = await supabase.storage.from(bucketId).list();

  if (error) {
    return <div>Erreur lors du chargement des documents.</div>;
  }

  const documentsList = data.map((doc) => ({
    name: doc.name,
    url: supabase.storage.from(bucketId).getPublicUrl(doc.name).data.publicUrl,
  }));

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
          {documentsList.map((doc) => (
            <tr key={doc.name} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">{doc.name}</td>
              <td className="px-6 py-4 border-b">
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Télécharger
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
