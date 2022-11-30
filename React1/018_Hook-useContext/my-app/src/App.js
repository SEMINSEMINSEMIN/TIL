// 파일 분리 경우
import React, { useContext, createContext } from "react";
import HelloLicatTwo from "./HelloLicatTwo";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return <HelloLicat />;
};

const HelloLicat = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <>
      <h2>{name}</h2>
      <strong>{id}</strong>
      <HelloLicatTwo />
    </>
  );
};

export default App;
