import React  from "react";
import styled from "styled-components";
import { Link} from "react-router-dom";

const NoteStyle = styled.section`
  padding: 0 16px 10px 16px;
  a {
    background: rgb(255, 255, 255);
    font-size: 14px;
    color: rgb(87, 107, 149);
    line-height: 20px;
  }
`;
export default function NoteMoney() {
  return (
    <NoteStyle>
      <Link to={`/money/note`}>添加备注</Link>
    </NoteStyle>
  );
}
