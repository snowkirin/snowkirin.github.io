import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			// 태그와 카테고리
			tags: z.array(z.string()).default([]),
			category: z.string().default('general'),
			// 시리즈: 시리즈명과 순서
			series: z
				.object({
					name: z.string(),
					order: z.number().int().nonnegative().default(0),
				})
				.optional(),
		}),
});

const categories = defineCollection({
	loader: glob({ base: './src/content/categories', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		name: z.string(),
		description: z.string().optional(),
	}),
});

export const collections = { blog, categories };
