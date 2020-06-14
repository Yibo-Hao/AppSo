import React, { useState } from "react";
import styled from "styled-components";
import Note from "./Note";

const NoteStyle = styled.section`
  align-self: flex-start;
  padding: 0 16px 10px 16px;
  button {
    background: rgb(255, 255, 255);
    font-size: 14px;
    color: rgb(87, 107, 149);
    line-height: 20px;
  }
`;
type Props = {
  note: string;
  onChange: (note: string) => void;
};

export default function NoteMoney(props: Props) {
  const [noteState, setNoteState] = useState(false);
  const openNote = () => {
    setNoteState(true);
  };
  const closeNote = () => {
    setNoteState(false);
  };
  return noteState ? (
    <NoteStyle>
      <button onClick={openNote}>添加备注</button>
      <Note note={props.note} onChange={props.onChange} closeNote={closeNote} />
    </NoteStyle>
  ) : (
    <NoteStyle>
      <button onClick={openNote}>添加备注</button>
    </NoteStyle>
  );
}
