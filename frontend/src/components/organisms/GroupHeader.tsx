import { FC, memo } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconBuuton from '@mui/material/IconButton';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

type Props = {
  handleOpen: () => void
}

export const GroupHeader: FC<Props> = memo((props) => {
  const { handleOpen } = props;

  return (
    <Box>
      <AppBar position="static"  >
        <Toolbar>
        <IconBuuton>
            <AddCircleOutlineIcon fontSize="large" />
          </IconBuuton>
          <Typography textAlign="center" variant="h6" component="div" sx={{ flexGrow: 1}}>
            メンバー一覧
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
        </Toolbar>
      </AppBar>
    </Box>
  )
})