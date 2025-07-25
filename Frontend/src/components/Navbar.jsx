import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Add } from '@mui/icons-material';

export default function Navbar({ onAddExpenseClick }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Smart Expense Tracker
        </Typography>
        <Button
          color="inherit"
          startIcon={<Add />}
          onClick={onAddExpenseClick}
        >
          Add Expense
        </Button>
      </Toolbar>
    </AppBar>
  );
}