import { useTranslations } from "next-intl";
import { Marker, Popup, Tooltip } from "react-leaflet";

/**
 * Composant qui représente un marqueur sur les cartes de terrains résidentiels et industriels.
 * @param propertyProp Informations sur la propriété en particulier.
 * @param verbose Si vrai, affiche des informations supplémentaires sur la propriété.
 * @returns {JSX.Element} Un Marker de react-leaflet, et son Popup qui contient l'informmation sur la propriété.
 */
export default function HousingMarker({ propertyProp, verbose }) {
  const t = useTranslations("housing");

  return (
    <Marker position={propertyProp.coordinates}>
      <Tooltip className="">
        <div>
          <h1 className="text-xl text-left justify-center font-bold">
            {propertyProp.name}
          </h1>
        </div>
      </Tooltip>
      <Popup className="">
        <div className="flex flex-col items-start">
          <h1 className="text-xl text-left text-green_1 justify-center font-bold">
            {propertyProp.name}
          </h1>
          <div className="text-left text-lg">
            <div className="text-gray-600 font-bold">{propertyProp.adress}</div>
            {verbose && (
              <>
                <div>Lot :</div>
                <div className="text-gray-600 font-bold">
                  {propertyProp.lot_num}
                </div>
                <div>{t("registration-number")}</div>
                <div className="text-gray-600 font-bold">
                  {propertyProp.registration_num}
                </div>
              </>
            )}
            <div>{t("area")}</div>
            <div className="text-gray-600 font-bold">
              {propertyProp.area} m²
            </div>
            <br />
            <div>{propertyProp.purpose}</div>
            {propertyProp.served ? (
              <div>{t("served")}</div>
            ) : (
              <div>{t("not-served")}</div>
            )}
            {propertyProp.notes && (
              <div className="italic">{propertyProp.notes}</div>
            )}
            {propertyProp.price && (
              <>
                <br />
                <div>{t("price")}</div>
                <div className="text-orange_1 font-bold flex">
                  <span>{propertyProp.price} $</span>
                </div>
              </>
            )}
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
