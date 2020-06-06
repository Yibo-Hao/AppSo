import React from "react";
import styled from "styled-components";
import TypesDate from "../compontents/Money/Types_Date";
import BackButton from "../compontents/Money/Back_Button";
import InputMoney from "../compontents/Money/Input_Money";
import TagsMoney from "../compontents/Money/Tags";
import NoteMoney from "../compontents/Money/Note_Money";
import NumberPad from "../compontents/Money/NumberPad";
const MoneyWrapper = styled.div`
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
    <MoneyWrapper>
      <BackButton />
      <TypesDate />
      <InputMoney />
      <TagsMoney />
      <NoteMoney />
      <NumberPad />
    </MoneyWrapper>
  );
}
