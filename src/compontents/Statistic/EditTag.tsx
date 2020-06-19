import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTags } from "../Money/useTags";
import styled from "styled-components";
const EditTagStyle = styled.div`
  display: flex;
  flex-direction: column;
  .nav {
    width: 100%;
    padding: 16px;
    display: flex;
    background: white;
    justify-content: center;
  }
  .wrapper {
    margin: 0 auto;
    display: flex;
  }

  .save {
    margin: 0 8px;
    padding: 8px 16px;
    border-radius: 8px;
    white-space: nowrap;
    background: rgb(157, 218, 185);
  }
  .delete {
    margin: 0 auto;
    padding: 8px 16px;
    border-radius: 8px;
    white-space: nowrap;
    background: rgb(157, 218, 185);
  }
`;
const InputWrapper = styled.section`
  margin: 8px;
  padding: 8px;
  font-size: 16px;
  background: white;
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      vertical-align: bottom;
    }
    input {
      line-height: 40px;
      margin-left: 4px;
      font-size: 16px;
      vertical-align: bottom;
      flex-grow: 1;
      overflow: hidden;
      color: black;
      background: white;
    }
  }
`;
const EditTag: React.FunctionComponent = () => {
  const { id } = useParams();
  const { deleteTag, findTag ,updateTag} = useTags();
  const [value, setValue] = useState(findTag(id).name);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onInputLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.slice(0, 5));
  };
  const save = () => {
    updateTag(id,value)
  };
  const deleteATag = () => deleteTag(id);
  return (
    <EditTagStyle>
      <nav className="nav">
        <span className="title">编辑标签</span>
      </nav>
      <InputWrapper>
        <label>
          <span>标签名:</span>
          <input
            type="text"
            value={value}
            onChange={onInputChange}
            onBlur={onInputLimit}
            disabled={findTag(id).id <= 4}
          />
        </label>
      </InputWrapper>
      <div className="wrapper">
        <div className="save" onClick={save}>
          保存
        </div>
        <div className="delete" onClick={deleteATag}>
          删除
        </div>
      </div>
    </EditTagStyle>
  );
};
export default EditTag;
