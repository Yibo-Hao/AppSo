import React from "react";
import useRecord from "../Money/useRecord";
const Timeline: React.FunctionComponent = () => {
  const { records } = useRecord();
  return (
    <div>
      {records.map(r => {
        return <div>{r.type}{r.tagId}{r.outPut}</div>;
      })}
    </div>
  );
};
export default Timeline;
