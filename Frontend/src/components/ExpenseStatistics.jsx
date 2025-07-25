import { Grid, Paper, Typography, Box } from '@mui/material';
import { useExpenseStats } from '../hooks/useExpenses';

export default function ExpenseStatistics() {
  const { data: stats, isLoading } = useExpenseStats();

  if (isLoading) return <Typography>Loading statistics...</Typography>;

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Total Expenses</Typography>
          <Typography variant="h4" color="primary">
            ${stats?.total?.toFixed(2) || '0.00'}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Average Daily</Typography>
          <Typography variant="h4" color="secondary">
            ${stats?.average?.toFixed(2) || '0.00'}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">This Month</Typography>
          <Typography variant="h4">
            ${stats?.monthTotal?.toFixed(2) || '0.00'}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}