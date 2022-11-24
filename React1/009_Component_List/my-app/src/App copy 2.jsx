function App() {
  return (
    <div className="App">
      <Hello name="licat"/>
    </div>
  );
}

function Hello({name}){
  const num = [1, 2, 3, 4, 5];

  const numComponentList = num.map(i => <p key={i}>안녕, {name} {i}호</p>);

  return (
    <div>
      {numComponentList}
    </div>
  )

}
export default App;
