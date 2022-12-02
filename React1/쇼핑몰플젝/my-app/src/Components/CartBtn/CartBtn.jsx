import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CartBtn() {
    const [bool, setBool] = useState(false);
    const handleMouseEnter = () => setBool(true);
    const handleMouseLeave = () => setBool(false);
    return (
    <Link
        to="/cart"
        style={
            bool === false ?
            {border: "5px solid black", transition: "linear 0.5s"} :
            {border: "5px solid red", transition: "linear 0.5s"}
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        CartBtn
    </Link>
    )
}
        