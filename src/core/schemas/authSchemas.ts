import { z } from 'zod';

export const registerSchema = z.object({
  mail: z.string().email().max(62),
  password: z.string().max(100),
});

export const logInSchema = z.object({
  mail: z.string().email().max(62),
  password: z.string().max(100),
});
