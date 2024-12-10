import { defineCollection, z } from 'astro:content';

const noteCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  note: noteCollection,
};
