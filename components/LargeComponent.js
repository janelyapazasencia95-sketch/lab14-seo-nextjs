export default function LargeComponent() {
  return (
    <section className="card feature">
      <span className="tag">LAZY LOADING</span>
      <h2>Contenido cargado dinámicamente</h2>
      <p>
        Este componente se importa mediante next/dynamic para
        demostrar la carga diferida de componentes.
      </p>
    </section>
  );
}
