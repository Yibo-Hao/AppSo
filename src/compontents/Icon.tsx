import React from "react";
import styled from "styled-components";
require("../assets/assets.svg");
require("../assets/add.svg");
require("../assets/diary.svg");
require("../assets/more.svg");
require("../assets/statistic.svg");

const SvgStyle = styled.svg`
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
`;
export default function Icon(props: { name: string }) {
  return (
    <SvgStyle aria-hidden="true">
      <use xlinkHref={"#" + props.name} />
    </SvgStyle>
  );
}
