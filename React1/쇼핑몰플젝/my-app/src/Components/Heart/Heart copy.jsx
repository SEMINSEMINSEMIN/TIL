import React, { useState, useRef } from "react";
import { useLinkClickHandler } from "react-router-dom";
import styled from "styled-components";

export default function Heart() {
    const [clicked, setClicked] = useState(false);
    const [clickedStyle, setClickedStyle] = useState({
        backgroundColor: "white",
        color: "black",
    });

    const handleClickEvent = () => {
        setClicked(!clicked);
        console.log("렌더링");
        if (!clicked) {
            setClickedStyle({
                backgroundColor: "pink",
                color: "white",
            });
            console.log("렌더링1");
        } else {
            setClickedStyle({
                backgroundColor: "transparent",
                color: "black",
            });
            console.log("렌더링1");
        }
    };

    const Button = styled.button`
        background-color: ${clickedStyle.backgroundColor};
        color: ${clickedStyle.color};
    `;

    return <Button onClick={handleClickEvent}>하트</Button>;
}
