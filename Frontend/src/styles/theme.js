// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//       contrastText: '#fff',
//     },
//     secondary: {
//       main: '#dc004e',
//       contrastText: '#fff',
//     },
//     background: {
//       default: '#f5f5f5',
//       paper: '#fff',
//     },
//   },
//   typography: {
//     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//     h4: {
//       fontWeight: 600,
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           textTransform: 'none',
//         },
//       },
//     },
//   },
// });

// export default theme; // This is the crucial change
import { createTheme } from '@mui/material/styles';

const theme = createTheme({ 
  palette: { primary: { main: '#1976d2' } } 
});

export default theme; 