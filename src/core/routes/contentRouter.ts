import express from 'express';
import { contentController } from '../controllers';
import { createContentValidation, updateContentValidation } from '../middlewares';

const router = express.Router();

router.get('/', contentController.getMany);
router.post('/', createContentValidation, contentController.createOne);

router.get('/:id', contentController.getById);
router.patch('/:id', updateContentValidation, contentController.updateOne);
router.delete('/:id', contentController.deleteOne);

export default router;
