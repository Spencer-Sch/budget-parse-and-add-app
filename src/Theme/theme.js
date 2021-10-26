import { createTheme } from '@material-ui/core';

import { blue, lightBlue } from '@material-ui/core/colors';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: lightBlue[700],
      main: lightBlue[800],
      dark: lightBlue[900],
    },
    secondary: {
      main: blue[300],
      light: blue[100],
    },
  },
});

export default theme;
