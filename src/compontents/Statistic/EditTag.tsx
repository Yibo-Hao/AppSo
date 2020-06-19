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
  const { costTags, incomeTags, setIncomeTags, setCostTags } = useTags();
  const findTag = (id: string) => {
    let TagId = "";
    if (id[0] === "c") {
      TagId = id.slice(4);
      return costTags.filter(tag => tag.id === Number(TagId))[0];
    } else {
      TagId = id.slice(6);
     return incomeTags.filter(tag => tag.id === Number(TagId))[0];
    }
  };
  return <div>{findTag(id).name}</div>;
};
export default EditTag;
