import React from "react";
import styled from "styled-components";
const NumberPadStyle = styled.section`
  button {
    width: 25%;
    background: rgb(255, 255, 255);
    font-size: 25px;
    line-height: 64px;
    border-radius: 6px;
    box-shadow: inset 0 0 0 4px rgb(251, 251, 251);
  }
  .OK {
    line-height: 192px;
    float: right;
  }
  .zero {
    width: 50%;
  }
`;
export default function NumberPad() {
  return (
    <NumberPadStyle>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="OK">确定</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="zero">0</button>
      <button>.</button>
    </NumberPadStyle>
  );
}
