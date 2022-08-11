import { FC } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export const SignInHeader: FC = () => {

  return (
    <Box>
      <AppBar position="static" >
        <Toolbar sx={{ ml: 90 }}>
          <Button variant="text" color="inherit">Sign in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}