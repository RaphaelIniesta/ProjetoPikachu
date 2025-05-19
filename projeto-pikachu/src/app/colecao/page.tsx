"use client";
import Link from "next/link";

export default function Colecao() {
  return (
    <div>
      <header>
        <div className="logo">Logo</div>
        <h1>Cartas por coleção</h1>
        <div className="search-icon">🔍</div>
      </header>

      <main>
        <section className="colecoes">
          <Link href="/colecao/1">
            <button>Coleção 1</button>
          </Link>
          <Link href="/colecao/2">
            <button>Coleção 2</button>
          </Link>
          <Link href="/colecao/3">
            <button>Coleção 3</button>
          </Link>
          <Link href="/colecao/4">
            <button>Coleção 4</button>
          </Link>
          <Link href="/colecao/5">
            <button>Coleção 5</button>
          </Link>
        </section>

        <section className="cartas">
          <div className="card">Carta</div>
          <div className="card">Carta</div>
          <div className="card">Carta</div>
          <div className="card">Carta</div>
          <div className="card">Carta</div>
          <div className="card">Carta</div>
          <div className="card">Carta</div>
          <div className="card">Carta</div>
          <div className="card">Carta</div>
          <div className="card">Carta</div>
          <div className="card">Carta</div>
          <div className="card">Carta</div>
        </section>
      </main>
    </div>
  );
}
