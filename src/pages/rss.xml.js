import rss from "@astrojs/rss";
import { getPosts } from "../lib/posts";

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: "Local Angle",
    description:
      "Writing from Local Angle, a consultancy and product lab helping news organizations apply emerging technologies in ways that align with journalistic values.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}`,
    })),
  });
}
