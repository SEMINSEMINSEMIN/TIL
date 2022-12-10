import React, {useState} from "react";
import { ModalBackground, ModalCard } from "./modal.style";

export default function Modal({text, handleClickByUpper}) {
  const handleClick = () => {
    handleClickByUpper();
  }

  return (
    <ModalBackground>
        <ModalCard>
            <h1>Invalid input</h1>
            <div>
                <p>{text}</p>
                <button type="click" onClick={handleClick}>Okay</button>
            </div>
        </ModalCard>
    </ModalBackground>
  );
}
