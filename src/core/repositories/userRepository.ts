import { User } from '../models';
import { AppError } from '../utils';

import type { UserCreate } from '../types';

export const getOneByMail = async (mail: string) => {
  const user = await User.findUnique({ where: { mail } });
  if (!user) throw new AppError('No user found', 404);
  return user;
};

export const createOne = async (data: UserCreate) => {
  const user = await User.create({ data });
  return user;
};
