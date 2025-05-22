import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const note = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/note' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

export const collections = { note };
