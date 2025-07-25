import { Box } from '@mui/material';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>
      <Dashboard /> {/* Only render Dashboard here */}
    </Box>
  );
}