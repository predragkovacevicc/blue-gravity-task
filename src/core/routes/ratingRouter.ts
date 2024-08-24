import express from 'express';
import { ratingController } from '../controllers';

const router = express.Router();

router.post('/', ratingController.createOne);

export default router;
