import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  background: rgb(251, 251, 251);
`;

const Layout = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  (props, ref) => {
    return (
      <LayoutStyle>
        <Main>{props.children}</Main>
        <Nav ref={ref} />
      </LayoutStyle>
    );
  }
);
export default Layout;
