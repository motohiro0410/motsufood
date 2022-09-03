import { FC, memo, useContext, useState } from "react";


import { Footer } from "../layouts/Footer";
import { AuthHeader } from "../layouts/AuthHeader";
import { Grid, Typography, Card } from "@mui/material";
import { HeaderContext } from '../../providers/HeaderProvider';
import { InputExpenceModal } from "../layouts/InputExpenceModal";
import { AuthContext } from "../../router/Router";

export const Money: FC = memo(() => {
  
  const contexts = useContext(HeaderContext);

  const { isSignedIn, currentUser } = useContext(AuthContext)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffectで合計金額と分配金額の計算

  return (
    <>
      {isSignedIn && currentUser ? (
        <>
      <AuthHeader title={contexts[2].title} />
        <Grid container direction="column" alignItems="center" mt={20}>
          <Grid item mb={5}>
            <Typography variant="h4">
              食費合計
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">
              〇〇円
            </Typography>
          </Grid>

          <Grid container justifyContent="center" spacing={3} sx={{ mt: 10 }}>
            <Grid item xs={3}>
              <Card sx={{ height: 150 }}>
                <Typography textAlign="center" sx={{ mt: 1 }}>
                  user1
                </Typography>
                <Typography textAlign="center" sx={{ mt: 4 }} variant="h5">
                  〇〇円
                </Typography>
              </Card>
            </Grid> 
            <Grid item xs={3}>
              <Card sx={{ height: 150 }}>
                <Typography textAlign="center" sx={{ mt: 1 }}>
                  user2
                </Typography>
                <Typography textAlign="center" sx={{ mt: 4 }} variant="h5">
                  〇〇円
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card sx={{ height: 150 }}>
                <Typography textAlign="center" sx={{ mt: 1 }}>
                  user3
                </Typography>
                <Typography textAlign="center" sx={{ mt: 4 }} variant="h5">
                  〇〇円
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      <InputExpenceModal open={open} handleClose={handleClose} />
      <Footer />
      </>
      ) : (
        <h1>Not signed in</h1>
      )
      }
    </>
  )
})
