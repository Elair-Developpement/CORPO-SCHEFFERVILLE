import { useTranslations } from "next-intl";
import { Marker, Popup, Tooltip } from "react-leaflet";

export default function HousingMarker({ propertyProp, verbose }) {
  const t = useTranslations("housing");
  console.log("Received props:", propertyProp);
  console.log("Marker coordinates:", propertyProp.coordinates);
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
            <div>{propertyProp.notes}</div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
