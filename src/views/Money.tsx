import React, { useState } from "react";
import styled from "styled-components";
import TypesDate from "../compontents/Money/Types_Date";
import BackButton from "../compontents/Money/Back_Button";
import InputMoney from "../compontents/Money/Input_Money";
import TagsMoney from "../compontents/Money/Tags";
import NoteButton from "../compontents/Money/NoteButton";
import NumberPad from "../compontents/Money/NumberPad";
import { themes } from "../compontents/Money/theme";
import useRecord from "../compontents/Money/useRecord";
import {addRecordId} from "../compontents/Money/createid"
import RecordItem from "../compontents/Money/record.d";
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
  const { addRecord } = useRecord();
  const [selected, setSelected] = useState<RecordItem>({
    id:addRecordId(),
    tagId: 1,
    type: "-",
    note: "",
    outPut: "",
    date: new Date().toLocaleDateString()
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  const submit = () => {
    addRecord(selected);
    setSelected({
      id:addRecordId(),
      tagId: 1,
      type: "-",
      note: "",
      outPut: "",
      date: new Date().toLocaleDateString()
    });
  };
  return (
    <ThemeContext.Provider
      value={selected.type === "-" ? themes.cost : themes.earn}
    >
      <MoneyWrapper>
        <div className="content">
          <BackButton onChange={props.close} />
          <TypesDate
            type={selected.type}
            date={selected.date}
            onChange={type => {
              onChange({ type });
            }}
          />
          <InputMoney outPut={selected.outPut} />
          <TagsMoney
            tagId={selected.tagId}
            onChange={tagId => {
              onChange({ tagId });
            }}
          />
          <NoteButton
            onChange={note => {
              onChange({ note });
            }}
          />
          <NumberPad
            outPut={selected.outPut}
            onChange={outPut => {
              onChange({ outPut });
            }}
            submit={submit}
          />
        </div>
      </MoneyWrapper>
    </ThemeContext.Provider>
  );
}
export { ThemeContext };
