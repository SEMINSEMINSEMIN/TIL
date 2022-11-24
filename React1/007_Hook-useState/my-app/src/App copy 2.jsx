import {useState} from 'react'

// 다시 렌더링 할 필요가 없는 데이터는 useState를 사용하지 않음으로써 자원을 아낄 수 있다

function Resume(props){
  const [like, setLike] = useState(0);

  function clickLike(){
    setLike(like + 1); // like = like + 1
    console.log(like);
  }

  return (
    <div>
      <h1>{props.name} 자기소개서</h1>
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