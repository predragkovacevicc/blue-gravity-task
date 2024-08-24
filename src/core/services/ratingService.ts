import { ratingRepository } from '../repositories';

import type { RatingCreate } from '../types';

export const createOne = async (data: RatingCreate) => {
  await ratingRepository.createOne(data);
};
