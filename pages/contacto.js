import Head from "next/head";
import Layout from "../components/Layout";

export default function Contacto() {
  return (
    <Layout>
      <Head>
        <title>Contacto | SEO Lab</title>
        <meta name="description" content="Conoce la página de contacto del proyecto SEO Lab desarrollado con Next.js." />
        <meta property="og:title" content="Contacto - SEO Lab" />
        <meta property="og:description" content="Información del proyecto de optimización SEO con Next.js." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>
      <section className="container page">
        <span className="tag">CONTACTO</span>
        <h1>Conoce nuestro proyecto</h1>
        <p>
          Proyecto académico de Desarrollo de Aplicaciones Web Avanzado,
          enfocado en optimización y posicionamiento SEO.
        </p>
        <div className="card contact">
          <h2>Laboratorio N.º 14</h2>
          <p>Tecnología: Next.js y React</p>
          <p>Temas: SEO, Sitemap, imágenes y rendimiento.</p>
        </div>
      </section>
    </Layout>
  );
}
