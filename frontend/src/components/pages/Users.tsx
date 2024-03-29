import { FC, useState, useEffect, useContext } from "react";

import { GroupHeader } from "../layouts/GroupHeader";
import { Footer } from "../layouts/Footer";
import { Grid, Typography, Card, Stack, Avatar, CardContent, CircularProgress, Box, Button } from "@mui/material"
import { UserDetailModal } from "../layouts/UserDetailModal";
import { useAllUsers } from "../../apis/useAllUsers";
import { useEditUser } from "../../apis/useEditUser";
import { useDleteUser } from "../../apis/useDeleteUser";
import { AuthContext } from "../../router/Router";
import { AuthHeader } from "../layouts/AuthHeader"
import { HeaderContext } from '../../providers/HeaderProvider';

export const Users: FC = () => {

  const contexts = useContext(HeaderContext);

  const { isSignedIn, currentUser } = useContext(AuthContext)

    // モーダルの開閉
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // ユーザー一覧取得
    const { getUsers, loading, users } = useAllUsers();
    useEffect(() => getUsers(), [])

    // ユーザー編集画面に遷移
    const { MoveEditPage } = useEditUser();
    // ユーザー削除
    const { deleteUser } = useDleteUser(getUsers);

  return (
    <>
      {loading ? (
        <Box textAlign="center" sx={{ mt: "50%" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
        {
          isSignedIn && currentUser ? (
            <>
              <AuthHeader title={contexts[3].title} />
              {/* <GroupHeader  handleOpen={handleOpen} /> */}
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
                          </Stack>
                          <Stack direction="row">
                            <Button onClick={() => MoveEditPage(user.id)}>編集</Button>
                            <Button onClick={() => deleteUser(user.id)}>削除</Button>
                          </Stack>
                      </Card>
                    </Grid> 
                  ))}
                </Grid>
                <Footer />
                <UserDetailModal open={open} handleClose={handleClose} />
            </>
          ) : (
            <h1>Not signed in</h1>
          )
        }
        </>
      )}
    </>
  )
}