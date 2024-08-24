import express from 'express';
import { authController } from '../controllers';
import { registerValidation, logInValidation } from '../middlewares';

const router = express.Router();

router.post('/register', registerValidation, authController.register);
router.post('/logIn', logInValidation, authController.logIn);

export default router;
