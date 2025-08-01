import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import {
  MapContainer,
  ImageOverlay,
  useMapEvents,
} from "react-leaflet";
import { CRS } from "leaflet";

import HousingMarker from "@/components/map/mapComponents/housingMarker";

const imageBounds = [
  [0, 0],
  [5275, 9923],
];
const customCenter = [0, 0];
const imageUrl = "/maps/schefferville_map-industrial.png";

function ClickHandler() {
  useMapEvents({
    click(e) {
      console.log("Clicked coordinates:", e.latlng);
    },
  });
  return null;
}

export default function IndustrialLeafletMap({ industrialPropertiesProp }) {
  return (
    <MapContainer
      crs={CRS.Simple}
      minZoom={-3}
      maxBounds={imageBounds}
      zoom={-1}
      style={{ height: "vh", width: "100%" }}
      bounds={imageBounds}
      zoomSnap={0.1}
    >
      <ImageOverlay url={imageUrl} bounds={imageBounds} />
      {industrialPropertiesProp.map((property) => (
        <HousingMarker key={property.lot_num} propertyProp={property} verbose={true} />
      ))}
      <ClickHandler />
    </MapContainer>
  );
}
