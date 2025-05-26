"use client";
import Link from "next/link";
import Button from "./Components/button";
import Logo from "./Components/logo";
import ShowCardsCollection from "./Components/conjunto-colecao";
import SearchCardByName from "./Components/card-search";

export default function Home() {
  return (
    <article>
      <header>
        {/* <article className="logo">Logo</article> */}
        <Logo />
        <Link href="/colecao">
          {/* <button className="nav-button">
            <h1>Cartas por Coleção</h1>
          </button> */}
          <Button />
        </Link>
        {/* <article className="search-icon">🔍</article> */}
      </header>

      <main>
        <SearchCardByName />
      </main>
    </article>
  );
}
