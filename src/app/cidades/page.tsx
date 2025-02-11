import { supabase } from "@/lib/supabaseClient";

export const revalidate = 60; // Revalida os dados a cada 60 segundos (ISR)

export default async function CitiesPage() {
  // Buscando todas as cidades da tabela 'cidades'
  const { data: cidades, error } = await supabase
    .from("cidades")
    .select("*");

  if (error) {
    return (
      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Cidades Litorâneas do RN</h1>
        <p>Erro ao carregar cidades: {error.message}</p>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Cidades Litorâneas do RN</h1>
      {cidades && cidades.length > 0 ? (
        <ul className="space-y-4">
          {cidades.map((cidade: { id: number; nome: string; descricao?: string }) => (
            <li key={cidade.id} className="p-4 border rounded hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold">{cidade.nome}</h2>
              {cidade.descricao && <p className="text-gray-600">{cidade.descricao}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma cidade encontrada.</p>
      )}
    </main>
  );
}
