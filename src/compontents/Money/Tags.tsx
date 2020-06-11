import React, { useState } from "react";
import styled from "styled-components";

const TagsStyle = styled.section`
  padding: 10px 16px;
  ul {
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
        background: rgb(62,181,117);
      }
    }
  }
`;
export default function TagsMoney() {
  const [tags, setTags] = useState<string[]>([
    "服饰",
    "餐饮",
    "交通",
    "住房",
    "学习",
    "旅游"
  ]);
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
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
      setSelectedTag([]);
    } else {
      setSelectedTag([tag]);
    }
  };
  const getSelectedClass = (tag: string) =>
    selectedTag.indexOf(tag) >= 0 ? "selected" : "";
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
