import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Icon from "../Icon";
const NumberPadStyle = styled.section`
  button {
    width: 25%;
    background: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 500;
    line-height: 64px;
    border-radius: 6px;
    box-shadow: inset 0 0 0 4px rgb(251, 251, 251);
    touch-action: manipulation;
  }
  .OK {
    line-height: 192px;
    float: right;
    color: white;
    font-size: 18px;
    background: rgb(157, 216, 184);
  }
  .zero {
    width: 50%;
  }
`;
type Props = {
    outPut: string;
    onChange: (outPut: string) => void;
};
export default function NumberPad(props: Props) {
  const [outPut, _setOutPut] = useState(props.outPut);
  useEffect(()=>{props.onChange(outPut)},[outPut])
  const setOutPut = (outPut: string) => {
    if (outPut.length > 14) {
      outPut = outPut.slice(0, 14);
    }
    _setOutPut(outPut);
  };
  const onClickNumber = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {
      return;
    }
    switch (text) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        setOutPut(outPut + text);
        break;
      case "确定":
        break;
      case ".":
        if (outPut.indexOf(text) === -1 && outPut.length !== 0)
          setOutPut(outPut + text);
        break;
    }
  };
  const onClickDelete = () => {
    setOutPut(outPut.slice(0, outPut.length - 1));
  };
  return (
    <NumberPadStyle onClick={onClickNumber}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className="delete" onClick={onClickDelete}>
        <Icon name="delete" />
      </button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="OK">确定</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className="zero">0</button>
      <button>.</button>
    </NumberPadStyle>
  );
}
