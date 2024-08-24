import { ratingService } from '../services';

import type { RequestHandler } from 'express';

export const createOne: RequestHandler = async (req, res, next) => {
  try {
    await ratingService.createOne(req.body);
    res.status(201).json();
  } catch (err) {
    next(err);
  }
};
