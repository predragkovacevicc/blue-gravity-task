import { authService } from '../services';

import type { RequestHandler } from 'express';

export const register: RequestHandler = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

export const logIn: RequestHandler = async (req, res, next) => {
  try {
    const result = await authService.logIn(req.body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
