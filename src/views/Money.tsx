import React, { useState } from "react";
import styled from "styled-components";
import TypesDate from "../compontents/Money/Types_Date";
import BackButton from "../compontents/Money/Back_Button";
import InputMoney from "../compontents/Money/Input_Money";
import TagsMoney from "../compontents/Money/Tags";
import NoteButton from "../compontents/Money/NoteButton";
import NumberPad from "../compontents/Money/NumberPad";
import { themes } from "../compontents/Money/theme";
const MoneyWrapper = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  > .content {
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background: rgb(251, 251, 251);
  }
`;
const ThemeContext = React.createContext(themes.cost);
export default function Money(props: { close: () => void }) {
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
    <ThemeContext.Provider
      value={selected.type === "-" ? themes.cost : themes.earn}
    >
      <MoneyWrapper>
        <div className="content">
          <BackButton onChange={props.close} />
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
          <NoteButton
            note={selected.note}
            onChange={note => {
              onChange({ note });
            }}
          />
          <NumberPad
            outPut={selected.outPut}
            onChange={outPut => {
              onChange({ outPut });
            }}
          />
        </div>
      </MoneyWrapper>
    </ThemeContext.Provider>
  );
}
export { ThemeContext };
