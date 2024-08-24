import jwt from 'jsonwebtoken';
import AppError from './classes/AppError';
import { tokenConfig } from '../../config';

export const createToken = (id: string) => {
  if (tokenConfig.secret === undefined) throw new AppError('Server misconfigured. Missing JWT secret.', 500);
  const token = jwt.sign({ id }, tokenConfig.secret, { expiresIn: tokenConfig.duration });
  return token;
};
