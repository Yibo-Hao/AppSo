import React from "react";
import styled from "styled-components";
require("../assets/assets.svg");
require("../assets/add.svg");
require("../assets/diary.svg");
require("../assets/more.svg");
require("../assets/statistic.svg");
require("../assets/back.svg");
require("../assets/eat.svg");
require("../assets/live.svg");
require("../assets/loan.svg");
require("../assets/delete.svg");
require("../assets/right.svg");
require("../assets/wait.svg");
require("../assets/shop.svg");
require("../assets/travel.svg");
require("../assets/salary.svg");
require("../assets/gift.svg");
require("../assets/business.svg");
require("../assets/award.svg");
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
