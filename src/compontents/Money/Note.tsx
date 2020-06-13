import styled from "styled-components";
import React, { useState } from "react";
import Icon from "../Icon";

const NoteWrapper = styled.div`
  height: 100vh;
  background: rgb(251, 251, 251);
  position: relative;
  width: 100%;
  > .note {
    background: white;
    position: absolute;
    min-height: 30vh;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 16px;
    padding: 16px;
    > .nav {
      display: flex;
      justify-content: space-between;
      margin: 0 0 14px 0;
      > .back {
        font-size: 20px;
      }
      > .content {
        font-size: 16px;
        text-align: center;
      }
      > .ok {
        color: rgb(159, 218, 186);
      }
    }
    > input {
      overflow: hidden;
      padding: 14px 8px 20px 0;
      width: 100%;
      box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    }
    > .limit {
      padding-top: 14px;
      color: rgb(218, 218, 218);
    }
  }
`;
const Note = () => {
  const [noteValue, setNoteValue] = useState<string>("");
  return (
    <NoteWrapper>
      <div className="note">
        <div className="nav">
          <div className="back">
            <Icon name="delete" />
          </div>
          <div className="content">请添加备注</div>
          <div className="ok">确定</div>
        </div>
        <input
          type="text"
          placeholder="请输入备注内容"
          value={noteValue}
          onChange={e => {
            setNoteValue(e.target.value);
          }}
        />
        <div className="limit">0/15</div>
      </div>
    </NoteWrapper>
  );
};
export default Note;
