import React from "react";
import Layout from "../compontents/Layout";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Notfound from "./Notfound";
const NavStyle = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.25);
  background: #fff;
  > ul {
    display: flex;
    margin: 0 20%;
    > li {
      width: 33.333333%;
      text-align: center;
      padding: 2px;
      white-space: nowrap;
      margin-top: 2px;
    }
  }
`;
export default function Statistic() {
  let { path, url } = useRouteMatch();
  return (
    <Layout>
      <NavStyle>
        <ul>
          <li>
            <NavLink
              to={`${url}/tags`}
              activeStyle={{
                color: "blue"
              }}
            >
              标签
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${url}/timeline`}
              activeStyle={{
                color: "blue"
              }}
            >
              时间线
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${url}/analysis`}
              activeStyle={{
                color: "blue"
              }}
            >
              分析
            </NavLink>
          </li>
        </ul>
      </NavStyle>
      <Switch>
        <Route exact path={`${path}/timeline`}>
          mouth timeline
        </Route>
        <Route exact path={`${path}/tags`}>
          tags
        </Route>
        <Route exact path={`${path}/analysis`}>
          year analysis
        </Route>
        <Route exact path={`${path}/*`}>
          <Notfound />
        </Route>
      </Switch>
    </Layout>
  );
}
