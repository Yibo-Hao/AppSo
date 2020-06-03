import React from "react";
import styled from "styled-components";
import Nav from "./Nav"

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <LayoutStyle>
      <Main>{props.children}</Main>
      <Nav/>
    </LayoutStyle>
  );
}
