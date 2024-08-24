import { z } from 'zod';

export const createRatingSchema = z.object({
  rate: z.number().int().min(1).max(5),
  user_id: z.string().uuid(),
  content_id: z.string().uuid(),
});
