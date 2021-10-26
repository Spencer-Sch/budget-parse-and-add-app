import { createTheme } from '@material-ui/core';

import { blue } from '@material-ui/core/colors';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: blue[700],
      main: blue[800],
      dark: blue[900],
    },
    secondary: {
      main: blue['A100'],
    },
  },
});

export default theme;
