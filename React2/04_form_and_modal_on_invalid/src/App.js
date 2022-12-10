import { useState } from "react";
import InfoInputCont from "./components/InfoInputCont/InfoInputCont";
import Card from "./components/shared/card/Card";
import DataList from "./components/DataList/DataList";
import Modal from "./components/Modal/Modal";
import "./app.css";

function App() {
  const [data, setData] = useState([]);
  const [isModalOneVisible, setIsModalOneVisible] = useState(false);
  const [isModalTwoVisible, setIsModalTwoVisible] = useState(false);
  const modalVisibleManage = [setIsModalOneVisible, setIsModalTwoVisible];

  const dataManage = (newData) => {
    setData((prevData) => {
      return [...prevData, newData];
    });
  };

  let renderedData = null;
  if (data.length) {
    renderedData = (
      <Card>
        <DataList data={data}/>
      </Card>
    );
  }

  return (
    <>
      <InfoInputCont 
        handleSubmitModalByUpper={modalVisibleManage}
        handleSubmitDataByUpper={dataManage}
      />
      {
        isModalOneVisible && 
        <Modal 
          text={"Please enter a valid name and age (non-empty values)."}
          handleClickByUpper={() => setIsModalOneVisible(false)}
        />
      }
      {
        isModalTwoVisible && 
        <Modal 
          text={"Please enter a valid age (> 0)."}
          handleClickByUpper={() => setIsModalTwoVisible(false)}
        />
      }
      {renderedData}
    </>
  );
}
export default App;
