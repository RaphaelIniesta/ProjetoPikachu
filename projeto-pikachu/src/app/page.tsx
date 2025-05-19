"use client";
import Link from "next/link";
import Button from "./Components/button";
import Logo from "./Components/logo";

export default function Home() {
  return (
    <article>
      <header>
        {/* <article className="logo">Logo</article> */}
        <Logo />
        <Link href="/colecao">
          {/* <button className="nav-button">
            <h1>Cartas por coleção</h1>
          </button> */}
          <Button />
        </Link>
        <article className="search-icon">🔍</article>
      </header>

      <main>
        <article className="main-card">
          <p>Carta</p>
        </article>
      </main>
    </article>
  );
}
