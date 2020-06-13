import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Icon from "../Icon";

const NoteWrapper = styled.div`
  height: 100vh;
  background: rgba(0,0,0,0.15);
  position: absolute;
  bottom: 0;
  left: 0;
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
      padding: 14px 8px 8px 0;
      width: 100%;
      font-size: 18px;
      box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    }
    > .limit {
      padding-top: 14px;
      color: rgb(218, 218, 218);
    }
  }
`;
type Props = {
  note: string;
  onChange: (note: string) => void;
};
const Note = (props: Props) => {
  const [noteValue, setNoteValue] = useState<string>(props.note);
  const onLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 15) setNoteValue(e.target.value);
  };
  useEffect(() => {
    props.onChange(noteValue);
  }, [noteValue]);
  return (
    <NoteWrapper>
      <div className="note">
        <div className="nav">
          <div className="back">
            <Icon name="right" />
          </div>
          <div className="content">请添加备注</div>
          <div className="ok">确定</div>
        </div>
        <input
          type="text"
          placeholder="请输入备注内容"
          value={noteValue}
          onChange={onLimit}
        />
        <div className="limit">{noteValue.length}/15</div>
      </div>
    </NoteWrapper>
  );
};
export default Note;
