"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function CustomMap() {
  useEffect(() => {
    if (document.getElementById("map")?.children.length) return;

    const imageBounds = [
      [0, 0], // Coin sud-ouest
      [5275, 8031], // Coin nord-est
    ];

    const map = L.map("map", {
      crs: L.CRS.Simple,
      minZoom: -3,
      maxBounds: [
        [0, 0],
        [5275, 8031],
      ],
      zoomSnap: 0.1,
    });

    map.fitBounds(imageBounds);

    const imageUrl = "/maps/schefferville_map-1.png";

    L.imageOverlay(imageUrl, imageBounds).addTo(map);

    L.marker([500, 500]).addTo(map).bindPopup("You are here!");
  }, []);

  return <div id="map" style={{ height: "vh", width: "100%" }} />;
}
