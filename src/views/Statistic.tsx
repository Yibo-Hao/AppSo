import React, { useEffect, useRef, useState } from "react";
import Layout from "../compontents/Layout";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import Notfound from "./Notfound";
import { TagsStatistic } from "../compontents/Statistic/TagsStatistic";
const NavStyle = styled.div`
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

const Statistic: React.FunctionComponent = () => {
  let { path, url } = useRouteMatch();
  const [height, setHeight] = useState(0);
  const divEl = useRef(null);
  const divEl2 = useRef(null);
  useEffect(() => {
    let navHeight = (divEl.current! as HTMLDivElement).getBoundingClientRect()
      .height;
    let navHeight2 = (divEl2.current! as HTMLDivElement).getBoundingClientRect()
      .height;
    setHeight(navHeight + navHeight2);
  }, []);
  return (
    <Layout ref={divEl}>
      <NavStyle ref={divEl2}>
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
        <Redirect exact from={`${path}/`} to={`${path}/tags`} />
        <Route exact path={`${path}/timeline`}>
          mouth timeline
        </Route>
        <Route exact path={`${path}/tags`}>
          <TagsStatistic
            height={(window.screen.height - height).toString() + "px"}
          />
        </Route>
        <Route exact path={`${path}/tags/:tags`}>
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
};

export default Statistic;
