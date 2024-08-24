import { Rating } from '@models';

import type { RatingCreate } from '@types';

export const createOne = async (data: { rate: number; content_id: string; user_id: string }) => {
  const formattedData: RatingCreate = {
    rate: data.rate,
    User: { connect: { id: data.user_id } },
    Content: { connect: { id: data.content_id } },
  };

  await Rating.create({ data: formattedData });
};
