"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Compass,
  MapPin,
  UtensilsCrossed,
  Hotel,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Pontos Turísticos", href: "/pontos-turisticos", icon: Compass },
    { name: "Restaurantes", href: "/restaurantes", icon: UtensilsCrossed },
    { name: "Pousadas", href: "/pousadas", icon: Hotel },
    { name: "Esportes", href: "/esportes", icon: Waves },
    { name: "Blog", href: "/blog", icon: MapPin },
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Praias RN
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
