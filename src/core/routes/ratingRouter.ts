import express from 'express';
import { ratingController } from '../controllers';
import { authenticated } from '../middlewares';

const router = express.Router();

router.post('/', authenticated, ratingController.createOne);

export default router;
