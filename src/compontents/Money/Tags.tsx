import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Icon from "../Icon";
import Modal from "../Modal";
import { ThemeContext } from "../../views/Money";
import { useTags } from "./useTags";
const TagsStyle = styled.section<TagsStyleProps>`
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
          background: ${props => props.iconBackground}
          color: white;
        }
      }
    }
  }
`;
type Props = {
  tagId: number;
  onChange: (tagId: number) => void;
};
type TagsStyleProps = {
  iconBackground: string;
};

export default function TagsMoney(props: Props) {
  const [state, setState] = useState<boolean>(false);
  const { costTags, setIncomeTags, setCostTags, incomeTags } = useTags();
  const theme = useContext(ThemeContext);
  const tagsHash: { [propName: string]: string } = {
    shop: "服饰",
    eat: "餐饮",
    travel: "交通",
    live: "住房",
    business: "生意",
    salary: "工资",
    award: "奖金",
    gift: "红包"
  };
  const [selectedTagId, setSelectedTagId] = useState<number>(props.tagId);
  const open = () => {
    setState(true);
  };
  const close = () => {
    setState(false);
  };
  const onToggleTag = (tagId: number) => {
    if (tagId === selectedTagId) {
      setSelectedTagId(-1);
    } else {
      setSelectedTagId(tagId);
    }
  };
  const getSelectedClass = (tagId: number) =>
    tagId === selectedTagId ? "selected" : "";
  useEffect(() => {
    props.onChange(selectedTagId);
  }, [selectedTagId]);
  useEffect(() => {
    setSelectedTagId(1);
  }, [theme.name]);
  const getIcon = (tag: string) => {
    for (let i in tagsHash) {
      if (tagsHash[i] === tag) {
        return `${i}`;
      }
    }
    return "wait";
  };
  const onChange = (value: string) => {
    const setCost = () => {
      for (let i = 0; i < costTags.length; i++) {
        if (costTags[i].name === value) {
          alert("请重新输入类别名");
          return;
        }
      }
      setCostTags([...costTags, { id: Math.random(), name: value }]);
    };
    const setIncome = () => {
      for (let i = 0; i < incomeTags.length; i++) {
        if (incomeTags[i].name === value) {
          alert("请重新输入类别名");
          return;
        }
      }
      setIncomeTags([...incomeTags, { id: Math.random(), name: value }]);
    };
    theme.name === "cost" ? setCost() : setIncome();
  };
  return (
    <TagsStyle iconBackground={theme.icon.background}>
      <ul>
        {(theme.name === "cost" ? costTags : incomeTags).map(tag => (
          <li
            className={getSelectedClass(tag.id)}
            key={tag.id}
            onClick={() => {
              onToggleTag(tag.id);
            }}
          >
            <div className="icon">
              <Icon name={getIcon(tag.name)} />
            </div>
            <span className="content">{tag.name}</span>
          </li>
        ))}
        <li onClick={open}>
          <div className="icon">
            <Icon name="add" />
          </div>
          <span className="content">新增标签</span>
        </li>
        {state ? (
          <Modal
            initialValue=""
            placeholder="不能与已有类型名重复"
            close={close}
            empty={false}
            limit={5}
            title="请输入类别名"
            onChange={onChange}
          />
        ) : null}
      </ul>
    </TagsStyle>
  );
}
