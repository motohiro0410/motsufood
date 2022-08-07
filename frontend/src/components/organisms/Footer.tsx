import React, { FC, memo } from "react";

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
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
        <BottomNavigationAction href="/home" label="ホーム" icon={<HomeRoundedIcon />} />
        <BottomNavigationAction href="/calender" label="カレンダー" icon={<CalendarMonthRoundedIcon />} />
        <BottomNavigationAction href="/money" label="食費" icon={<PointOfSaleRoundedIcon />} />
        <BottomNavigationAction href="/group" label="グループ" icon={<PersonAddRoundedIcon />} />
      </BottomNavigation>
    </Box>
  );
})
