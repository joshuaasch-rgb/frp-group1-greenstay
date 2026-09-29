import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One file per chapter page in src/content/chapters/.
 * The file name becomes the URL, e.g. introduction.mdx -> /introduction/
 */
const chapters = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/chapters' }),
  schema: z.object({
    title: z.string(),
    /** Chapter number shown in the header, e.g. 1. Leave out for References. */
    number: z.number().optional(),
    /** Position in the page order (Home = 0). */
    order: z.number(),
    /** Short introduction under the title. */
    lead: z.string(),
    /** Optional status label: "draft" or "coming-later". */
    status: z.enum(['draft', 'coming-later']).optional(),
    statusLabel: z.string().optional(),
    /** Key of a photo in src/data/photos.json. */
    photo: z.string().optional(),
    /** Show the "On this page" table of contents. */
    toc: z.boolean().default(true),
  }),
});

export const collections = { chapters };
