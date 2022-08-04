import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router/Router";
import { ThemeProvider } from '@mui/system';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
