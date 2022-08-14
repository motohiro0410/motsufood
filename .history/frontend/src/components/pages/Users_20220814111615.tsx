import { FC, memo, useState, useEffect } from "react";

import { GroupHeader } from "../organisms/GroupHeader";
import { Footer } from "../organisms/Footer";
import { Grid, Typography, Card, Stack, Avatar, CardContent, Button, CircularProgress, Box } from "@mui/material"
import { UserDetailModal } from "../organisms/UserDetailModal";
import { useAllUsers } from "../../apis/useAllUsers";



export const Users: FC = memo(() => {
    // モーダルの開閉
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { getUsers, loading, users } = useAllUsers();
    

    useEffect(() => getUsers(), [])

  return (
    <>
      {loading ? (
        <Box textAlign="center" sx={{ mt: "50%" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <GroupHeader  handleOpen={handleOpen} />
          <Grid container justifyContent="center" spacing={3} sx={{ mt: 20 }} wrap="wrap" >
            {users.map((user) => {
              <Grid item xs={3} sm={3} key={user.id}>
                <Card sx={{ height: 150 }}>
                  <Stack alignItems="center" direction="column">
                    <Avatar sx={{mt: 2}}>H</Avatar>
                    <CardContent>
                      <Typography>
                        {user.name}
                      </Typography>
                    </CardContent>
                    <Button variant="text" size="small">削除</Button>
                  </Stack>
                </Card>
              </Grid> 
            })}
          </Grid>
          <Footer />
          <UserDetailModal open={open} handleClose={handleClose} />
        </>
      )}
    </>
  )
})