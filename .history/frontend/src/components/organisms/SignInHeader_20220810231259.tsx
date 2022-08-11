import { FC } from "react";
import { useHistory } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export const SignInHeader: FC = () => {
  const history = useHistory();
  const onClickSignIn = () => history.push("/signIn")

  return (
    <Box>
      <AppBar position="static" >
        <Toolbar sx={{ ml: 50 }}>
          <Button variant="text" color="inherit" onClick={onClickSignIn}>Sign in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}