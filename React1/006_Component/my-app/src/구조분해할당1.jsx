function Test({ one, two }) {
  return (
    <>
      <p>{one}</p>
      <p>{two}</p>
    </>
  );
}

function App() {
  return (
    <div>
      <Test {...{ one: "hello", two: "world" }} />
    </div>
  );
}
export default App;
