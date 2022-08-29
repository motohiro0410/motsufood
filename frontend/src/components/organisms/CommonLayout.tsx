import * as React from "react"
import { Container, Grid } from "@mui/material"
// import { makeStyles } from "@material-ui/core/styles"

import { AuthHeader } from "../layouts/AuthHeader";

// const useStyles = makeStyles(() => ({
//   container: {
//     marginTop: "3rem"
//   }
// }))

interface CommonLayoutProps {
  children: React.ReactElement
}

// 全てのページで共通となるレイアウト
export const CommonLayout = ({ children }: CommonLayoutProps) => {
  // const classes = useStyles()

  return (
    <>
      <header>
        <AuthHeader />
      </header>
      <main>
        <Container maxWidth="lg">
          <Grid container justifyContent="center">
            <Grid item>
              {children}
            </Grid>   
          </Grid>
        </Container>
      </main>
    </>
  )
}
