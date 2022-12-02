import React, { useState } from 'react'

export default function Heart() {
    const [bool, setBool] = useState(false);
    const handleClickColor = (e) => {
        bool === false ? setBool(true) : setBool(false);
        console.log('렌더링');
    };
  return (
    <span
     style={
        bool === false ?
        {color: 'black', backgroundColor:'transparent'} :
        {color: 'white', backgroundColor:'red'}
     }
     onClick={handleClickColor}
    >
        Heart
    </span>
  )
}
