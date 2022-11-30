import React from "react";
import useInput from "../Hook/useInput";

function SomethingComponent() {
  const [value, onChange] = useInput("알렉스");
  return (
    <>
      <input type="text" onChange={onChange} />
      <div>{value}가 강해졌다 돌격해!</div>
    </>
  );
}
export default SomethingComponent;
