function Resume(props){
  let like = 0;

  function clickLike(){
    like += 1;
    console.log(like);
  }

  return (
    <div>
      <h1>{props.name} 자기소개서</h1>
      {/* 변수의 값이 바뀌어도 페이지는 렌더링하지 않는다 */}
      {/* 모든 변수가 변할 때마다 컴포넌트를 업데이트 한다면 많은 리소스가 낭비될 것 */}
      {/* 특정 변수를 지정하여 그 변수가 변할 때마다 페이지를 업데이트 하라는 명령을 내려주어야 함: useState */}
      {/* 
        조화 과정을 거친다:
        React의 elements는 자바스크립트의 객체 형태, immutable한 속성
        엄밀하게 따진다면 업데이트라고 표현을 하는 거보다는 교체된다고 표현하는 게 맞음
        
        컴퍼넌트: 자동차 공장
        element: 자동차
      */}
      <button onClick={clickLike}>like <span>{like}</span></button>
    </div>
  )
}

function App(){
  return (
    <div className="App">
      <Resume name="강세민"/>
    </div>
  )
}

export default App;