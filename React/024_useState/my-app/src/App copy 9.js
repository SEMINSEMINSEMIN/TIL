function App(){
  return (
    <Hello name="licat"/>
  )
}

function Hello(props){
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numComponentsArray = num.map(v => <p key={v.toString()}>안녕, {name} {v}호</p>);

  // key를 인덱스로 잡는 것은 권장하지 않습니다.
  // const numComponentsArray = num.map((v, i) => <p key={i}>안녕,{name} {v}호</p>)

  console.log(numComponentsArray);
  return (
    <div>
      {numComponentsArray}
    </div>
  )
}

export default App;