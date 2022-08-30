import React, { useContext } from "react"
import { useHistory, Link } from "react-router-dom"
import Cookies from "js-cookie"

import { Toolbar, AppBar, Button, IconButton } from '@mui/material';

import { signOut } from "../../lib/api/auth"
import { AuthContext } from "../../router/Router";

export const AuthHeader: React.FC = () => {
  const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext)
  const histroy = useHistory()

  // サインアウトボタンの処理
  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const res = await signOut()

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")

        setIsSignedIn(false)
        histroy.push("/signin")

        console.log("Succeeded in sign out")
      } else {
        console.log("Failed in sign out")
      }
    } catch (err) {
      console.log(err)
    }
  }

  const AuthButtons = () => {
    // 認証完了後はサインアウト用のボタンを表示
    // 未認証時は認証用のボタンを表示
    if (!loading) {
      if (isSignedIn) {
        return (
          <Button
            color="inherit"
            // className={classes.linkBtn}
            onClick={handleSignOut}
          >
            サインアウト
          </Button>
        )
      } else {
        return (
          <>
            <Button
              component={Link}
              to="/signin"
              color="inherit"
              // className={classes.linkBtn}
            >
              サインイン
            </Button>
            <Button
              component={Link}
              to="/signup"
              color="inherit"
              // className={classes.linkBtn}
            >
              サインアップ
            </Button>
          </>
        )
      }
    } else {
      return <></>
    }
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
          >
          </IconButton>
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </>
  )
}