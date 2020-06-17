import React from "react";
import styled from "styled-components";
import { useTags } from "../Money/useTags";
import { Link, useRouteMatch } from "react-router-dom";
type TagsStyleProps = {
  height: string;
};
const TagsStyle = styled.div<TagsStyleProps>`
  overflow: auto;
  padding: 10px 0;
  height: ${props => props.height};
  .cost {
    .costDiv {
      border: 1.5px solid rgb(157, 218, 185);
      background: rgba(157, 218, 185, 0.65);
      ::before {
        background: rgb(157, 218, 185);
        border-right: 1px solid rgb(157, 218, 185);
      }
    }
  }
  .income {
    .incomeDiv {
      border: 1.5px solid rgb(248, 215, 146);
      background: rgba(248, 215, 146, 0.65);
      ::before {
        background: rgb(248, 215, 146);
        border-right: 1px solid rgb(248, 215, 146);
      }
    }
  }
  ol {
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
          <Link to={`${url}/` + tag}  key={tag.id}>
            <div className="costDiv" >
              <li>{tag.name}</li>
            </div>
          </Link>
        ))}
      </ol>
      <ol className="income">
        {incomeTags.map(tag => (
          <Link to={`${url}/` + tag}  key={tag.id}>
            <div className="incomeDiv">
              <li>{tag.name}</li>
            </div>
          </Link>
        ))}
      </ol>
    </TagsStyle>
  );
};

export { TagsStatistic };
