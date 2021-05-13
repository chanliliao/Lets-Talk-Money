import express from 'express';
const router = express.Router();
import {
  deleteTransaction,
  createTransaction,
} from '../controllers/transactionController.js';

router.route('/').post(createTransaction);
router.route('/:id').delete(deleteTransaction);

export default router;
