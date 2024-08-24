import { contentRepository } from '../repositories';

import type { ContentCreate, ContentUpdate } from '../types';

export const getMany = async () => {
  const contents = await contentRepository.getMany();
  return contents;
};

export const getById = async (id: string) => {
  const content = await contentRepository.getById(id);
  return content;
};

export const createOne = async (data: ContentCreate) => {
  await contentRepository.createOne(data);
};

export const updateOne = async (id: string, data: ContentUpdate) => {
  await contentRepository.updateOne(id, data);
};

export const deleteOne = async (id: string) => {
  await contentRepository.deleteOne(id);
};
