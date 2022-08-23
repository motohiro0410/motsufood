import { FC, memo, useState, useEffect } from "react";

import { GroupHeader } from "../organisms/GroupHeader";
import { Footer } from "../organisms/Footer";
import { Grid, Typography, Card } from "@mui/material"
import { UserDetailModal } from "../organisms/UserDetailModal";
import { fetchUsers } from "../../apis/users";

export const Users: FC = memo(() => {
    // モーダルの開閉
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
      fetchUsers()
      .then ((data) =>
        console.log(data)
      )
    })

  return (
    <>
      <GroupHeader  handleOpen={handleOpen} />
        <Grid container justifyContent="center" spacing={3} sx={{ mt: 20 }} wrap="wrap" >
            <Grid item sm={4}>
              <Card sx={{ height: 150 }}>
                <Typography textAlign="center" sx={{ mt: 6 }}>
                  user1
                </Typography>
              </Card>
            </Grid> 
            <Grid item sm={3}>
              <Card sx={{ height: 150 }}>
                <Typography textAlign="center" sx={{ mt: 6 }}>
                  user2
                </Typography>
              </Card>
            </Grid>
            <Grid item sm={3}>
              <Card sx={{ height: 150 }}>
                <Typography textAlign="center" sx={{ mt: 6 }}>
                  user3
                </Typography>
              </Card>
            </Grid>
          </Grid>
      <Footer />
      <UserDetailModal open={open} handleClose={handleClose} />
    </>
    
  )
})