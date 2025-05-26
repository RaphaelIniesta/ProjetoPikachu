"use client";
import Link from "next/link";
import ShowCardsCollection from "../Components/conjunto-colecao";
import SetPicker from "../Components/setPicker";
import { useEffect, useState } from "react";
import Logo from "../Components/logo";

export default function Colecao() {
  const [selectedSet, setSelectedSet] = useState("");

  return (
    <div>
      <header>
        <Link href="/" className="logo">
          {/* <img src="./Components/logo.png" alt="Logo" className="logo-img" /> */}
          <Logo />
        </Link>
        <h1 className="titulo">Cartas por coleção</h1>
      </header>

      <main>
        <ShowCardsCollection />
      </main>
    </div>
  );
}
