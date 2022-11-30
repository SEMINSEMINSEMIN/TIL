import { useState } from "react";
import Product from "./Components/Product";

function App() {
  const [num, setNum] = useState(0);

  const handleClickEvent = (e) => {
    setNum(num + 1);
  };

  return (
    <div className="App">
      <h1>test2</h1>
      <Product />
      <button onClick={handleClickEvent}>클릭! {num}</button>
    </div>
  );
}

export default App;
