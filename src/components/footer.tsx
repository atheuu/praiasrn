import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Praias RN</h2>
            <p className="text-sm text-gray-600">
              Seu guia completo para descobrir as maravilhas do litoral Potiguar.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pontos-turisticos"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Pontos Turísticos
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurantes"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Restaurantes
                </Link>
              </li>
              <li>
                <Link
                  href="/pousadas"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Pousadas
                </Link>
              </li>
              <li>
                <Link
                  href="/esportes"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Esportes
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos"
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Receba novidades e dicas sobre o litoral do RN.
            </p>
            <form className="space-y-2">
              <Input type="email" placeholder="Seu e-mail" className="w-full" />
              <Button className="w-full">Inscrever-se</Button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Praias RN. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
