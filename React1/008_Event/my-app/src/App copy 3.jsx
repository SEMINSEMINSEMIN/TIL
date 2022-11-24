function App() {
  const handleOnMouseEnter = () => {
    console.log("안녕하세요!");
  }

  const handleOnMouseLeave = () => {
    console.log("안녕히 가세요!");
  }

  return (
    <div className="App">
      <p 
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave = {handleOnMouseLeave}
      >
        여기에 마우스를 올려보세요!
      </p>
    </div>
  );
}
export default App;
