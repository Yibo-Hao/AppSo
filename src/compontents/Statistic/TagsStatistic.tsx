import React from "react";
import styled from "styled-components";
import { useTags } from "../Money/useTags";
import { Link, useRouteMatch } from "react-router-dom";
import Icon from "../Icon";
type TagsStyleProps = {
  height: string;
};
const TagsStyle = styled.div<TagsStyleProps>`
  overflow: auto;
  padding: 10px 0;
  height: ${props => props.height};
  display: flex;
  flex-direction: column;
  > .button {
    display: flex;
    height: 40px;
    width: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(157, 218, 185,0.65);
    border-radius: 50%;
    align-self: center;
    position: absolute;
    bottom: 10vh;
    right: 2vh;
    >.content{
      font-size: 10px;
      white-space: nowrap;
    }
  }
  > .cost {
    .costDiv {
      border: 1.5px solid rgb(157, 218, 185);
      background: rgba(157, 218, 185, 0.65);
      ::before {
        background: rgb(157, 218, 185);
        border-right: 1px solid rgb(157, 218, 185);
      }
    }
  }
  > .income {
    .incomeDiv {
      border: 1.5px solid rgb(248, 215, 146);
      background: rgba(248, 215, 146, 0.65);
      ::before {
        background: rgb(248, 215, 146);
        border-right: 1px solid rgb(248, 215, 146);
      }
    }
  }
  > ol {
    font-size: 16px;
    color: white;
    div {
      margin: 5px;
      border-radius: 4px;
      line-height: 20px;
      cursor: pointer;
      position: relative;
      display: flex;
      li {
        padding: 8px 5px 8px 5px;
        flex-grow: 1;
      }
      ::before {
        display: block;
        content: "";
        width: 8px;
      }
    }
  }
`;
const TagsStatistic: React.FunctionComponent<{ height: string }> = props => {
  const { costTags, setIncomeTags, setCostTags, incomeTags } = useTags();
  const { url } = useRouteMatch();
  return (
    <TagsStyle height={props.height}>
      <ol className="cost">
        {costTags.map(tag => (
          <Link to={`${url}/cost` + tag.id} key={tag.id}>
            <div className="costDiv">
              <li>{tag.name}</li>
            </div>
          </Link>
        ))}
      </ol>
      <ol className="income">
        {incomeTags.map(tag => (
          <Link to={`${url}/income` + tag.id} key={tag.id}>
            <div className="incomeDiv">
              <li>{tag.name}</li>
            </div>
          </Link>
        ))}
      </ol>
      <div className="button">
        <Icon name="add" />
        <span className="content">新增</span>
      </div>
    </TagsStyle>
  );
};

export { TagsStatistic };
