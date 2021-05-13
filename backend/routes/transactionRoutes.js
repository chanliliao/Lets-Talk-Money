import express from 'express';
const router = express.Router();
import {
  deleteTransaction,
  addTransaction,
} from '../controllers/productController.js';

router.route('/').post(addTransaction);
router.route('/:id').delete(deleteTransaction);

// add and delete routes

export default router;
