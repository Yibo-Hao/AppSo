import React from "react";
import { Switch, Route } from "react-router-dom";
import Assets from "./views/Assets";
import Diary from "./views/Diary";
import Money from "./views/Money";
import More from "./views/More.";
import Notfound from "./views/Notfound";
import Statistic from "./views/Statistic";

export default function App() {
  return (
    <Switch>
      <Route exact path={"/assets"}>
        <Assets />
      </Route>
      <Route exact path={"/statistic"}>
        <Statistic />
      </Route>
      <Route exact path={"/"}>
        <Money />
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
