import { FC, memo, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { Footer } from "../layouts/Footer";
import { MainHeader } from "../layouts/MainHeader";
import { UserDetailModal } from "../layouts/UserDetailModal";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { HeaderContext } from '../../providers/HeaderProvider';

export const Count: FC = memo(() => {

  // モーダルの開閉
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const userId = useParams<number>();

  // ヘッダータイトルの変更
  const contexts = useContext(HeaderContext);

  // カウント生成


  return (
    <>
      <MainHeader title={contexts[0].title} handleOpen={handleOpen}/>
        <Grid  alignItems="center" sx={{ mt: 30, ml: 20 }} >
          <Grid item>
            <Button variant="contained" sx={{ bgcolor: '#81da7f', color: "white", fontSize: '30px', width: 200, height: 150 }} >
              user1
            </Button>
          </Grid>
        </Grid>
      <Footer />
      <UserDetailModal open={open} handleClose={handleClose} />
    </>  
    
  )
});