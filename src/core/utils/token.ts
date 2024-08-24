import jwt from 'jsonwebtoken';
import AppError from './classes/AppError';
import { tokenConfig } from '@config';

import type { TokenPayload } from '@types';

export const createToken = (id: string) => {
  if (tokenConfig.secret === undefined) throw new AppError('Server misconfigured. Missing JWT secret.', 500);
  const token = jwt.sign({ id }, tokenConfig.secret, { expiresIn: tokenConfig.duration });
  return token;
};

export const decodeToken = (token: string) => {
  if (tokenConfig.secret === undefined) throw new AppError('Server misconfigured. Missing JWT secret.', 500);
  const decodedToken = jwt.verify(token, tokenConfig.secret) as TokenPayload;
  return decodedToken;
};

export const stripBearerFromToken = (authorizationHeader: string | undefined) => {
  if (authorizationHeader === undefined) throw new AppError('not logged in', 401);
  return authorizationHeader.split(' ')[1];
};
