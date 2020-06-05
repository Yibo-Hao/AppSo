import React from "react";
import styled from "styled-components";

const Note_Style = styled.section`
  padding: 10px 16px;
  border: 1px solid red;
  button {
    background: rgb(255, 255, 255);
    font-size: 14px;
    color: rgb(87,107,149);
  }
`;
export default function Note_Money() {
  return (
    <Note_Style>
      <button>添加备注</button>
    </Note_Style>
  );
}
