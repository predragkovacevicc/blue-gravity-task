import { registerSchema, logInSchema } from '../../schemas';

import type { RequestHandler } from 'express';

export const registerValidation: RequestHandler = async (req, res, next) => {
  try {
    registerSchema.parse(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

export const logInValidation: RequestHandler = async (req, res, next) => {
  try {
    logInSchema.parse(req.body);
    next();
  } catch (err) {
    next(err);
  }
};
