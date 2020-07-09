import React, { useEffect, useState } from "react";
import { useTags } from "../Money/useTags";
import useRecord from "../Money/useRecord";
import styled from "styled-components";
const Box = styled.div<{ height: string; index: number[]}>`
  overflow: auto;
  height: ${props => props.height};
  font-size: 16px;
  position: relative;
  ul {
    &::before {
      content: "";
      background: #c5cae9;
      width: 5px;
      height: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .timeline-item {
    width: 100%;
    margin-bottom: 40px;
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
    padding: 10px 30px;
    border-radius: 4px;
    background: #f5f5f5;
    box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
  }
`;
const Timeline: React.FunctionComponent<{ height: string }> = props => {
  const { records } = useRecord();
  const { getName } = useTags();
  const [height, setHeight] = useState('0px');
  const ref = React.useRef(null);
  useEffect(() => {
    let ulHeight =
      (ref.current! as HTMLUListElement).getBoundingClientRect().height + "px";
    setHeight(ulHeight);
  }, []);
  const findIndex = () => {
    const indexArray: number[] = [];
    for (let i = 0; i < records.length; i++) {
      if (records[i].type === "+") {
        indexArray.push(i);
      }
    }
    return indexArray;
  };
  return (
    <Box
      height={props.height}
      index={findIndex()}
    >
      <ul className="ul" ref={ref}>
        {records.map(r => {
          return (
            <li key={r.type + r.tagId} className="timeline-item">
              <div className="timeline-img" />
              <div className="timeline-content js--fadeInLeft">
                <div>{getName(r.type, r.tagId)}</div>
                <div className="date">{r.date}</div>
                <p>{r.note}</p>
                <div>{r.outPut}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};
export default Timeline;
