import { FC, memo, useContext, useState } from "react";

import { Footer } from "../organisms/Footer";
import { MainHeader } from "../organisms/MainHeader";

import Button from '@mui/material/Button';
import { HeaderContext } from '../../providers/HeaderProvider';
import { UserDetailModal } from "../organisms/UserDetailModal";

export const NotEatingCount: FC = memo(() => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const contexts = useContext(HeaderContext);
  return (
    <>
      <MainHeader title={contexts[0].title} handleOpen={handleOpen} />
        <Button variant="contained" sx={{ bgcolor: '#81da7f', top: 300, left: '30%', width: 300, height: 150, color: "white", fontSize: '30px'  }}>user1</Button>
      <Footer />
      <UserDetailModal open={open} handleClose={handleClose} />
    </>  
    
  )
});