import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Count } from "../components/pages/Count";
import { Money } from "../components/pages/Money";
import { Users } from "../components/pages/Users";
import { SignIn } from "../components/pages/SignIn";
import { Page404 } from "../components/pages/Page404";

import { InputFoodExpence } from "../components/pages/InputFoodExpence";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/user/{userId}/count">
        <Count />
      </Route>
      <Route path="/money">
        <Money />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/input">
        <InputFoodExpence /> 
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
})