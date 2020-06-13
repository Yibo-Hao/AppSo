import React, { useState } from "react";
import styled from "styled-components";
import TypesDate from "../compontents/Money/Types_Date";
import BackButton from "../compontents/Money/Back_Button";
import InputMoney from "../compontents/Money/Input_Money";
import TagsMoney from "../compontents/Money/Tags";
import NoteButton from "../compontents/Money/NoteButton";
import NumberPad from "../compontents/Money/NumberPad";
const MoneyWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  background: rgb(251, 251, 251);
`;
export default function Money() {
  const [selected, setSelected] = useState({
    tag: "服饰" as string,
    type: "-" as "-" | "+",
    note: "" as string,
    outPut: "" as string
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  console.log(selected);
  return (
    <MoneyWrapper>
      <BackButton />
      <TypesDate
        type={selected.type}
        onChange={type => {
          onChange({ type });
        }}
      />
      <InputMoney outPut={selected.outPut} />
      <TagsMoney
        selected={selected.tag}
        onChange={tag => {
          onChange({ tag });
        }}
      />
      <NoteButton />
      <NumberPad
        outPut={selected.outPut}
        onChange={outPut => {
          onChange({ outPut });
        }}
      />
    </MoneyWrapper>
  );
}
