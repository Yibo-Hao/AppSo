import React from "react";
import { Link } from "react-router-dom";

export default function Layout(props: { children: React.ReactNode; }) {
  return (
    <div>
      <div>
          {props.children}
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/assets">资产</Link>
          </li>
          <li>
            <Link to="/statistic">图表</Link>
          </li>
          <li>
            <Link to="/">记账</Link>
          </li>
          <li>
            <Link to="/diary">日记</Link>
          </li>
          <li>
            <Link to="/more">更多</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
