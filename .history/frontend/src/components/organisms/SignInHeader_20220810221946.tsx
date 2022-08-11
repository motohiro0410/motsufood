import { FC } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const SignInHeader: FC = () => {

  return (
    <Box>
      <AppBar position="static" >
        <Toolbar>
          <Typography textAlign="center" variant="h6" component="div" sx={{ flexGrow: 1}}>
            Sign in
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Log in
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}