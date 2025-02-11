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
    // Função de inicialização do mapa
    const initMap = () => {
      if (mapRef.current) {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: -5.7793, lng: -35.2009 }, 
          zoom: 10,
          styles: [
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
            },
          ],
        });

        // Adiciona marcadores para locais em destaque
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

    // Carrega o script do Google Maps
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&callback=initMap`;
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
      <div ref={mapRef} className="w-full h-[400px] rounded-lg" />
    </Card>
  );
}
