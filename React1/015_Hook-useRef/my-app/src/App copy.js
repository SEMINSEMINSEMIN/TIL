// useRef: 순수 자바스크립트 객체 생성
// 1. 렌더링과 상관없이 값을 변경하고 싶을 때. 다시 렌더링 되어도 그 값은 변하지 않는다.
/* 
2. 컴포넌트의 태그에 직접 접근하고 싶을 때. 자바스크립트에서 DOM element를 가지고 올 
때  querySelector나 getElementById를 사용하지만 React에서는 useRef를 사용한다. 
이때 useRef를 이용해 useRef가 접근한 태그 요소의 값을 바꿀 때는 리렌더링을 발생시키지 않는다는 것을 기억.
*/
// 남용하지 않기. ref를 사용하지 않고도 다른 기능을 사용해 구현할 수 있는지 고려한 후 사용할 것!
// ref는 전역으로 작동하지 않고 '컴포넌트 내부'에서만 작동한다. 재사용할 때 같은 컴포넌트이지만 '다르게' 작동한다.
import React, { useState, useEffect, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  let countThree = useRef(0)
  let countFour = 0 // '재렌더링시' 항상 0으로 초기화
  console.log(countThree)

  // 랜더링 됨
  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count) // 비동기 -> useEffect로 추적하면 동기 가능
  }
  // 랜더링 됨
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo) // 비동기 -> useEffect로 추적하면 동기 가능
  }
  // 클릭하면 변수의 값은 증가하지만 랜더링은 되지 않음
  // 12번 클릭 후 첫 번째 버튼 클릭하면 세 번째 영역이 12로 렌더링됨
  // 물론 버튼을 누를 때마다 렌더링 되지는 않지만
  // 왜냐하면 값을 기억하고 있으니까!!
  const handleCountUpThree = (e) => {
    countThree.current = countThree.current + 1
    console.log(countThree.current)
  }
  // 랜더링 안되고 다른 state가 변해서 재렌더링 되어도 0으로 초기화
  const handleCountUpFour = (e) => {
    countFour = countFour + 1
    console.log(countFour)
  }

  useEffect(() => {
    console.log('count가 감시되고 있습니다.')
    console.log(`감시된 변수 : ${count}`)
  }, [count]) // count가 변경되는 것을 감시
  return(
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>

      {/* .current로 접근 */}
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>

      {/* 네번째 버튼 클릭시 값은 증가하지만 렌더링 되지 않는다. */}
      {/* 네번째 버튼을 여러 번 클릭 후 첫 번째 버튼을 클릭하면 다시 렌더링될 것임. 그럼 그때 countFour는 0으로 초기화됨 */}
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
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
