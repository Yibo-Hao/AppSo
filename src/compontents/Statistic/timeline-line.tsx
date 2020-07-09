import React from "react";
import styled from "styled-components";
const TimelineStyle = styled.div<{height:string}>`
  content: "";
  background: #c5cae9;
  width: 5px;
  height: ${props=>props.height};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const TimelineLine: React.FunctionComponent<{ height: string }> = props => {
  return <TimelineStyle height={props.height}/>;
};
export default TimelineLine;
