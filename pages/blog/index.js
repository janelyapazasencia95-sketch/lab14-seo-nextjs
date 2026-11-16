import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function getStaticProps() {
  const file = await readFile(path.join(process.cwd(), "data/posts.json"), "utf8");
  const { posts } = JSON.parse(file);
  return { props: { posts }, revalidate: 60 };
}

export default function Blog({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Blog SEO | Guías y Rendimiento Web</title>
        <meta name="description" content="Artículos sobre SEO, imágenes optimizadas y rendimiento con Next.js." />
        <meta property="og:title" content="Blog de SEO Lab" />
        <meta property="og:description" content="Consejos de optimización web y posicionamiento." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>
      <section className="container page">
        <span className="tag">ARTÍCULOS</span>
        <h1>Blog de optimización</h1>
        <p>Recursos para construir aplicaciones más rápidas.</p>
        <div className="cards">
          {posts.map((post) => (
            <article className="card" key={post.slug}>
              <div className="emoji">📘</div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="readlink">
                Leer artículo →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
