import { FC, memo, useState, useEffect } from "react";
import {RouteComponentProps} from 'react-router-dom'
import axios from 'axios';

import { GroupHeader } from "../organisms/GroupHeader";
import { Footer } from "../organisms/Footer";
import { Grid, Typography, Card, Stack, Avatar, CardContent, Button, CircularProgress, Box } from "@mui/material"
import { UserDetailModal } from "../organisms/UserDetailModal";
import { useAllUsers } from "../../apis/useAllUsers";
import { useDleteUser } from "../../apis/useDeleteUser";
import {userDestroy} from "../../urls/Url"

type UserProps = RouteComponentProps<{id: string}>;

export const Users: FC<UserProps> = ({match}) => {
    // モーダルの開閉
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // ユーザー一覧取得
    const { getUsers, loading, setLoading, users } = useAllUsers();
    useEffect(() => getUsers(), [getUsers])
    
    // // ユーザー削除
    // const deleteUser = ({match}: {match: any}) => {
    //   setLoading(true)
    //   axios.delete(userDestroy(match.params.id))
    //     .then((res) => {
    //       console.log(res.data)
    //       // res.data.splice(id, 1)
    //       // setUsers(res.data)
    //     })
    //     // 本来はバリデーションエラーメッセージなどを表示
    //     .catch((e) => console.log(e)
    //     )
    //     .finally(() => setLoading(false))
    //   }

      useEffect(() => console.log(user.id))

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
                    <Button variant="text" size="small">削除</Button>
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