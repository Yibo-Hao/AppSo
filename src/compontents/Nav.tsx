import { NavLink } from "react-router-dom";
import Icon from "./Icon";
import React, {useState} from "react";
import styled from "styled-components";
import Money from "../views/Money";
const NavStyle = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.25);
  background: #fff;
  > ul {
    display: flex;
    > li {
      width: 20%;
      text-align: center;
      padding: 2px;
      margin-top: 2px;
    }
  }
`;
const LinkStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > span {
    font-size: 10px;
    line-height: 16px;
  }
  > svg {
    margin: 2px;
    font-size: 22px;
  }
`;

export default function Nav() {
  let [moneyState,setMoneyState] = useState(true)
  return (
    <NavStyle>
      <ul>
        <li>
          <NavLink
            to="/assets"
            activeStyle={{
              color: "blue"
            }}
          >
            <LinkStyle>
              <Icon name="assets" />
              <span>资产</span>
            </LinkStyle>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistic"
            activeStyle={{
              color: "blue",
            }}
          >
            <LinkStyle>
              <Icon name="statistic" />
              <span>图表</span>
            </LinkStyle>
          </NavLink>
        </li>
        <li>
          {
            moneyState
              ?
            <div onClick={() => {
            setMoneyState(!moneyState)
          }}>
            <LinkStyle>
              <Icon name="add"/>
              <span>记账</span>
            </LinkStyle>
          </div>
              :
              <Money/>
          }
        </li>
        <li>
          <NavLink
            to="/diary"
            activeStyle={{
              color: "blue"
            }}
          >
            <LinkStyle>
              <Icon name="diary" />
              <span>日记</span>
            </LinkStyle>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/more"
            activeStyle={{
              color: "blue"
            }}
          >
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
