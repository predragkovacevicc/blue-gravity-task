import { Content } from '@models';
import { AppError } from '@utils';

import type { ContentCreate, ContentUpdate } from '@types';

export const getMany = async () => {
  const contents = await Content.findMany();
  if (contents.length === 0) throw new AppError('No content found', 404);
  return contents;
};

export const getById = async (id: string) => {
  const content = await Content.findUnique({ where: { id } });
  if (!content) throw new AppError('No content found', 404);
  return content;
};

export const createOne = async (data: ContentCreate) => {
  await Content.create({ data });
};

export const updateOne = async (id: string, data: ContentUpdate) => {
  await Content.update({ where: { id }, data });
};

export const deleteOne = async (id: string) => {
  await Content.delete({ where: { id } });
};
