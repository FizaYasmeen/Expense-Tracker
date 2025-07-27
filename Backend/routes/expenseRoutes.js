import express from 'express';
import { 
  createExpense, 
  getExpenses, 
  deleteExpense 
} from '../controllers/expenses.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// All routes are protected (require JWT)
router.use(protect);

router.route('/')
  .post(createExpense)
  .get(getExpenses);

router.route('/:id')
  .delete(deleteExpense);

export default router;