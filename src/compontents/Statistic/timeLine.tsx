import React from "react";
import { useTags } from "../Money/useTags";
import useRecord from "../Money/useRecord";
import styled from "styled-components";
const Box = styled.div<{ height: string }>`
  border: 1px solid red;
  overflow: auto;
  height: ${props => props.height};
  .ul {
    //&::before {
    //  content: "";
    //  display: block;
    //  width: 0;
    //  height: 100%;
    //  border: 1px dashed red;
    //  position: absolute;
    //  top: 0;
    //  left: 30px;
    //}
    &:last-of-type {
      top: 80px;
    }
    li{
    margin: 20px 60px 60px;
    position: relative;
    border: 1px solid red;
    padding: 10px 20px;
    background:rgb(255,153,153);
    color:#fff;
    border-radius: 10px;
    line-height: 20px;
}
  }
`;
const Timeline: React.FunctionComponent<{ height: string }> = (props) => {
  const { records } = useRecord();
  const { getName } = useTags();
  return (
    <Box height={props.height}>
      <ul className="ul">
        {records.map(r => {
          return (
            <li key={r.type + r.tagId} className="li">
              <span />
              <div className="title">{getName(r.type, r.tagId)}</div>
              <div className="info">{r.note}</div>
              <div className="name">{r.outPut}</div>
              <div className="time">
                <span>{r.date}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};
export default Timeline;
