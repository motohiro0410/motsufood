import { FC, memo } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

export const Header: FC = memo(() => {
  return (
    <Box>
      <AppBar position="static" >
        <Toolbar>
          <ArrowBackRoundedIcon />
          <Typography textAlign="center" variant="h6" component="div" sx={{ flexGrow: 1}}>
            ◯月
          </Typography>
          <ArrowForwardRoundedIcon />
        </Toolbar>
      </AppBar>
    </Box>
  )
})