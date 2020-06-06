import React from "react";
import styled from "styled-components";

const TagsStyle = styled.section`
  padding: 10px 16px;
  border: 1px solid red;
  ul {
    display: flex;
    flex-direction: row;
    li {
      line-height: 70px;
      border: 1px solid red;
      padding: 0 8px;
    }
  }
`;
export default function TagsMoney() {
  return (
    <TagsStyle>
      <ul>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
    </TagsStyle>
  );
}
