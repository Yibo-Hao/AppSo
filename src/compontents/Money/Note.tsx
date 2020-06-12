import styled from "styled-components";
import React, { useState } from "react";

const NoteWrapper = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  > .note {
    background: white;
  }
`;
const Note = () => {
  const [noteValue, setNoteValue] = useState<string>('');
  return (
    <NoteWrapper>
      <div className="note">
        <input type="text" placeholder="请输入备注内容" value={noteValue} onChange={e=>{setNoteValue(e.target.value)}}/>
      </div>
    </NoteWrapper>
  );
};
export default Note;
