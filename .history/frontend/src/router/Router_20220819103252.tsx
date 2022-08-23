import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Count } from "../components/pages/Count";
import { Money } from "../components/pages/Money";
import { Users } from "../components/pages/Users";
import { SignIn } from "../components/pages/SignIn";
import { Page404 } from "../components/pages/Page404";
import { InputFoodExpence } from "../components/pages/InputFoodExpence";
import { UserEdit } from "../components/pages/UserEdit"

export const Router: FC = memo(() => {
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
            <Route exact path="/users" component={Users} />
            <Route path="/users/:id/edit" component={UserEdit} />
            <Route path="/users/:userId/count" component={Count} />
            <Route path="/users/:userId/money" component={Money} />
            <Route path="/users/:userId/input" component={Money} />
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
})