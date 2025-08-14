import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, ImageOverlay, useMapEvents } from "react-leaflet";
import { CRS } from "leaflet";

import HousingMarker from "@/components/map/mapComponents/housingMarker";

const imageBounds = [
  [0, 0],
  [5275, 8031],
];
const customCenter = [2150, 3800];
const imageUrl = "/maps/schefferville_map-central.png";

function ClickHandler() {
  useMapEvents({
    click(e) {
      console.log("Clicked coordinates:", e.latlng);
    },
  });
  return null;
}

export default function CentralLeafletMap({ centralPropertiesProp }) {
  return (
    <MapContainer
      crs={CRS.Simple}
      minZoom={-2.25}
      maxBounds={imageBounds}
      center={customCenter}
      zoom={-1.5}
      style={{ height: "vh", width: "100%" }}
      bounds={imageBounds}
      zoomSnap={0.1}
    >
      <ImageOverlay url={imageUrl} bounds={imageBounds} />
      {centralPropertiesProp.map((property) => (
        <HousingMarker
          key={property.lot_num}
          propertyProp={property}
          verbose={false}
        />
      ))}
      <ClickHandler />
    </MapContainer>
  );
}
