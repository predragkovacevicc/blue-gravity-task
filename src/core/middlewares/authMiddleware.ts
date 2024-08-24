import { userRepository } from '@repositories';
import { AppError, stripBearerFromToken, decodeToken } from '@utils';

import type { RequestHandler } from 'express';

export const authenticated: RequestHandler = async (req, res, next) => {
  try {
    const token = stripBearerFromToken(req.headers.authorization);

    const { id } = decodeToken(token);
    if (id === undefined) throw new AppError('token not valid', 403);

    req.currentUser = await userRepository.getOneById(id);
    next();
  } catch (err) {
    next(err);
  }
};
