function App() {
  const name = "라이캣!";
  function 함수() {
    return 100;
  }
  const 변수 = 10;
  // const 값 = true;
  const 값 = false;
  const 값2 = null;

  const sortedRender = (arr) => {
    let str = "";
    const sorted = arr.sort((a, b) => a - b);
    for (let i in sorted) {
      if (i === sorted.length - 1) {
        str += `${sorted[i]}`;
      } else {
        str += `${sorted[i]}, `;
      }
    }
    return str;
  };

  return (
    <div className="App">
      <h1>안녕, {name} 1호</h1>
      <p>{100 + 1}</p>
      <p>{"hello" + "world"}</p>
      <p>{[1, 2, 3].map((x) => x ** 2)}</p>
      <p>{함수()}</p>
      <p>{변수}</p>
      <p>{값 ? "one" : "two"}</p>
      {/* nullish 연산자: 앞의 값이 null이거나 undefined라면 뒤의 값 */}
      <p>{값2 ?? "one"}</p>
      <p
        style={{
          color: "blue",
          fontSize: "30px",
          backgroundColor: "yellow",
          borderRadius: "3px",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        스타일 적용
      </p>
      <p>다음은 3, 1, 2, 5를 정렬한 결과입니다: {sortedRender([3, 1, 2, 5])}</p>
    </div>
  );
}

export default App;
