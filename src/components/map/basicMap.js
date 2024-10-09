"use client";

import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import MapboxGl from "mapbox-gl";

MapboxGl.accessToken =
  "pk.eyJ1IjoiZWxhaXJkZXZlbG9wcGVtZW50IiwiYSI6ImNtMjBzZmd4YzBraHoya3BwNjRrY2Vzd2oifQ.JC1gP29LYgmbH99547I8aQ";

const Map = () => {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(-66.8175);
  const [lat, setLat] = useState(54.805);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (!mapContainerRef.current) return; // If no ref, exit
    const map = new MapboxGl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    return () => map.remove();
  }, []);

  return <div ref={mapContainerRef} className={"w-full"} />;
};

export default dynamic(() => Promise.resolve(Map), { ssr: false });
