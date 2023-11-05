import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
         fontFamily: 'Poppins, sans-serif',
    },
    palette: {
      primary: {
        main: '#000000', // Your primary color
      },
      secondary: {
        main: '#161618', // Your secondary color
      },
      tertiary: {
        main: '#FFC872', // Your secondary color
      },
      quarternary: {
        main: '#FFE3B3', // Your secondary color
      },
      button: {
        main: '#00000F'
      }
    },
  });

  export default theme;