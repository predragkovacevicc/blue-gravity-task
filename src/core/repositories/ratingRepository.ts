import { Rating } from '../models';

import type { RatingCreate } from '../types';

export const createOne = async (data: RatingCreate) => {
  await Rating.create({ data });
};
