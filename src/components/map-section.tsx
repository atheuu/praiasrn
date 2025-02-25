"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

declare global {
  interface Window {
    initMap: () => void;
  }
}

export function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: -5.7793, lng: -35.2009 },
          zoom: 8,
          restriction: {
            latLngBounds: {
              north: -4.5,
              south: -6.5,
              west: -37.5,
              east: -34.8,
            },
            strictBounds: true,
          },
          styles: [
            { featureType: "road", stylers: [{ visibility: "off" }] },
            { featureType: "poi.business", stylers: [{ visibility: "off" }] },
            { featureType: "transit", stylers: [{ visibility: "off" }] },
            { featureType: "administrative", stylers: [{ visibility: "off" }] },
            {
              featureType: "landscape.man_made",
              stylers: [{ visibility: "off" }],
            },
          ],
        });

        const locations = [
          { position: { lat: -6.2308, lng: -35.0486 }, title: "Praia de Pipa" },
          {
            position: { lat: -5.6213, lng: -35.2055 },
            title: "Praia de Genipabu",
          },
          {
            position: { lat: -5.1234, lng: -35.6357 },
            title: "São Miguel do Gostoso",
          },
          {
            position: { lat: -5.45, lng: -35.25 },
            title: "Parrachos de Maracajaú",
          },
          {
            position: { lat: -5.5146, lng: -35.2625 },
            title: "Ponte Newton Navarro (Ponto Turístico)",
          },
        ];

        locations.forEach((location) => {
          new google.maps.Marker({
            position: location.position,
            map,
            title: location.title,
          });
        });
      }
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;

    window.initMap = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Card className="p-4">
      <div
        ref={mapRef}
        className="w-full h-[400px] rounded-lg"
        suppressHydrationWarning
      />
    </Card>
  );
}
