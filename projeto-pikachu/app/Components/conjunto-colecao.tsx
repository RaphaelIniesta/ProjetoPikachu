"use client";

import pokemon from "pokemontcgsdk";
import { useEffect, useState } from "react";

pokemon.configure({ apiKey: "98b33a77-3bd4-4673-a0e0-c2aa9e97f2be" });

export default function ShowCardsCollection() {
  const [sets, setSets] = useState<any[]>([]);
  const [selectedSetId, setSelectedSetId] = useState("");
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Carrega os sets ao iniciar
  useEffect(() => {
    const fetchSets = async () => {
      try {
        const result = await pokemon.set.all();
        setSets(result);
        if (result.length > 0) {
          setSelectedSetId(result[0].id);
        }
      } catch (error) {
        console.error("Erro ao buscar sets:", error);
      }
    };
    fetchSets();
  }, []);

  // Carrega os cards do set selecionado
  useEffect(() => {
    if (!selectedSetId) return;

    const fetchCards = async () => {
      setLoading(true);
      try {
        const result = await pokemon.card.all({ q: `set.id:${selectedSetId}` });
        setCards(result);
      } catch (error) {
        console.error("Erro ao buscar cards:", error);
        setCards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [selectedSetId]);

  return (
    <main>
      <section>
        <select
          value={selectedSetId}
          onChange={(e) => setSelectedSetId(e.target.value)}
          className="border px-3 py-2 rounded mb-6"
        >
          {sets.map((set) => (
            <option key={set.id} value={set.id}>
              {set.name}
            </option>
          ))}
        </select>
      </section>
      <section className="cartas">
        {cards && cards.length > 0 ? (
          cards.map((card: any) => (
            <section key={card.id}>
              <img src={card.images.small} alt={card.name} />
            </section>
          ))
        ) : (
          <p> Nenhum set carregado </p>
        )}
      </section>
    </main>
  );
}
