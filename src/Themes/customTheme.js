import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
         fontFamily: 'Poppins, sans-serif',
    },
    palette: {
      primary: {
        main: '#006BBB', // Your primary color
      },
      secondary: {
        main: '#30A0E0', // Your secondary color
      },
      tertiary: {
        main: '#FFC872', // Your secondary color
      },
      quarternary: {
        main: '#FFE3B3', // Your secondary color
      },
    },
  });

  export default theme;