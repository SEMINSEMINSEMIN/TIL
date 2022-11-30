// `Lazy initialize`는 `useState`를 사용하여 state를 초기화하는 과정을 **lazy(게으르게)**하게 실행하는 것입니다.
import React, { useEffect, useState } from "react";

function getName() {
  console.log("사실은 겁나 오래기다리는중...");
  return "개리";
}

function App() {
  // useState에 인수로 getName 함수 이름을 값으로 넘겨준다.
  // 최초 초기화 진행 과정에서 getName을 실행한다.
  // 이후 업데이트(리렌더링 과정)에서 초기화가 진행되지 않기 때문에 getName을 실행하는 부분이 생략된다.
  const [name, setName] = useState(getName);
  const [num, setNum] = useState(0);
  return (
    <>
      <div>
        안녕하세요 {name}! 현재 숫자는{num}입니다
      </div>
      <button onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</button>
    </>
  );
}

export default App;
