import './App.css';
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router/Router";
import { ThemeProvider } from '@mui/system';
import { theme } from './theme/theme';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { HeaderProvider } from "./providers/HeaderProvider"

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <HeaderProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </HeaderProvider>
      </ThemeProvider>
    </LocalizationProvider>

    
  );
}

export default App;
