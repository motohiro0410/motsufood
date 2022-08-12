import React, { FC, memo } from "react";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import { grey } from '@mui/material/colors';

export const Footer: FC = memo(() => {

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}
    >
      <BottomNavigation
        showLabels
        sx={{bgcolor: grey[100], height: 70 }}
      >
        <BottomNavigationAction href="/NotEatingCount" label="カウント" icon={<AddBoxIcon />} />
        <BottomNavigationAction href="/input" label="入力" icon={<ModeEditRoundedIcon />} />
        <BottomNavigationAction href="/money" label="食費" icon={<PointOfSaleRoundedIcon />} />
        <BottomNavigationAction href="/group" label="メンバー" icon={<PersonAddRoundedIcon />} />
      </BottomNavigation>
    </Box>
  );
})