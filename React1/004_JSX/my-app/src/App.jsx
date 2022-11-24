import './app.css'

function App() {
  const name = '라이캣!';
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div>
      <div>
        <h1 className="opposite">안녕, {name} 1호</h1>
        <h1>안녕, {name} 2호</h1>
        <div className="black-space"></div>
      </div>
      <section className='black-section'>
        <h2 className="ir">날짜 및 시간</h2>
        <p className="red">년 : {year}</p>
        <p>월/일 : {month}/{date}</p>
        <p>시간: {hour}시 {min}분 {sec}초</p>
      </section>
    </div>
  );
}

export default App;