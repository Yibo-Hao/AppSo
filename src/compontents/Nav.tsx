import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import React from "react";
import styled from "styled-components";

const NavStyle = styled.nav`
  line-height: 24px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 20%;
      text-align: center;
      padding: 2px;
      margin: 4px 0;
    }
  }
`;
const LinkStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >span{
    font-size: 12px;
    line-height: 16px;
  }
  >svg{
  margin: 2px;
  }
`;

export default function Nav() {
  return (
    <NavStyle>
      <ul>
        <li>
          <NavLink to="/assets">
            <LinkStyle>
              <Icon name="assets" />
              <span>资产</span>
            </LinkStyle>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistic">
            <LinkStyle>
              <Icon name="statistic" />
              <span>图表</span>
            </LinkStyle>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <LinkStyle>
              <Icon name="add" />
              <span>记账</span>
            </LinkStyle>
          </NavLink>
        </li>
        <li>
          <NavLink to="/diary">
            <LinkStyle>
              <Icon name="diary" />
              <span>日记</span>
            </LinkStyle>
          </NavLink>
        </li>
        <li>
          <NavLink to="/more">
            <LinkStyle>
              <Icon name="more" />
              <span>更多</span>
            </LinkStyle>
          </NavLink>
        </li>
      </ul>
    </NavStyle>
  );
}
