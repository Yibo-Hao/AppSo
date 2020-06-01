import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./compontents/Layout";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path={"/assets"}>
          assets
        </Route>
        <Route exact path={"/statistic"}>
          statistic
        </Route>
        <Route exact path={"/"}>
          money
        </Route>
        <Route exact path={"/diary"}>
          diary
        </Route>
        <Route exact path={"/more"}>
          more
        </Route>
        <Route exact path={"*"}>
          404
        </Route>
      </Switch>
    </Layout>
  );
}
