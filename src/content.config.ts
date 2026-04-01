import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    technologies: z.array(z.string()),
    date: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
