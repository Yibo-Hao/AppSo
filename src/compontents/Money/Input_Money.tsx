import React from "react";
import styled from "styled-components";
const Input_Wrapper = styled.section`
  padding: 10px 16px;
  font-size: 30px;
  border: 1px solid red;
  label {
    display: flex;
    input {
      font-size: 30px;
      flex-grow: 1;
      overflow: hidden;
    }
  }
`;

export default function Input_Money() {
  return (
    <Input_Wrapper>
      <label>
        <span>￥</span>
        <input type="text" />
      </label>
    </Input_Wrapper>
  );
}
