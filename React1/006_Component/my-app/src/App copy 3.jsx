// 구조분해할당
function 개인정보({name, phone, github}){
  return (
    <section>
      <h2>개인정보</h2>
      <p>이름 : {name}</p>
      <p>전화번호 : {phone}</p>
      <p>github : {github}</p>
    </section>
  )
}

// 만약 구조가 반복된다먼
// 컴포넌트는 재사용성을 극대화한다
function 자격증과학력({title, contents}){
  return (
    <section>
      <h2>{title}</h2>
      <p>{contents}</p>
    </section>
  )
}

function 경력(){
  return (
    <section>
      <h2>경력</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae sed adipisci debitis, maxime iste inventore ducimus error quaerat vero commodi unde distinctio tempore, amet architecto dolorem? Harum, ipsa eum?</p>
    </section>
  )
}

function 수상경력(){
  return (
    <section>
      <h2>수상경력</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae sed adipisci debitis, maxime iste inventore ducimus error quaerat vero commodi unde distinctio tempore, amet architecto dolorem? Harum, ipsa eum?</p>
    </section>
  )
}

function App() {
  return (
    <div>
      <h1>이력서</h1>
      <개인정보 name='강세민' phone='01066372383' github='SEMINSEMINSEMIN'/>
      <자격증과학력 
        title='자격증'
        contents='사회조사분석사'
      />
      <자격증과학력
        title='학력'
        contents='숙명여자대학교'
      />
      <경력/>
      <수상경력/>
    </div>
  );
}
export default App;
