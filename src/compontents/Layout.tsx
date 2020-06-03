import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon"

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const NavStyle = styled.nav`
  line-height: 24px;
  border-top: 0.5px solid rgba(0,0,0,0.25);
  >ul{
    display: flex;
    >li{
      width: 20%;
      text-align: center;
      padding: 8px;
    }
  }
`
const MainStyle = styled.div`
  flex-grow: 1;
  overflow:auto;
`

export default function Layout(props: { children: React.ReactNode; }) {
  return (
    <LayoutStyle>
      <MainStyle>
          {props.children}
      </MainStyle>
      <NavStyle>
        <ul>
          <li>
            <Icon name="assets"/>
            <Link to="/assets">资产</Link>
          </li>
          <li>
            <Icon name="statistic"/>
            <Link to="/statistic">图表</Link>
          </li>
          <li>
            <Icon name="add"/>
            <Link to="/">记账</Link>
          </li>
          <li>
            <Icon name="diary"/>
            <Link to="/diary">日记</Link>
          </li>
          <li>
            <Icon name="more"/>
            <Link to="/more">更多</Link>
          </li>
        </ul>
      </NavStyle>
    </LayoutStyle>
  );
}
