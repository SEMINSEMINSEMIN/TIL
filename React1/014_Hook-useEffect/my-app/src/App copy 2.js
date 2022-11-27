// 처음 실행될 때도 alert가 뜨지 않는 코드
import {useEffect, useState} from 'react'

function Counter () {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);

  const handleCountUp = (e) => {
    setCount(count + 1);
  };

  useEffect(()=>{
    if (bool){
      if (count % 2){
        alert('홀수 입니다.');
      } else {
        alert('짝수 입니다.');
      }
    }
    setBool(true);
  }, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}
export default App;
