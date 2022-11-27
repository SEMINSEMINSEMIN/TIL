// 처음 실행될 때도 alert가 뜨는 코드
import {useEffect, useState} from 'react'

function Counter () {
  const [count, setCount] = useState(0);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };
  // useEffect는 state를 지정하여 해당 state가 변경되었음을 감지하면 함수를 실행함
  // 페이지 새로고침시 버튼을 클릭하지 않아도 '짝수입니다!라는 메시지가 나옴.
  // 이유는 useState(0)에서 count값을 0으로 초기화하면서 count 값이 변하기 때문

  // useEffect의 구조
  /*
  useEffect(()=>{
    // state가 변경되어 렌더링 될 때 실행하는 부분
    return () => {
      // 다시 렌더링 하기 전 컴포넌트를 지울 것임
      // 이 과정은 지우기 '전'에 실행되는 부분
      // clean-up
      // 초기화 시켜줄 function
    }
  },[state값이 들어감. 들어가지 않으면 최초 한 번만 실행됨])
  */

  // useEffect의 형태
  /*
  // 컴포넌트가 업데이트 될 때마다 매번 실행
  useEffect(()=>{
    console.log('hello world');
  })

  // 처음에만 실행
  useEffect(()=>{
    console.log('hello world');
  }, [])

  // 변수들의 변화가 일어날 때마다 실행
  useEffect(()=>{
    console.log('hello world');
  }, [변수1, 변수2, ...])
  */
  useEffect(()=>{
    if (count % 2){
      alert('홀수 입니다.');
    } else {
      alert('짝수 입니다.');
    }
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
