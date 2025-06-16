import { DownloadIcon } from "@radix-ui/react-icons";

/**
 * Composant qui représente une activité dans le tableau des activités.
 * Si l'activité posssède un lien, affiche une icône de téléchargement et permet de cliquer pour télécharger le fichier.
 * @param activity L'activité
 * @return {JSX.Element} Un a si il y a un lien ou bien un div si il n'y en a pas.
 */
export default function ActivityListItem({ activity }) {
  if (activity.info_link) {
    return (
      <a
        href={activity.info_link}
        className="hover:underline cursor-pointer flex items-center gap-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{activity.name}</span>
        <DownloadIcon />
      </a>
    );
  }
  return <div>{activity.name}</div>;
}
