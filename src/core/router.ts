import { authRouter, contentRouter, ratingRouter } from '@routes';

import type { Express } from 'express';

export default (app: Express): void => {
  const base = '/api/v1';

  app.use(`${base}/auth`, authRouter);
  app.use(`${base}/content`, contentRouter);
  app.use(`${base}/rating`, ratingRouter);
};
