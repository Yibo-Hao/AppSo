import styled from "styled-components";
import React, { useState } from "react";
import Icon from "../compontents/Icon";
const NoteWrapper = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
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
    display: flex;
    flex-direction: column;
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
      align-self: flex-start;
    }
  }
`;
type Props = {
  initialValue: string;
  onChange: (value: string) => void;
  close: () => void;
  limit: number;
  title: string;
  empty: boolean;
  placeholder: string;
};
const Note: React.FunctionComponent<Props> = props => {
  let [value, setValue] = useState<string>(props.initialValue);
  const limit = props.limit;
  const close = props.close;
  const placeholder = props.placeholder;
  const title = props.title;
  const onChange = props.onChange;
  const empty = props.empty;
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onInputLimit = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value.slice(0,limit));
  }
  const ok = () => {
    if (!empty) {
      if (value === "") {
        window.alert("不能为空");
        return;
      }
    }
    onChange(value);
    close();
  };
  return (
    <NoteWrapper>
      <div className="note">
        <div className="nav">
          <div
            className="back"
            onClick={() => {
              close();
            }}
          >
            <Icon name="right" />
          </div>
          <div className="content">{title}</div>
          <div className="ok" onClick={ok}>
            确定
          </div>
        </div>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
          onBlur={onInputLimit}
        />
        <div className="limit">
          {value.length}/{limit}
        </div>
      </div>
    </NoteWrapper>
  );
};
export default Note;
