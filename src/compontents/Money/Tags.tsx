import React, { useState,useEffect } from "react";
import styled from "styled-components";

const TagsStyle = styled.section`
  padding: 10px 16px;
  ul {
    border-top: 0.5px solid rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      width: 0;
    }
    li {
      height: 70px;
      line-height: 70px;
      padding: 0 8px;
      &.selected {
        background: rgb(62, 181, 117);
      }
    }
  }
`;
type Props = {
  selected: string;
  onChange: (tag: string) => void;
};
export default function TagsMoney(props: Props) {
  const [tags, setTags] = useState<string[]>([
    "服饰",
    "餐饮",
    "交通",
    "住房",
    "学习",
    "旅游"
  ]);
  const [selectedTag, setSelectedTag] = useState<string>(props.selected);
  const onAddTag = () => {
    const name = window.prompt("请填写类型名");
    if (name && name.length <= 4) {
      setTags([...tags, name]);
    } else {
      alert("长度小于4");
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTag.indexOf(tag);
    if (index >= 0) {
      setSelectedTag('');
    } else {
      setSelectedTag(tag);
    }
  };
  const getSelectedClass = (tag: string) =>
    selectedTag.indexOf(tag) >= 0 ? "selected" : "";
  useEffect(()=>{props.onChange(selectedTag)},[selectedTag])
  return (
    <TagsStyle>
      <ul>
        {tags.map(tag => (
          <li
            className={getSelectedClass(tag)}
            key={tag}
            onClick={() => {
              onToggleTag(tag);
            }}
          >
            {tag}
          </li>
        ))}
        <li onClick={onAddTag}>新增标签</li>
      </ul>
    </TagsStyle>
  );
}
