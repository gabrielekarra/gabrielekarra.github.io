"use client";

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl"; // import the mapbox library
import "mapbox-gl/dist/mapbox-gl.css"; // import the mapbox styles

mapboxgl.accessToken = "pk.eyJ1IjoiZ2FicmllbGVrYXJyYSIsImEiOiJjbTNvaXF1NTAwM2gyMmtzZGV2dnByYTByIn0.BVIhm3cdNphfUd7Vtps6OQ"; 

interface MapProps {
  lng: number;
  lat: number;
  zoom?: number;
  pitch?: number;
}

export default function Map3d({ lng, lat, zoom = 16, pitch = 55 }: Readonly<MapProps>) {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      center: [lng, lat],
      zoom: zoom,
      pitch: pitch,
      bearing: 15, 
    });

    // Add Marker
    map.current.on("load", () => {
      const el = document.createElement("span");
      el.className = "map-marker";
      if (map.current) {
        map.current.setConfigProperty('basemap', 'lightPreset', 'night');
        new mapboxgl.Marker({ element: el }).setLngLat([lng, lat]).addTo(map.current);
      }
      startRotation();
    });

    // Cleanup on component unmount
    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
      if (map.current) map.current.remove();
    };
  }, []);

  const startRotation = () => {
    let bearing = 15; // Starting bearing value
    const rotate = () => {
      if (!map.current) return;

      bearing = (bearing + 0.1) % 360; // Increment and loop bearing
      map.current.setBearing(bearing); // Set map bearing

      animationFrame.current = requestAnimationFrame(rotate); // Schedule next frame
    };

    rotate();
  };

  return (
    <div
      className="overflow-clip rounded-lg"
      style={{ height: "100%", width: "100%" }}
    >
      <div ref={mapContainer} className="map-container h-full w-full" />
    </div>
  );
}