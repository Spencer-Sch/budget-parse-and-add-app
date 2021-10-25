import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './Theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
