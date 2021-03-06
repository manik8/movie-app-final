import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import './index.css';
import theme from './theme';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme.default}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
