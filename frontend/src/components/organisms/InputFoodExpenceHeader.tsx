import { FC, memo } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

export const InputFoodExpenceHeader: FC = memo(() => {
  return (
    <Box>
      <AppBar position="static" >
        <Toolbar>
          <Typography textAlign="center" variant="h6" component="div" sx={{ flexGrow: 1}}>
            食費入力
          </Typography>
          <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
})