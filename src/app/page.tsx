import { SearchBar } from "@/components/search-bar";
import { FeaturedPlaces } from "@/components/featured-places";
import { MapSection } from "@/components/map-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/pexels-murilo-fonseca-123879922-10647766.jpg"
            alt="Praias do RN"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Descubra o Paraíso no RN
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore as mais belas praias, pousadas, restaurantes e pontos
            turísticos do litoral do Rio Grande do Norte.
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Featured Places Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Lugares em Destaque</h2>
          <Button variant="ghost" className="hidden sm:flex items-center">
            Ver todos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <FeaturedPlaces />
      </section>

      {/* Quick Links Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que você procura?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Restaurantes",
                description: "Descubra a gastronomia local",
                href: "/restaurantes",
              },
              {
                title: "Pousadas",
                description: "Encontre onde se hospedar",
                href: "/pousadas",
              },
              {
                title: "Pontos Turísticos",
                description: "Conheça lugares incríveis",
                href: "/pontos-turisticos",
              },
              {
                title: "Esportes",
                description: "Pratique kitesurf e surf",
                href: "/esportes",
              },
            ].map((item) => (
              <Button
                key={item.title}
                variant="outline"
                className="h-auto p-6 flex flex-col items-center text-center hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href={item.href}>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Explore o Litoral</h2>
        <MapSection />
      </section>
    </div>
  );
}
