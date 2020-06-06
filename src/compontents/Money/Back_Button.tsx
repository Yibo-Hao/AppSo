import React from "react";
import styled from "styled-components";
import Icon from "../Icon"
const Button = styled.button`
  font-size: 22px;
  background: rgb(251,251,251);
  padding: 15px 10px;
  :first-child{
    line-height: 30px;
  }
`
export default function BackButton() {
    return(
        <section>
            <Button>
                <Icon name="back"/>
            </Button>
        </section>
    )
}