import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTags } from "../Money/useTags";
import styled from "styled-components";
import { addCostId, addIncomeId } from "../Money/createid";
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
  .save {
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
  const { costTags, incomeTags, setIncomeTags, setCostTags ,findTag} = useTags();
  const [value, setValue] = useState(findTag(id).name);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const save = () => {
    if (id[0] === "c")
      setCostTags([...costTags, { id: addCostId(), name: value }]);
    else {
      setIncomeTags([...incomeTags, { id: addIncomeId(), name: value }]);
    }

  };
  const onInputLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.slice(0, 5));
    if (id[0] === "c")
      setCostTags([
        ...costTags,
        { id: addCostId(), name: e.target.value.slice(0, 5) }
      ]);
    else {
      setIncomeTags([
        ...incomeTags,
        { id: addIncomeId(), name: e.target.value.slice(0, 5) }
      ]);
    }
  };
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
      <div className="save" onClick={save}>
        保存
      </div>
    </EditTagStyle>
  );
};
export default EditTag;
