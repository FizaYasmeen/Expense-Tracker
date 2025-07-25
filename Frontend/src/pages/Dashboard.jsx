import { useState } from 'react';
import { Box } from '@mui/material';
import ExpenseStatistics from '../components/ExpenseStatistics';
import ExpenseChart from '../components/ExpenseChart';
import ExpenseList from '../components/ExpenseList';
import AddExpenseModal from '../components/AddExpenseModal';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onAddExpenseClick={() => setModalOpen(true)} />
      <Box sx={{ p: 3 }}>
        <ExpenseStatistics />
        <ExpenseChart />
        <ExpenseList />
      </Box>
      <AddExpenseModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}