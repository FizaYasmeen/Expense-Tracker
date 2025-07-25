import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useExpenses, useDeleteExpense } from '../hooks/useExpenses';
import { format } from 'date-fns';

export default function ExpenseList() {
  const { data: expenses, isLoading } = useExpenses();
  const { mutate: deleteExpense } = useDeleteExpense();

  if (isLoading) return <Typography>Loading expenses...</Typography>;
  if (!expenses || expenses.length === 0) {
    return <Typography>No expenses found. Add your first expense!</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense._id}>
              <TableCell>
                {format(new Date(expense.date), 'MMM dd, yyyy')}
              </TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell align="right">
                ${expense.amount.toFixed(2)}
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() => deleteExpense(expense._id)}
                  color="error"
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}