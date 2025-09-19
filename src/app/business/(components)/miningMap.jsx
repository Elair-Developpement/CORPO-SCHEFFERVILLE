"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, ImageOverlay, useMapEvents } from "react-leaflet";
import { CRS } from "leaflet";

const imageBounds = [
  [0, 0],
  [3400, 2200],
];
const customCenter = [3000, 1700];
const imageUrl = "/maps/mining-projects-map.png";

export default function MiningMap() {
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
    </MapContainer>
  );
}
