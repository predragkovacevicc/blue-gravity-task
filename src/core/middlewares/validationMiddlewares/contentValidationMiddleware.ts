import { createContentSchema, updateContentSchema } from '../../schemas';

import type { RequestHandler } from 'express';

export const createContentValidation: RequestHandler = async (req, res, next) => {
  try {
    createContentSchema.parse(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

export const updateContentValidation: RequestHandler = async (req, res, next) => {
  try {
    updateContentSchema.parse(req.body);
    next();
  } catch (err) {
    next(err);
  }
};
