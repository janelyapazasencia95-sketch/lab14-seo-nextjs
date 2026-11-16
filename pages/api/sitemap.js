import { JSONFilePreset } from "lowdb/node";

export default async function handler(req, res) {
  const db = await JSONFilePreset("data/posts.json", { posts: [] });
  await db.read();

  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://lab14-seo-nextjs-ten.vercel.app"
  ).replace(/\/$/, "");

  const urls = [
    "/",
    "/blog",
    "/contacto",
    ...db.data.posts.map((post) => `/blog/${encodeURIComponent(post.slug)}`)
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${baseUrl}${url}</loc></url>`).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(sitemap);
}
