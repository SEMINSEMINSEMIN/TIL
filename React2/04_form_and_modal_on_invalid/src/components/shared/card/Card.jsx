import React from "react";
import { CardCont } from "./card.style";

export default function Card(props) {
  return (
    <CardCont>
        {props.children}
    </CardCont>
  )
}
