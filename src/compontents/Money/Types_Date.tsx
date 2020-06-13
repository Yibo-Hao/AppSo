import React, {useEffect, useState} from "react";
import styled from "styled-components";

const TypeStyle = styled.section`
  ul {
    display: flex;
    li {
      background: rgb(241, 241, 241);
      margin: 10px 0;
      border-radius: 16px;
      line-height: 20px;
      padding: 5px 0.75em;
      font-size: 14px;
      &.selected {
        background: rgb(237, 248, 242);
        color: rgb(120, 218, 185);
        border: 0.5px solid rgb(157, 218, 185);
      }
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

const TypeDateStyleWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 5px 16px;
  color: rgb(189, 189, 189);
`;
type Props = {
  type: "-" | "+";
  onChange: (type: "-" | "+") => void;
};

export default function TypesDate(props: Props) {
  const [typeList] = useState<("-" | "+")[]>(["-", "+"]);
  const [selectedType, setSelectedType] = useState<("-" | "+")>(props.type);
  useEffect(()=>{props.onChange(selectedType)},[selectedType])
  return (
    <TypeDateStyleWrapper>
      <TypeStyle>
        <ul>
          {typeList.map(c => {
            return (
              <li
                key={c}
                className={selectedType === c ? "selected" : ""}
                onClick={() => {
                  setSelectedType(c);
                }}
              >
                {c === "-" ? "支出" : "收入"}
              </li>
            );
          })}
        </ul>
      </TypeStyle>
      <DateStyle>
        <div>6月4日</div>
      </DateStyle>
    </TypeDateStyleWrapper>
  );
}
