import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

const BackButtonStyle = styled.section`
  align-self: flex-start;
  padding-top: 10px;
  > button {
    font-size: 22px;
    background: rgb(251, 251, 251);
    padding: 0 10px;
    position: relative;
    :first-child {
      line-height: 30px;
    }
  }
`;
export default function BackButton(props: {onChange: ()=>void}) {
  return (
    <BackButtonStyle>
      <button onClick={()=>props.onChange()}>
        <Icon name="back" />
      </button>
    </BackButtonStyle>
  );
}
