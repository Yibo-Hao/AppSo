import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../views/Money";
const TypeDateStyleWrapper = styled.section<TypeDateStyleWrapperProps>`
  display: flex;
  justify-content: space-between;
  padding: 5px 16px;
  color: rgb(189, 189, 189);
  > .typeStyle {
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
          ${props => props.selectedType}
        }

        &:last-child {
          margin-left: 10px;
        }
      }
    }
  }
  > .dateStyle {
    div {
      background: rgb(241, 241, 241);
      border-radius: 16px;
      line-height: 20px;
      padding: 0.25em 0.75em;
      font-size: 14px;
      margin: 10px 0;
      color: #000;
    }
  }
`;
type Props = {
  type: "-" | "+";
  date: string;
  onChange: (type: "-" | "+") => void;
};
type TypeDateStyleWrapperProps = {
  selectedType: {
    background: string;
    color: string;
    border: string;
  };
};

export default function TypesDate(props: Props) {
  const theme = useContext(ThemeContext);
  const [typeList] = useState<("-" | "+")[]>(["-", "+"]);
  const [selectedType, setSelectedType] = useState<"-" | "+">(props.type);
  const date = props.date.split("T")[0];
  useEffect(() => {
    props.onChange(selectedType);
  }, [selectedType]);
  useEffect(() => {
    setSelectedType(props.type);
  }, [props.type]);
  return (
    <TypeDateStyleWrapper selectedType={theme.type}>
      <section className="typeStyle">
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
      </section>
      <section className="dateStyle">
        <div>{date}</div>
      </section>
    </TypeDateStyleWrapper>
  );
}
