import { FC, memo, useState, useEffect } from "react";
import {RouteComponentProps, useHistory} from 'react-router-dom'
import axios from 'axios';

import { GroupHeader } from "../organisms/GroupHeader";
import { Footer } from "../organisms/Footer";
import { Grid, Typography, Card, Stack, Avatar, CardContent, Button, CircularProgress, Box } from "@mui/material"
import { UserDetailModal } from "../organisms/UserDetailModal";
import { useAllUsers } from "../../apis/useAllUsers";
import { useDleteUser } from "../../apis/useDeleteUser";
import {userDestroy} from "../../urls/Url"
import { User } from "../../types/Types";

export const Users: FC<User> = () => {
    // モーダルの開閉
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // ユーザー一覧取得
    const { getUsers, loading, users } = useAllUsers();
    useEffect(() => getUsers(), [getUsers])
    
    //編集ページに移動
    const history = useHistory();
    const onClickMoveEdit = () => {
      history.push("/users/:id/edit")
    }


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
            {users.map((user) => (
              <Grid item xs={3} sm={3} key={user.id}>
                <Card sx={{ height: 150 }}>
                  <Stack alignItems="center" direction="column">
                    <Avatar sx={{mt: 2}}>H</Avatar>
                    <CardContent>
                      <Typography>
                        {user.name}
                      </Typography>
                    </CardContent>
                    <Button variant="text" size="small" >編集</Button>
                  </Stack>
                </Card>
              </Grid> 
            ))}
          </Grid>
          <Footer />
          <UserDetailModal open={open} handleClose={handleClose} />
        </>
      )}
    </>
  )
}