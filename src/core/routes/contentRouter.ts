import express from 'express';
import { contentController } from '../controllers';

const router = express.Router();

router.get('/', contentController.getMany);
router.post('/', contentController.createOne);

router.get('/:id', contentController.getById);
router.patch('/:id', contentController.updateOne);
router.delete('/:id', contentController.deleteOne);

export default router;
