import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";

const DynamicComponent = dynamic(
  () => import("../components/LargeComponent"),
  {
    ssr: false,
    loading: () => <p>Cargando componente...</p>
  }
);

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Inicio | SEO Lab - Optimización Web</title>
        <meta name="description" content="Aprende SEO, optimización de imágenes, meta tags y rendimiento web utilizando Next.js." />
        <meta name="keywords" content="Next.js, SEO, optimización web, rendimiento" />
        <meta property="og:title" content="SEO Lab - Optimización Web" />
        <meta property="og:description" content="Descubre técnicas para optimizar sitios web con Next.js." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="hero">
        <div>
          <span className="tag">LABORATORIO N.º 14</span>
          <h1>Optimiza tu web. <span>Mejora tu alcance.</span></h1>
          <p>
            Aprende a mejorar el posicionamiento, la velocidad
            y la experiencia de usuario con Next.js.
          </p>
          <Link href="/blog" className="button">Explorar contenidos →</Link>
        </div>
        <Image
          src="/images/seo-image.png"
          width={800}
          height={400}
          alt="Ilustración optimizada sobre posicionamiento SEO"
          priority
          className="heroImage"
        />
      </section>

      <section className="container">
        <h2>¿Qué aprenderás?</h2>
        <div className="cards">
          <article className="card">
            <div className="emoji">🔍</div>
            <h3>Meta Tags</h3>
            <p>Optimiza títulos y descripciones para buscadores y redes sociales.</p>
          </article>
          <article className="card">
            <div className="emoji">🗺️</div>
            <h3>Sitemap XML</h3>
            <p>Facilita el descubrimiento de las páginas de tu sitio.</p>
          </article>
          <article className="card">
            <div className="emoji">⚡</div>
            <h3>Rendimiento</h3>
            <p>Optimiza imágenes, fuentes y carga de componentes.</p>
          </article>
        </div>
        <DynamicComponent />
      </section>
    </Layout>
  );
}
