import { FC, memo, useContext, useState } from "react";

import { Footer } from "../organisms/Footer";
import { MainHeader } from "../organisms/MainHeader";

import ButtonBase from '@mui/material/ButtonBase';
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
        <ButtonBase sx={{ m: 30 }}>
          <Button variant="contained" sx={{ bgcolor: '#81da7f', color: "white", fontSize: '30px'  }}>user1</Button>
        </ButtonBase>
      <Footer />
      <UserDetailModal open={open} handleClose={handleClose} />
    </>  
    
  )
});