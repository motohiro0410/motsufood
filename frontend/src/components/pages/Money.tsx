import { FC, memo } from "react";

import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { Grid, Typography, Card } from "@mui/material"

export const Money: FC = memo(() => {

  return (
    <>
      <Header />
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
      <Footer />
    </>
    
  )
})