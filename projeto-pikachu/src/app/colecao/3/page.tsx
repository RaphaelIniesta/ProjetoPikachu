export default function Colecao3() {
  const cartas = Array.from({length: 12}, (_, i) => `Carta ${i + 1}`);

return (
    <main>
      <h2>Coleção 3</h2>
      <section className="cartas">
        {cartas.map((carta, index) => (
          <div className="card" key={index}>{carta}</div>
        ))}
      </section>
    </main>
  );
}