import React from 'react'
import { EachData } from './dataItem.style'

export default function DataItem({name, age}) {
  const liTxt = `${name} (${age} years old)`;

  return (
    <EachData>{liTxt}</EachData>
  );
}
