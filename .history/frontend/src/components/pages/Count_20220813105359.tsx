import { FC, memo, useContext, useState } from "react";

import { Footer } from "../organisms/Footer";
import { MainHeader } from "../organisms/MainHeader";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { HeaderContext } from '../../providers/HeaderProvider';
import { UserDetailModal } from "../organisms/UserDetailModal";

type Props ={
  userId: string
}

export const Count: FC<Props> = memo((props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { match } = props;

  const contexts = useContext(HeaderContext);

  return (
    <>
      <MainHeader title={contexts[0].title} handleOpen={handleOpen} match={match} />
        <Grid  alignItems="center" sx={{ mt: 30, ml: 20 }} >
          <Grid item>
            <Button variant="contained" sx={{ bgcolor: '#81da7f', color: "white", fontSize: '30px', width: 200, height: 150 }}>user1</Button>
          </Grid>
        </Grid>
      <Footer />
      <UserDetailModal open={open} handleClose={handleClose} />
    </>  
    
  )
});