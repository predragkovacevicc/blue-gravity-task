import { userRepository } from '../repositories';
import { checkPassword, hashPassword, createToken } from '../utils';

import type { UserCreate, LogInData } from '../types';

export const register = async (data: UserCreate) => {
  const hashedPassword = await hashPassword(data.password);

  const user = await userRepository.createOne({ ...data, password: hashedPassword });

  const token = createToken(user.id);
  return { token };
};

export const logIn = async (data: LogInData) => {
  const user = await userRepository.getOneByMail(data.mail);

  await checkPassword(data.password, user.password);

  const token = createToken(user.id);
  return { token };
};
