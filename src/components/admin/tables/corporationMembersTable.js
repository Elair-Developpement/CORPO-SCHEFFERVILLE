import { createClient } from "@/utils/supabase/server";

export default async function CorporationMembersTable() {
  const supabase = await createClient();
  const tableName = "members";

  const { data: members, error: membersError } = await supabase
    .from(tableName)
    .select("*")
    .order("section");

  if (membersError) {
    return <div>Erreur lors du chargement des mombres de la corporation.</div>;
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
                <button className="text-blue-600 hover:text-blue-800 mr-2">
                  Modifier
                </button>
                <button className="text-red-600 hover:text-red-800">
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
