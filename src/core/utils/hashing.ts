import bcrypt from 'bcryptjs';
import AppError from './classes/AppError';

export const checkPassword = async (password: string, usersPassword: string) => {
  const isPasswordCorrect = await bcrypt.compare(password, usersPassword);
  if (!isPasswordCorrect) throw new AppError('wrong password', 401);
};

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(Number(12));
  const hash = await bcrypt.hash(password, salt);
  return hash;
};
