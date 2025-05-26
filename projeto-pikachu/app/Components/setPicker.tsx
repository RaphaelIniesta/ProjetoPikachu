'use client'

import pokemon from 'pokemontcgsdk'
import { useEffect, useState } from "react";

pokemon.configure({ apiKey: "98b33a77-3bd4-4673-a0e0-c2aa9e97f2be" });

export default function SetPicker({ onSetChange }: { onSetChange: (id: string) => void }) {
    const [sets, setSets] = useState<any[]>([]);

  useEffect(() => {
    const fetchSets = async () => {
      const result = await pokemon.set.all();
      setSets(result);
      onSetChange(result[0].id);
    };
    fetchSets();
  }, [onSetChange]);

  return (
    <select
      onChange={(e) => onSetChange(e.target.value)}
      className="border px-3 py-2 rounded mb-6"
    >
      {sets.map((set) => (
        <option key={set.id} value={set.id}>
          {set.name}
        </option>
      ))}
    </select>
  );
}