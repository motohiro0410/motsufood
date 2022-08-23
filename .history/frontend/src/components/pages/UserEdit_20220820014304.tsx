import { useContext, useState, FC } from "react"
import {RouteComponentProps} from 'react-router-dom'

import { TextField, Button, Stack } from "@mui/material";
import Box from '@mui/material/Box';
import { HeaderContext } from '../../providers/HeaderProvider';
import { MainHeader } from '../organisms/MainHeader';
import { useUpdateUser } from '../../apis/useUpdateUser'

type PageProps = {} & RouteComponentProps<{id: string}>;

export const UserEdit: FC<PageProps> = ({match}) => {

    // ヘッダータイトルの変更
    const contexts = useContext(HeaderContext);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    // ユーザー編集
    const { updateUser, user } = useUpdateUser()  
  
    return (
      <>
        <MainHeader title={contexts[3].title} handleOpen={handleOpen} />
        <Box component="form" noValidate sx={{ mt: 5, width: "80%" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="email"
                type="email"
                id="email"
                autoComplete="email"
              />
                <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="password"
                name="password"
                autoComplete="password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="comfirmation"
                label="comfirmation"
                type="comfirmation"
                id="comfirmation"
                autoComplete="comfirmation"
              />
            </Box>
              <Stack direction="row">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={()=>updateUser(match.params.id)}
                >
                  更新
                </Button>
              </Stack>
    </>
    )
}