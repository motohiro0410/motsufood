import { FC } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';


type Context = {
  title: string;
  handleOpen: () => void;
  userId: number
}


export const MainHeader: FC<Context> = (props) => {

  const { title, handleOpen, userId } = props;

  return (
    <Box>
      <AppBar position="static" >
        <Toolbar>
          <Typography textAlign="center" variant="h6" component="div" sx={{ flexGrow: 1}}>
            {title}
          </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleOpen}
            >
              <AccountCircle  />
            </IconButton>
            <Typography textAlign="center" variant="h6" component="div" sx={{ flexGrow: 1}}>
            {userId}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}