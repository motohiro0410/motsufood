import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { UserEditModal } from "../components/pages/UserEditModal";
import { Money } from "../components/pages/Money";
import { Group } from "../components/pages/Group";
import { Page404 } from "../components/pages/Page404";

import { InputFoodExpence } from "../components/pages/InputFoodExpence";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/userEditModal">
        <UserEditModal />
      </Route>
      <Route path="/money">
        <Money />
      </Route>
      <Route path="/group">
        <Group />
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