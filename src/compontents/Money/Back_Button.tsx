import React from "react";
import styled from "styled-components";
import Icon from "../Icon"
const Button = styled.button`
  font-size: 20px;
  background: rgb(255,255,255);
  padding: 5px 10px;
`
export default function BackButton() {
    return(
        <section style={{border:"1px solid red"}}>
            <Button>
                <Icon name="back"/>
            </Button>
        </section>
    )
}