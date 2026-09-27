import { defineCollection, z } from 'astro:content';

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pageTitle: z.string().optional(),
    subtitle: z.string().optional(),
    type: z.enum(['Talk', 'Publication']),
    date: z.string(),
    timestamp: z.string(),
    description: z.string(),
    links: z.array(
      z.object({
        text: z.string(),
        url: z.string(),
        badge: z.string(),
      })
    ).default([]),
    artifacts: z.array(
      z.object({
        heading: z.string(),
        src: z.string(),
        alt: z.string(),
      })
    ).default([]),
    slides: z.object({
      heading: z.string().default('Presentation Slides'),
      src: z.string(),
    }).optional(),
  }),
});

export const collections = {
  talks,
};
