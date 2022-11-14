import {useState} from 'react'

function Resume(props){
  const [like, setLike] = useState(0);
  const 삼육구 = String(like).match(/[369]/g);
  let heart = 삼육구 ? '👏'.repeat(삼육구.length) : '';

  function handleClickLike(){
    setLike(like + 1);
  }

  return (
    <div>
      <button onClick={handleClickLike}>like: {like}</button>
      <span>{heart ? heart : ''}</span>
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