import { Container, Grid } from "@mui/material"
import { AuthHeader } from "./AuthHeader";

interface CommonLayoutProps {
  children: React.ReactElement
}

// 全てのページで共通となるレイアウト
export const AuthCommonLayout = ({ children }: CommonLayoutProps) => {

  // return (
  //   <>
  //     <header>
  //       <AuthHeader />
  //     </header>
  //     <main>
  //       <Container maxWidth="lg">
  //         <Grid container justifyContent="center" sx={{mt: 5}}>
  //           <Grid item>
  //             {children}
  //           </Grid>   
  //         </Grid>
  //       </Container>
  //     </main>
  //   </>
  // )
}
