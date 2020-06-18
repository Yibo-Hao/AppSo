import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTags } from "../Money/useTags";
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
