import React from "react";
import styled from "styled-components";
const NumberPad_Style = styled.section`
  border: 1px solid red;
  button {
    width: 25%;
    background: rgb(255, 255, 255);
    font-size: 25px;
    line-height: 64px;
    border-radius: 4px;
    box-shadow: inset 0 0 0 4px rgb(251,251,251);
  }
`;
export default function NumberPad() {
  return (
    <NumberPad_Style>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>确定</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>0</button>
      <button>.</button>
    </NumberPad_Style>
  );
}
