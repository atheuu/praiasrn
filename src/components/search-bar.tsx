"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SearchBar() {
  const [category, setCategory] = useState("todos");

  return (
    <div className="flex items-center flex-col sm:flex-row gap-4 w-full max-w-3xl mx-auto">
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-full sm:w-[200px] text-white">
          <SelectValue placeholder="Categoria" className="placeholder:text-white" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos</SelectItem>
          <SelectItem value="restaurantes">Restaurantes</SelectItem>
          <SelectItem value="pousadas">Pousadas</SelectItem>
          <SelectItem value="pontos-turisticos">Pontos Turísticos</SelectItem>
          <SelectItem value="esportes">Esportes</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex-1 relative flex items-center">
        <input
          type="text"
          placeholder="Buscar lugares, praias, estabelecimentos..."
          className="w-full h-10 pl-12 pr-20 rounded-md border border-input bg-background"
        />
        <Button
          size="icon"
          className="absolute right-2 h-9 w-9" // Ajuste fino de posicionamento
        >
          <Search className="h-4 w-4" />
        </Button>
        {/* Ícone de busca na esquerda (adicione se necessário) */}
        <Search className="absolute left-4 h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
}
