import React, { useEffect, useState } from "react";
import { useTags } from "../Money/useTags";
import useRecord from "../Money/useRecord";
import TimelineLine from "./timeline-line";
import styled from "styled-components";
import RecordItem from "../Money/record.d";
const Box = styled.div<{ height: string }>`
  overflow: auto;
  height: ${props => props.height};
  font-size: 16px;
  position: relative;
  .ul{
    .dateCategory{
      padding: 5px;
      display: inline-block;
    }
  }
  .timeline-item {
    width: 100%;
    margin-bottom: 40px;
    padding: 0 5px;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  .timeline-img {
    width: 15px;
    height: 15px;
    background: #3f51b5;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-top: 25px;
    margin-left: -7.5px;
  }
  .timeline-content {
    position: relative;
    width: 45%;
    padding: 10px;
    border-radius: 4px;
    background: rgb(190, 230, 208);
    box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
    .date {
      background: #ff4081;
      color: white;
      padding: 3px;
      border-radius: 4px;
      font-size: 12px;
      position: absolute;
      top: 0;
      right: 0;
    }
    p {
      margin-top: 5px;
      text-indent: 1em;
      font-size: 14px;
    }
    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .title {
      color: black;
      font-size: 20px;
    }
    .output {
      background: #3f51b5;
      color: #ffffff;
      padding: 8px 20px;
      text-transform: uppercase;
      display: inline-block;
      border-radius: 4px;
      margin-top: 5px;
      font-size: 12px;
      box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.6);
    }
  }
`;
const Timeline: React.FunctionComponent<{ height: string }> = props => {
  const { records } = useRecord();
  const { getName } = useTags();
  const [height, setHeight] = useState("0px");
  const ref = React.useRef(null);
  useEffect(() => {
    let ulHeight =
      (ref.current! as HTMLUListElement).getBoundingClientRect().height + "px";
    setHeight(ulHeight);
  }, []);
  const getStyle = (type: string) => {
    let style: { float: "right"; padding: string; background: string };
    if (type === "+") {
      style = {
        float: "right",
        padding: "10px",
        background: "rgb(249,228,183)"
      }
      return (style);
    } else {
      return undefined;
    }
  };
  const hash: { [key: string]: RecordItem[] ;} = {};
  records.forEach(r => {
    const key = r.date;
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] < b[0]) return 1;
    if (a[0] > b[0]) return -1;
    return 0;
  });
  return (
    <Box height={props.height}>
      <ul className="ul" ref={ref}>
        <TimelineLine height={height} />
        {array.map(([date, DateRecords]) => {
          return (
            <div  key={DateRecords[0].id}>
              <span className="dateCategory">{date}</span>
              <div>
                {DateRecords.map(r => {
                  return (
                    <li key={r.id} className="timeline-item">
                      <div className="timeline-img" />
                      <div
                        className="timeline-content"
                        style={getStyle(r.type)}
                      >
                        <div className="wrapper">
                          <div className="title">
                            {getName(r.type, r.tagId)}
                          </div>
                          <div className="date">{r.date}</div>
                        </div>
                        <p>{r.note}</p>
                        <div className="output">
                          {r.type}
                          {r.outPut}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </div>
            </div>
          );
        })}
      </ul>
    </Box>
  );
};
export default Timeline;
