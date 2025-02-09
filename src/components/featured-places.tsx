"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";

const featuredPlaces = [
  {
    id: 1,
    title: "Praia de Pipa",
    description:
      "Uma das praias mais famosas do RN, conhecida por suas falésias e golfinhos.",
    image:
      "/pexels-murilo-fonseca-123879922-10647766.jpg",
    category: "Ponto Turístico",
    rating: 4.9,
    location: "Tibau do Sul",
  },
  {
    id: 2,
    title: "Praia de Genipabu",
    description: "Famosa por seus passeios de buggy e dromedários nas dunas.",
    image:
      "/pexels-murilo-fonseca-123879922-10647766.jpg",
    category: "Ponto Turístico",
    rating: 4.8,
    location: "Extremoz",
  },
  {
    id: 3,
    title: "São Miguel do Gostoso",
    description:
      "Paraíso dos esportes náuticos, especialmente kitesurf e windsurf.",
    image:
      "/pexels-murilo-fonseca-123879922-10647766.jpg",
    category: "Esportes",
    rating: 4.7,
    location: "São Miguel do Gostoso",
  },
];

export function FeaturedPlaces() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredPlaces.map((place) => (
        <Card
          key={place.id}
          className="overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48">
            <Image
              src={place.image}
              alt={place.title}
              fill
              className="object-cover"
            />
            <Badge className="absolute top-4 left-4">{place.category}</Badge>
          </div>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{place.title}</span>
              <span className="flex items-center text-sm">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                {place.rating}
              </span>
            </CardTitle>
            <CardDescription className="flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              {place.location}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">{place.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
