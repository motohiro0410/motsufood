import { FC } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

type Props = {
  onClickLogIn: () => void;
  onClickSignIn: () => void;
}

export const SignInHeader: FC<Props> = (props) => {

  const { onClickLogIn, onClickSignIn } = props;

  return (
    <Box>
      <AppBar position="static" >
        <Toolbar sx={{ ml: 50 }}>
          <Button variant="text" color="inherit" onClick={onClickLogIn}>Sign in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}