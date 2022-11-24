import {useState} from 'react'

function Resume(props){
  const [like, setLike] = useState(0);
  const [message, setMessage] = useState('hello');

  function handleClickLike(){
    setLike(like + 1);
  }

  function handleMouseOver(){
    setMessage('world');
  }

  function handleMouseOut(){
    setMessage('hello');
  }

  return (
    <div>
      <button onClick={handleClickLike}>like: {like}</button>
      <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>마우스 오버해보세요.</button>
      <p>{message}</p>
    </div>
  )
}

function App(){
  return (
    <>
      <Resume/>
    </>
  )
}

export default App;