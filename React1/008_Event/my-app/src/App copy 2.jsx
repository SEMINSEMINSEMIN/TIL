function App() {
  // 이벤트 관련 함수는 앞에 handle을 붙여주는 것이 관례!
  function handleClickEvent(){
    console.log('클릭되었음!');
  }

  return (
    <div className="App">
      <h1 onClick={handleClickEvent}>test2</h1>
    </div>
  );
}
export default App;
