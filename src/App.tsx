import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Assets from "./views/Assets";
import Diary from "./views/Diary";
import More from "./views/More.";
import Notfound from "./views/Notfound";
import Statistic from "./views/Statistic";

export default function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/assets" />
      <Route exact path={"/assets"}>
        <Assets />
      </Route>
      <Route path={"/statistic"}>
        <Statistic />
      </Route>
      <Route exact path={"/diary"}>
        <Diary />
      </Route>
      <Route exact path={"/more"}>
        <More />
      </Route>
      <Route exact path={"*"}>
        <Notfound />
      </Route>
    </Switch>
  );
}
