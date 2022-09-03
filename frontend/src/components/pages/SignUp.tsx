import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie"

import { TextField, Grid, CardHeader, Button } from "@mui/material"

import { AuthContext } from "../../router/Router";
import { AlertMessage } from "../layouts/AlertMessage"
import { signUp } from "../../lib/api/auth"
import { SignUpParams } from "../../types/Types"
import { AuthHeader } from "../layouts/AuthHeader";
import { HeaderContext } from '../../providers/HeaderProvider';

// サインアップ用ページ
export const SignUp: React.FC = () => {
  const contexts = useContext(HeaderContext);

  const histroy = useHistory()

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext)

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const params: SignUpParams = {
      name: name,
      email: email,
      password: password,
      passwordConfirmation: passwordConfirmation
    }

    try {
      const res = await signUp(params)
      console.log(res)

      if (res.status === 200) {
        // アカウント作成と同時にログインさせてしまう
        // 本来であればメール確認などを挟むべき
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        setIsSignedIn(true)
        setCurrentUser(res.data.data)

        histroy.push("/users")

        console.log("Signed in successfully!")
      } else {
        setAlertMessageOpen(true)
      }
    } catch (err) {
      console.log(err)
      setAlertMessageOpen(true)
    }
  }

  return (
    <>
      <AuthHeader title={contexts[4].title} />
      <form noValidate autoComplete="off">
        <Grid container spacing={{ xs: 10 }}>
          <Grid item>
          <CardHeader  title="サインアップ" />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="名前"
              value={name}
              margin="dense"
              onChange={e => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="メールアドレス"
              value={email}
              margin="dense"
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="パスワード"
              type="password"
              value={password}
              margin="dense"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              required
              fullWidth
              label="パスワード(確認用)"
              type="password"
              value={passwordConfirmation}
              margin="dense"
              autoComplete="current-password"
              onChange={e => setPasswordConfirmation(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={!name || !email || !password || !passwordConfirmation ? true : false} // 空欄があった場合はボタンを押せない
              onClick={handleSubmit}
            >
              送信
            </Button>
            </Grid>
          </Grid>
      </form>
      <AlertMessage // エラーが発生した場合はアラートを表示
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="メールアドレスかパスワードが間違っています"
      />
    </>
  )
}