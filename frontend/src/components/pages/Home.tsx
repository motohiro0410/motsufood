import { FC, memo } from "react";

import { Footer } from "../organisms/Footer";
import { MainHeader } from "../organisms/MainHeader";

import Button from '@mui/material/Button';

export const Home: FC = memo(() => {
  return (
    <>
      <MainHeader />
        <Button variant="contained" sx={{ bgcolor: '#81da7f', top: 300, left: '30%', width: 300, height: 150, color: "white", fontSize: '30px'  }}>user1</Button>
      <Footer />
    </>  
    
  )
});