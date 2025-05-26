"use client";

import pokemon from "pokemontcgsdk";
import { useEffect, useState } from "react";

pokemon.configure({ apiKey: "98b33a77-3bd4-4673-a0e0-c2aa9e97f2be" });

export default function SearchCardByName() {
  const [searchTerm, setSearchTerm] = useState("");
  const [card, setCard] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const result = await pokemon.card.all({ q: `name:"${searchTerm}"` });

      if (result.length > 0) {
        setCard(result[0]); // pega apenas a primeira carta encontrada
      } else {
        setCard(null);
      }
    } catch (error) {
      console.error("Erro ao buscar carta:", error);
      setCard(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <article>
        <input
          type="text"
          placeholder="Digite o nome da carta (ex: Pikachu)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}> 🔍 </button>
      </article>

      {loading ? (
        <p>Buscando carta...</p>
      ) : card ? (
        <article>
          <img src={card.images.small} alt={card.name} />
        </article>
      ) : (
        <p> Procure por uma carta </p>
      )}
    </section>
  );
}
