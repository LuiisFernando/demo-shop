import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styles/global';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
