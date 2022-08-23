import { FC, useState, useEffect } from "react";

import { GroupHeader } from "../organisms/GroupHeader";
import { Footer } from "../organisms/Footer";
import { Grid, Typography, Card, Stack, Avatar, CardContent, CircularProgress, Box, Button } from "@mui/material"
import { UserDetailModal } from "../organisms/UserDetailModal";
import { useAllUsers } from "../../apis/useAllUsers";
import { useEditUser } from "../../apis/useEditUser";
import { useDleteUser } from "../../apis/useDeleteUser";

export const Users: FC = () => {
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
    const { deleteUser } = useDleteUser();

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
      )}
    </>
  )
}