import { z } from 'zod';

const CategorySchema = z.enum(['GAME', 'VIDEO', 'ARTWORK', 'MUSIC']);

export const createContentSchema = z.object({
  title: z.string().max(150),
  description: z.string(),
  category: CategorySchema,
  thumbnail_url: z.string().url().max(255),
  content_url: z.string().url().max(255),
});

export const updateContentSchema = z.object({
  title: z.string().max(150).optional(),
  description: z.string().optional(),
  category: CategorySchema.optional(),
  thumbnail_url: z.string().url().max(255).optional(),
  content_url: z.string().url().max(255).optional(),
});
