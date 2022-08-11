import { FC, useState } from "react";
import {useHistory} from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Login } from '../pages/Login';
import { SignIn } from '../pages/SignIn';

export const SignInHeader: FC = () => {

  const history = useHistory();
  const onClickSignIn = () => history.push("/signIn")
  const onClickLogIn = () => history.push("/LogIn")
  const [login, setLogin] = useState(true);

  return login?(
    <Box>
      <AppBar position="static" >
        <Toolbar sx={{ ml: 50 }}>
          <Button variant="text" color="inherit" onClick={onClickSignIn}>Log in</Button>
        </Toolbar>
      </AppBar>
      <Login />
    </Box>
  ) : ( 
    <Box>
      <AppBar position="static" >
       <Toolbar sx={{ ml: 50 }}>
         <Button variant="text" color="inherit" onClick={onClickLogIn}>Sgin in</Button>
        </Toolbar>
      </AppBar>
      <SignIn />
    </Box>
  )
}