// 메모제이션 기법
//// 부하가 생기는 함수를 반복해서 작업할 때 기억해두었다가 사용하는 기법.
//// 렌더링이 될 때 이전제 작업해두었던 결과값을 가지고 있다가 반영해줌.
//// 재귀함수의 피보나치 순열
// useMemo: 컴포넌트 성능 최적화. memoization 기법 사용

// App copy 해결
import { useState, useMemo } from "react";

function 부하() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  return s;
}

function App() {
  const [count, setCount] = useState(0);
  const result = useMemo(() => {
    return 부하();
  }, []);

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
    </div>
  );
}
export default App;
