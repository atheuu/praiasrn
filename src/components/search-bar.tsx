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
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl mx-auto">
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-full sm:w-[200px]">
          <SelectValue placeholder="Categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos</SelectItem>
          <SelectItem value="restaurantes">Restaurantes</SelectItem>
          <SelectItem value="pousadas">Pousadas</SelectItem>
          <SelectItem value="pontos-turisticos">Pontos Turísticos</SelectItem>
          <SelectItem value="esportes">Esportes</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Buscar lugares, praias, estabelecimentos..."
          className="w-full h-10 pl-4 pr-12 rounded-md border border-input bg-background"
        />
        <Button size="icon" className="absolute right-1 top-1">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
