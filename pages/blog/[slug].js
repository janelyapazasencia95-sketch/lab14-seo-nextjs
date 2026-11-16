import Head from "next/head";
import Layout from "../../components/Layout";
import { readFile } from "node:fs/promises";
import path from "node:path";

async function getPosts() {
  const file = await readFile(path.join(process.cwd(), "data/posts.json"), "utf8");
  return JSON.parse(file).posts;
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: "blocking"
  };
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) return { notFound: true };
  return { props: { post }, revalidate: 60 };
}

export default function Article({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title} | SEO Lab</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="article" />
      </Head>
      <article className="container page article">
        <span className="tag">GUÍA SEO</span>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </Layout>
  );
}
