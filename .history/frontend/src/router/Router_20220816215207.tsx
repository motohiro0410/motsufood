import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";
import {RouteComponentProps} from 'react-router-dom'

import { Login } from "../components/pages/Login";
import { Count } from "../components/pages/Count";
import { Money } from "../components/pages/Money";
import { Users } from "../components/pages/Users";
import { SignIn } from "../components/pages/SignIn";
import { Page404 } from "../components/pages/Page404";
import { InputFoodExpence } from "../components/pages/InputFoodExpence";

type PageProps = {} & RouteComponentProps<{id: string}>;

export const Router: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/users"
        render={({match})=>(
          <Switch>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route path="/users/:userId/count" match={match}>
              <Count />
            </Route>
            <Route path="/users/:userId/money" match={match}>
              <Money />
            </Route>
            <Route path="/users/:userId/input" match={match}>
              <InputFoodExpence /> 
            </Route>
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
}