import { MapContainer, ImageOverlay } from "react-leaflet";
import { CRS } from "leaflet";
import "leaflet/dist/leaflet.css";

const imageBounds = [
  [0, 0],
  [5275, 9923],
];
const imageUrl = "/maps/schefferville_map-industrial.png";

export default function IndustrialLeafletMap() {
  return (
    <MapContainer
      crs={CRS.Simple}
      minZoom={-3}
      maxBounds={imageBounds}
      zoom={0}
      style={{ height: "vh", width: "100%" }}
      bounds={imageBounds}
      zoomSnap={0.1}
    >
      <ImageOverlay url={imageUrl} bounds={imageBounds} />
    </MapContainer>
  );
}
