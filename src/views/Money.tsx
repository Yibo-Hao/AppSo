import React from "react";
import styled from "styled-components";
import Types_Date from "../compontents/Money/Types_Date";
import Back_Button from "../compontents/Money/Back_Button";
import Input_Money from "../compontents/Money/Input_Money";
import Tags_Money from "../compontents/Money/Tags";
import Note_Money from "../compontents/Money/Note_Money";
import NumberPad from "../compontents/Money/NumberPad";
const Money_Wrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export default function Money() {
  return (
    <Money_Wrapper>
      <Back_Button />
      <Types_Date />
      <Input_Money />
      <Tags_Money />
      <Note_Money />
      <NumberPad />
    </Money_Wrapper>
  );
}
