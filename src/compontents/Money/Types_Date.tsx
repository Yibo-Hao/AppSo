import React from "react";
import styled from "styled-components";

const TypeStyle = styled.section`
  ul {
    display: flex;
    li {
      background: rgb(241, 241, 241);
      margin: 10px 0;
      border-radius: 16px;
      line-height: 20px;
      padding: 0.25em 0.75em;
      font-size: 14px;
      &:last-child {
        margin-left: 10px;
      }
    }
  }
`;

const DateStyle = styled.section`
  div {
    background: rgb(241, 241, 241);
    border-radius: 16px;
    line-height: 20px;
    padding: 0.25em 0.75em;
    font-size: 14px;
    margin: 10px 0;
    color: #000;
  }
`;

const Type_DateStyle_Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  padding: 0 16px;
  color: rgb(189,189,189);
`;
export default function Types_Date() {
    return (
        <Type_DateStyle_Wrapper>
            <TypeStyle>
                <ul>
                    <li>支出</li>
                    <li>收入</li>
                </ul>
            </TypeStyle>
            <DateStyle>
                <div>6月4日</div>
            </DateStyle>
        </Type_DateStyle_Wrapper>
    );
}