function App() {
  return (
    <div className="App">
      <Hello name="licat"/>
    </div>
  );
}
// 콘솔 창에 에러 뜸
// 컴포넌트 안에서 '리스트'를 렌더링할 때는 꼭 key값을 넣어줘야 함!
// 키값을 넣어주는 이유는 리액트에서 렌더링 작업을 진행했을 떼 어떤 요소에 변동이 있다면 그 요소만 새로 그려주기 위함임
// 키값이 없다면 어레이에 담긴 요소를 '모두' 다시 그려준다!
// 인덱스를 키값으로 사용하는 것은 권장하지 않는다.
function Hello({name}){
  const num = [1, 2, 3, 4, 5];

  const numComponentList = num.map(i => <p>안녕, {name} {i}호</p>);

  return (
    <div>
      {numComponentList}
    </div>
  )

}
export default App;
