import React, { useState } from "react";
import styled from "styled-components";
import Note from "./Note";

const NoteStyle = styled.section`
  padding: 10px 16px;
  button {
    background: rgb(255, 255, 255);
    font-size: 14px;
    color: rgb(87, 107, 149);
    line-height: 20px;
  }
`;
export default function NoteMoney() {
  let [noteOpen, setNoteOpen] = useState(false);
  const onNote = () => {
    setNoteOpen(!noteOpen);
  };
  return (
    <NoteStyle>
      <button onClick={onNote}>添加备注</button>
    </NoteStyle>
  );
}
