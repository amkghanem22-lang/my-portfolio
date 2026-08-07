import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
	schema: z.object({
		company: z.string(),
		title: z.string(),
		startDate: z.string(),
		endDate: z.string(),
		summary: z.string(),
		highlights: z.array(z.string()),
		order: z.number(),
	}),
});

const snapshots = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/snapshots' }),
	schema: z.object({
		company: z.string(),
		role: z.string(),
		tags: z.array(z.string()),
		summary: z.string(),
		metrics: z.array(
			z.object({
				value: z.string(),
				label: z.string(),
			})
		),
		order: z.number(),
	}),
});

export const collections = { experience, snapshots };
