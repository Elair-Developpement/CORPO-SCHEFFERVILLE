import {useTranslations} from "next-intl";

export default function BusinessCard( businessProp ) {
    const t = useTranslations("business")

    return(
        <div className="mb-2">
            <h3 className="text-lg font-semibold text-blue_2">{businessProp.name}</h3>
            { businessProp.category && (
                <p className="italic">{businessProp.category}</p>
            )}
            { businessProp.address && (
                <a href={'https://maps.google.com/?q='+businessProp.address} target="_blank" className="underline hover:cursor-pointer hover:text-orange_1">{businessProp.address}</a>
            )}
            { businessProp.contact_name_1 && (
                <div>
                <span>{t("contact")}</span>
                <span className="">{businessProp.contact_name_1}</span>
                </div>
            )}
            { businessProp.phone_1 && (
                <div>
                    <span>{t("phone")}</span>
                    <a href={'tel:'+businessProp.phone_1} target="_blank" className="underline hover:cursor-pointer hover:text-orange_1">{businessProp.phone_1}</a>
                </div>
            )}
            { businessProp.fax && (
                <div>
                    <span>{t("fax")}</span>
                    <span className="">{businessProp.fax}</span>
                </div>
            )}
            { businessProp.email_1 && (
                <div>
                    <span>{t("email")}</span>
                    <a href={'mailto:'+businessProp.email_1} target="_blank" className="underline hover:cursor-pointer hover:text-orange_1">{businessProp.email_1}</a>
                </div>
            )}
            { businessProp.website && (
                <div>
                    <span>{t("website")}</span>
                    <a href={'https://'+businessProp.website} target="_blank" className="underline hover:cursor-pointer hover:text-orange_1">{businessProp.website}</a>
                </div>
            )}
        </div>
    )
}