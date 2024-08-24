import express from 'express';
import { ratingController } from '@controllers';
import { createRatingValidation, authenticated } from '@middlewares';

const router = express.Router();

router.post('/', createRatingValidation, authenticated, ratingController.createOne);

export default router;
