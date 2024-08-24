import { contentModel } from '@models';
import { AppError } from '@utils';

import type { ContentCreate, ContentUpdate } from '@types';

export const getMany = async () => {
  const contents = await contentModel.findMany();
  if (contents.length === 0) throw new AppError('No content found', 404);
  return contents;
};

export const getById = async (id: string) => {
  const content = await contentModel.findUnique({ where: { id } });
  if (!content) throw new AppError('No content found', 404);
  return content;
};

export const createOne = async (data: ContentCreate) => {
  await contentModel.create({ data });
};

export const updateOne = async (id: string, data: ContentUpdate) => {
  await contentModel.update({ where: { id }, data });
};

export const deleteOne = async (id: string) => {
  await contentModel.delete({ where: { id } });
};
