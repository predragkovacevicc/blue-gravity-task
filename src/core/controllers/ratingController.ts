import { RequestHandler } from 'express';
import { ratingService } from '../services';

export const createOne: RequestHandler = async (req, res, next) => {
  try {
    await ratingService.createOne(req.body);
    res.status(201).json();
  } catch (err) {
    next(err);
  }
};
