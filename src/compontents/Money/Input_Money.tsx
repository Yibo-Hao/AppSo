import React from "react";
import styled from "styled-components";
const InputWrapper = styled.section`
  padding: 10px 16px 0 16px;
  font-size: 30px;
  background: rgb(251, 251, 251);
  label {
    display: flex;
    span {
      vertical-align: bottom;
    }
    input {
      font-size: 35px;
      line-height: 40px;
      vertical-align: bottom;
      flex-grow: 1;
      overflow: hidden;
      color: black;
      background: rgb(251, 251, 251);
    }
  }
`;
type Props = {
  outPut: string;
};
export default function InputMoney(props: Props) {
  return (
    <InputWrapper>
      <label>
        <span>￥</span>
        <input type="text" value={props.outPut} disabled />
      </label>
    </InputWrapper>
  );
}
