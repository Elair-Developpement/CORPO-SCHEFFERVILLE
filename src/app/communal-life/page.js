import { useEffect, useState } from "react";
import PageTitleAndDescription from "@/components/common/pageTitleAndDescription";
import { createClient } from "@/utils/supabase/client";

export default function Communal_life() {
    const [activities, setActivities] = useState({
        ongoing: [],
        available: [],
        developing: [],
    });

    useEffect(() => {
        async function fetchActivities() {
            const supabase = createClient();
            const { data, error } = await supabase.from("activities").select("*");

            if (error) {
                console.error("Erreur lors de l'obtention des activités", error);
                return;
            }

            const categorizedActivities = {
                ongoing: data.filter(activity => activity.category === "ongoing"),
                available: data.filter(activity => activity.category === "available"),
                developing: data.filter(activity => activity.category === "developing"),
            };

            setActivities(categorizedActivities);
        }

        fetchActivities();
    }, []);

    return (
        <main className={"container mx-auto min-h-[calc(100vh-249.27px)] flex flex-col"}>
            <PageTitleAndDescription
                title={"Loisir, vie communautaire et culturelle, saines habitudes"}
                description={
                    "Nous souhaitons enrichir l’offre aux citoyens en matière de loisirs, de sport, de plein\n" +
                    "air, d’activités culturelles et communautaires et de saines habitudes de vie. Des\n" +
                    "activités sont en cours, peut-être souhaitez-vous démarrer un projet ou encore vous\n" +
                    "informer sur les équipements disponibles et en développement."
                }
            />
            <button
                className={
                    "self-center bg-green_1 hover:bg-white hover:text-green_1 hover:border-green_1 text-white font-bold py-3 px-5 border-2 rounded"
                }
            >
                Démarrer un projet
            </button>
            <div className={"flex flex-col py-5"}>
                <div className={"flex bg-orange_2 p-2 text-white"}>
                    <div className={"flex w-full justify-between"}>
                        <div className={"flex text-xl font-bold"}>Activités en cours</div>
                        <div className={"flex-col text-right"}>
                            {activities.ongoing.map(activity => (
                                <div key={activity.id}>{activity.name}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={"flex p-2"}>
                    <div className={"flex w-full justify-between"}>
                        <div className={"flex text-xl font-bold"}>Équipements disponibles</div>
                        <div className={"flex-col text-right"}>
                            {activities.available.map(activity => (
                                <div key={activity.id}>{activity.name}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={"flex bg-orange_2 p-2 text-white"}>
                    <div className={"flex w-full justify-between"}>
                        <div className={"flex text-xl font-bold"}>En développement</div>
                        <div className={"flex-col text-right"}>
                            {activities.developing.map(activity => (
                                <div key={activity.id}>{activity.name}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
