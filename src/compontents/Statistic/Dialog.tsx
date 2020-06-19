import React from "react";
import styled from "styled-components";
const DialogStyle = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  .wrapper {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    > .cost,
    .income {
      padding: 8px 16px;
      background: white;
      border-radius: 8px;
      margin-left: 8px;
    }
  }
`;
const Dialog = (props: {
  close: () => void;
  openModal: () => void;
  setType: (value:string) => void;
}) => {
  const close = props.close;
  const openModal = props.openModal;
  const setType = props.setType;
  return (
    <DialogStyle onClick={close}>
      <div className="wrapper">
        <div
          className="cost"
          onClick={() => {
            setType("cost");
            openModal();
            close();
          }}
        >
          支出
        </div>
        <div
          className="income"
          onClick={() => {
            setType("income");
            openModal();
            close();
          }}
        >
          收入
        </div>
      </div>
    </DialogStyle>
  );
};
export default Dialog;
