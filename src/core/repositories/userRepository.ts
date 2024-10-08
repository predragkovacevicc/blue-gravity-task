import { userModel } from '@models';
import { AppError } from '@utils';

import type { UserCreate } from '@types';

export const getOneById = async (id: string) => {
  const user = await userModel.findUnique({ where: { id } });
  if (!user) throw new AppError('No user found', 404);
  return user;
};

export const getOneByMail = async (mail: string) => {
  const user = await userModel.findUnique({ where: { mail } });
  if (!user) throw new AppError('No user found', 404);
  return user;
};

export const checkByMail = async (mail: string) => {
  const user = await userModel.findUnique({ where: { mail } });
  return Boolean(user);
};

export const createOne = async (data: UserCreate) => {
  const user = await userModel.create({ data });
  return user;
};
