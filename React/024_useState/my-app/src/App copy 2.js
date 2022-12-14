import {useState} from 'react'

function Resume({이름, 취미, 자기소개}){
  const [like, setLike] = useState(0);

  function clickLike(){
    setLike(like + 1);
    // setLike(like + 2);
    console.log(like);
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      <button onClick={clickLike}>{like}</button>
    </section>
  )
}

function App(){
  return (
    <main>
      <Resume
        이름="이호준"
        취미="코딩"
        자기소개="안녕하세요. 제주코딩베이스캠프 이호준입니다."
      />
    </main>
  )
}

export default App;