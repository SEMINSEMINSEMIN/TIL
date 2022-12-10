import React from 'react'
import DataItem from './DataItem';
import { DataCont } from './dataList.style';

export default function DataList({data}) {
  const dataList = data.map((element, index) => {
    return (
      <DataItem key={index} name={element.name} age={element.age} />
    );
  });

  return (
    <DataCont>
      {dataList}
    </DataCont>
  );
}
