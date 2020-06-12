import React from "react";
import styled from "styled-components";
const InputWrapper = styled.section`
  padding: 10px 16px;
  font-size: 30px;
        background: rgb(251,251,251);
  label {
    display: flex;
    span{
      text-align: center;
    }
    input {
      font-size: 35px;
      line-height: 40px;
      flex-grow: 1;
      overflow: hidden;
      background: rgb(251,251,251);
    }
  }
`;

export default function InputMoney() {
  return (
    <InputWrapper>
      <label>
        <span>￥</span>
        <input type="text" />
      </label>
    </InputWrapper>
  );
}
