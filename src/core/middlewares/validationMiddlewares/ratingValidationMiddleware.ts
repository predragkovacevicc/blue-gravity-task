import { createRatingSchema } from '../../schemas';

import type { RequestHandler } from 'express';

export const createRatingValidation: RequestHandler = async (req, res, next) => {
  try {
    createRatingSchema.parse(req.body);
    next();
  } catch (err) {
    next(err);
  }
};
