import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const getExpenses = async () => {
  const response = await axios.get(`${API_URL}/expenses`);
  return response.data;
};

export const addExpense = async (expense) => {
  const response = await axios.post(`${API_URL}/expenses`, expense);
  return response.data;
};

export const deleteExpense = async (id) => {
  const response = await axios.delete(`${API_URL}/expenses/${id}`);
  return response.data;
};

export const getExpenseStats = async () => {
  const response = await axios.get(`${API_URL}/expenses/stats`);
  return response.data;
};