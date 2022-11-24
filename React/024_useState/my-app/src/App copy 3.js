import {useState} from 'react'

function Resume(props){
  const [like, setLike] = useState(0);
  let heart = like % 2 === 1 ? '❤️' : '';

  function handleClickLike(){
    setLike(like + 1);
    console.log(like);
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