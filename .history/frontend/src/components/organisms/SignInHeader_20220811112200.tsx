import { FC, useState } from "react";
import {useHistory} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

type Props = {
  login: boolean;
} 

export const SignInHeader: FC<Props> = (props) => {

  const history = useHistory();
  const onClickSignIn = () => history.push("/signIn")
  const onClickLogIn = () => history.push("/LogIn")

  const { login } = props;

  return login?(
    <Box>
      <AppBar position="static" >
        <Toolbar sx={{ ml: 50 }}>
          <Button variant="text" color="inherit" onClick={onClickSignIn}>Log in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  ) : ( 
    <Box>
      <AppBar position="static" >
       <Toolbar sx={{ ml: 50 }}>
         <Button variant="text" color="inherit" onClick={onClickLogIn}>Sgin in</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}