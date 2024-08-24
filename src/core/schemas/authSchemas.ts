import { z } from 'zod';
import { userRepository } from '../repositories';

export const registerSchema = z
  .object({
    mail: z.string().email().max(62),
    password: z.string().max(100),
  })
  .superRefine(async (data, ctx) => {
    const exists = await userRepository.checkByMail(data.mail);
    if (exists) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Email already exists.',
        path: ['mail'],
      });
    }
  });

export const logInSchema = z.object({
  mail: z.string().email().max(62),
  password: z.string().max(100),
});
