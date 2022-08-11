import { FC } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const SignInHeader: FC = () => {

  return (
    <Box>
      <AppBar position="static" >
        <Toolbar>
        <Button variant="text">Sign in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}