import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getExpenses,
  addExpense,
  deleteExpense,
  getExpenseStats
} from '../api/expenseApi';

 export const useExpenses = () => {
  return useQuery({
    queryKey: ['expenses'],
    queryFn: getExpenses,
  });
};

export const useAddExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(['expenses']);
      queryClient.invalidateQueries(['stats']);
    },
  });
};

export const useDeleteExpense = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(['expenses']);
      queryClient.invalidateQueries(['stats']);
    },
  });
};

export const useExpenseStats = () => {
  return useQuery({
    queryKey: ['stats'],
    queryFn: getExpenseStats,
  });
}
