// `Lazy initialize`는 `useState`를 사용하여 state를 초기화하는 과정을 **lazy(게으르게)**하게 실행하는 것입니다.
import React, { useEffect, useState } from "react";

function getName() {
  console.log("사실은 겁나 오래기다리는중..."); // 버튼 누를 때마다 출력됨, 컴포넌트가 렌더링될 때마다 getName 함수 실행
  return "개리";
}

function App() {
  const [name, setName] = useState(getName());
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
