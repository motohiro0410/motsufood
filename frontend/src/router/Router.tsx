import { FC, useState, useEffect, createContext } from "react";
import { Switch, Route } from "react-router-dom";

import { Count } from "../components/pages/Count";
import { Money } from "../components/pages/Money";
import { Users } from "../components/pages/Users";
import { SignIn2 } from "../components/pages/SignIn2";
import { Page404 } from "../components/pages/Page404";
import { UserEdit } from "../components/pages/UserEdit"
import { InputFoodExpence } from "../components/pages/InputFoodExpence"
import { SignUp } from "../components/pages/SignUp";
import { Redirect } from "react-router-dom"
import { CommonLayout } from "../components/layouts/CommonLayout";
import { getCurrentUser } from "../lib/api/auth";
import { User } from "../types/Types";



  // グローバルで扱う変数・関数
export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
})


export const Router: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | undefined>()

  // 認証済みのユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (res?.data.isLogin === true) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.data)

        console.log(res?.data.data)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])


  // ユーザーが認証済みかどうかでルーティングを決定
  // 未認証だった場合は「/signin」ページに促す
  const Private = ({ children }: { children: React.ReactElement }) => {
    if (!loading) {
      if (isSignedIn) {
        return children
      } else {
        return <Redirect to="/signin" />
      }
    } else {
      return <></>
    }
  }

  return (
    <Switch>
      <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser}}>
        <CommonLayout>
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn2} />
            <Private>
            <Route path="/users"
              render={({match})=>(
                 <Switch>
                   <Route exact path="/users" component={Users} />
                   <Route path="/users/:id/edit" component={UserEdit} />
                   <Route path="/users/:userId/count" component={Count} />
                   <Route path="/users/:userId/money" component={Money} />
                   <Route path="/users/:userId/input" component={InputFoodExpence} />
                  </Switch>
               )}
             />
            </Private>
          </Switch>
        </CommonLayout>
      </AuthContext.Provider>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
}