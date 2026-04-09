import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const note = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/note' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const nazo = defineCollection({
  loader: file('./src/content/nazo.yaml'),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string().optional(),
      description: z.string().optional(),
      src: image(),
    }),
});

export const collections = { note, nazo };
