import { useState, FC } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import { SignInHeader } from '../organisms/SignInHeader';
import { useCreateUser } from '../../apis/useCreateUser';
import { userCreate } from '../../urls/Url'

type User = {
  id: string
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string
}

const initialData: User = {
  id: "",
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
}

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const SignIn = () => {

  // ヘッダーボタンの出しわけ
  const [login, setLogin] = useState(false);

  // 複数のinputの値取得
  const [user, setUser] = useState<User>(initialData)
  const onChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    console.log(value)
    setUser({...user, [name]: value})
  }
  // 取得データの送信
    const history = useHistory();
  const sendFormData = () => {
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
      passwordConfirmation: user.passwordConfirmation,
    }
    axios.post(userCreate, data)
      .then(res => {
        setUser({
          id: res.data.id,
          name: res.data.name,
          email: res.data.email,
          password: res.data.password,
          passwordConfirmation: res.data.passwordConfirmation,
        })
        history.push("/users")
      })
      .catch(e => {
        console.log(e)
      })
  }

  // const createFormData = () => {
  //   const formData = new FormData()
  //   formData.append('user[name]', user.name)
  //   formData.append('user[email]', user.email)
  //   formData.append('user[password]', user.password)
  //   formData.append('user[confirmation]', user.confirmation)
  //   return formData
  // }
  // const sendFormData = async () => {
  //   const url = userCreate
  //   const data = await createFormData()
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data'
  //     }
  //   }
  //   axios.post(url, data, config)
  //   .then(res => {
  //     console.log(res)
  //   }).catch(e => {
  //     console.log(e)
  //   })
  // }


  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   axios.post<User>(userCreate, {
  //     name: user.name,
  //     email: user.email,
  //     password: user.password,
  //     confirmation: user.confirmation
  //   }).then(res=> {
  //     console.log(res.data)
  //     history.push("/users")
  //   })
  // }

  return (
      <>    
        <SignInHeader login={login}/>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#ffa726' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Stack component="form" width="100%" noValidate spacing={4} >
              <FormControl fullWidth sx={{mt: 5}}>
                <InputLabel htmlFor="outlined-adornment-amount">name</InputLabel>
                <OutlinedInput
                  id="user-name"
                  label="name"
                  name='name'
                  value={user.name}
                  onChange={onChangeUser}
                  type="string"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 5 }}>
                <InputLabel htmlFor="outlined-adornment-amount">email</InputLabel>
                <OutlinedInput
                  id="user-email"
                  label="email"
                  name="email"
                  value={user.email}
                  onChange={onChangeUser}
                  type="string"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 5 }}>
                <InputLabel htmlFor="outlined-adornment-amount">password</InputLabel>
                <OutlinedInput
                  id="user-password"
                  autoComplete='true'
                  label="password"
                  name="password"
                  value={user.password}
                  onChange={onChangeUser}
                  type="password"
                />
              </FormControl>
              <FormControl fullWidth sx={{ m: 5 }}>
                <InputLabel htmlFor="outlined-adornment-amount">confirmation</InputLabel>
                <OutlinedInput
                  id="user-passwordConfirmation"
                  autoComplete='true'
                  label="passwordConfirmation"
                  name="passwordConfirmation"
                  value={user.passwordConfirmation}
                  onChange={onChangeUser}
                  type="password"
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={sendFormData} 
              >
                sign In
              </Button>
            </Stack>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
     </>
  );
  

              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                autoFocus
              /> */}
}