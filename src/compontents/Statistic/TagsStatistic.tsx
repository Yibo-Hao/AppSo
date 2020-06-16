import React from "react";
import styled from "styled-components";
import { useTags } from "../Money/useTags";
type TagsStyleProps = {
    height: string;
};
const TagsStyle = styled.div<TagsStyleProps>`
  margin-top: 10px;
  overflow: auto;
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
    li {
      padding: 8px 5px 8px 5px;
      flex-grow: 1;
      color: white;
    }
    div {
      margin: 5px;
      border-radius: 4px;
      line-height: 20px;
      cursor: pointer;
      position: relative;
      display: flex;
      ::before {
        display: block;
        content: "";
        width: 8px;
      }
    }
  }
`;
const TagsStatistic: React.FunctionComponent<{ height: string }> = (props) => {
  const { costTags, setIncomeTags, setCostTags, incomeTags } = useTags();
    console.log(props.height);
    return (
    <TagsStyle height={props.height}>
      <ol className="cost">
        {costTags.map(tag => (
          <div className="costDiv Div" key={tag}>
            <li>{tag}</li>
          </div>
        ))}
      </ol>
      <ol className="income">
        {incomeTags.map(tag => (
          <div className="incomeDiv Div" key={tag}>
            <li key={tag}>{tag}</li>
          </div>
        ))}
      </ol>
    </TagsStyle>
  );
};

export { TagsStatistic };
