import React from "react";
import { ModalBackground, ModalCard } from "./modal.style";

export default function Modal({text, handleClickByUpper}) {
  return (
    <div>
      <ModalBackground onClick={handleClickByUpper}/>
      <ModalCard>
          <h1>Invalid input</h1>
          <div>
              <p>{text}</p>
              <button type="click" onClick={handleClickByUpper}>Okay</button>
          </div>
      </ModalCard>
    </div>
  );
}
