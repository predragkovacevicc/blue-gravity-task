import { ratingRepository } from '@repositories';

export const createOne = async (data: { rate: number; content_id: string }, user_id: string) => {
  await ratingRepository.createOne({ ...data, user_id });
};
