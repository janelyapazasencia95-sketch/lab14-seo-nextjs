import { JSONFilePreset } from "lowdb/node";

export default async function handler(req, res) {
  const db = await JSONFilePreset("data/posts.json", { posts: [] });
  await db.read();
  res.status(200).json({
    total: db.data.posts.length,
    posts: db.data.posts
  });
}
