import { FC, memo, useContext, useState } from "react";

import { Footer } from "../organisms/Footer";
import { MainHeader } from "../organisms/MainHeader";

import Grid from '@mui/material/Grid';
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
        <Grid  alignItems="center" sx={{ mt: 40, ml: 25 }} >
          <Grid item sx={{ width: 50, height: 50 }}>
            <Button variant="contained" sx={{ bgcolor: '#81da7f', color: "white", fontSize: '30px'  }}>user1</Button>
          </Grid>
        </Grid>
      <Footer />
      <UserDetailModal open={open} handleClose={handleClose} />
    </>  
    
  )
});