import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

import { ThemeProvider } from '@mui/system';
import { theme } from './theme/theme';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { HeaderProvider } from "./providers/HeaderProvider"
import { UsersProvider } from "./providers/UsersProvider"
import { UserProvider } from "./providers/UserProvider"

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <UsersProvider>
          <UserProvider>
            <HeaderProvider>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </HeaderProvider>
          </UserProvider>
        </UsersProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
