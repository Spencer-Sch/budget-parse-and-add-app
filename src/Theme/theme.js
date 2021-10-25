import { createTheme } from '@material-ui/core';

import { blue } from '@material-ui/core/colors';

const theme = createTheme({
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
