import express from 'express';
import { authController } from '../controllers';

const router = express.Router();

router.post('/register', authController.register);
router.post('/logIn', authController.logIn);

export default router;
