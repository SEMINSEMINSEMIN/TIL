function One(){
  return <p>one</p>
}

function Two(){
  return <p>two</p>
}

function Three(){
  return <p>three</p>
}

function App(){
  return (
    <div>
      {[
        <One key="100"/>, 
        <Two key="200"/>, 
        <Three key="300"/>,
        [
          <One key="400"/>,
          <Two key="500"/>,
          [
            // 나와 같은 컴포넌트가 동일한 키를 가지고 있으면 Error
            <One key="100"/>,
            // 나와 다른 컴포넌트가 동일한 키를 가지고 있으면 Error가 나진 않습니다.
            <Two key="100"/>
          ]
        ]
      ]}
    </div>
  )
}

export default App;