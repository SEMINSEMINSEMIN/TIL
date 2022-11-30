import './app copy.css'

function App() {
  // 자바스립트 주석과 같음
  // console.log('주석입니다.')
  const styleH2 = {border: 'solid 1px red',
  color: 'green', fontSize: '32px'};
  return (
    <div>
      {/* 최상위태그는 하나만! */}
      <h1>hello world</h1>
      <h2>hello world</h2>
      {/* in-line 스타일로 적용할 때는 오브젝트 형태로 작성해야 함 */}
      <h2 style={{border: 'solid 1px black',
      color: 'blue', fontSize: '32px'}}>hello world</h2>
      <h2 style={styleH2}>hello world</h2>
      {/* 리액트에서는 class가 아니라 className으로 해줘야 함 */}
      <p className='content'>hello world</p>
      {/*
      <p>hello world</p>
      <p>hello world</p>
      <p>hello world</p>
      */}
    </div>
  );
}

export default App;