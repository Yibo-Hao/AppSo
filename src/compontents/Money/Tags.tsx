import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Icon from "../Icon";

const TagsStyle = styled.section`
  padding: 10px 16px 0 16px;
  ul {
    border-top: 0.5px solid rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      height: 70px;
      padding: 0 8px;
      &:first-child {
        padding-left: 0;
      }
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > .icon {
        font-size: 25px;
        padding: 2px 4px;
        border-radius: 50%;
      }
      > .content {
        padding-top: 10px;
        font-size: 10px;
        font-weight: 200;
      }
      &.selected {
        > .icon {
          background: rgb(62, 181, 117);
          color: white;
        }
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
    "借贷",
    "工资"
  ]);
  const tagsHash: { [propName: string]: string } = {
    shop: "服饰",
    eat: "餐饮",
    travel: "交通",
    live: "住房",
    loan: "借贷",
    salary: "工资"
  };
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
      setSelectedTag("");
    } else {
      setSelectedTag(tag);
    }
  };
  const getSelectedClass = (tag: string) =>
    selectedTag.indexOf(tag) >= 0 ? "selected" : "";
  useEffect(() => {
    props.onChange(selectedTag);
  }, [selectedTag]);
  const iconChose = (tag: string) => {
    for (let i in tagsHash) {
      if (tagsHash[i] === tag) {
        return `${i}`;
      }
    }
    return "wait";
  };
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
            <div className="icon">
              <Icon name={iconChose(tag)} />
            </div>
            <span className="content">{tag}</span>
          </li>
        ))}
        <li onClick={onAddTag}>
          <div className="icon">
            <Icon name="add" />
          </div>
          <span className="content">新增标签</span>
        </li>
      </ul>
    </TagsStyle>
  );
}
