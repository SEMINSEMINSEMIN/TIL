// state 끌어올리기: https://paullabworkspace.notion.site/state-lifting-state-up-a0dc79c680db4a29a973cd0316ce040b

import {useState} from 'react';

// let user = {
//   login: false,
//   id: 'hojun@weniv.com',
//   nickname: 'jun'
// }

function Homepage(props){
  const handleClickEvent = (e) => {
    const logoutConfirm = window.confirm("로그인 하시겠습니까?");
    if (logoutConfirm){
      props.loginVal(false);
    }
  }

  return (
    <div>
      <h1>환영합니다</h1>
      <button onClick={handleClickEvent}>로그아웃</button>
    </div>
  )
}

function Login(props){
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    if (id === '' && pw === ''){
      alert('아이디와 패스워드를 입력하지 않았습니다.');
    } else if (id === ''){
      alert('아이디를 입력하지 않았습니다.');
    } else if (pw === ''){
      alert('패스워드를 입력하지 않았습니다.');
    } else {
      // alert(`id : ${id}, pw: ${pw}`);
      alert('로그인 되었습니다.');
      props.loginVal(true);
    }
  }

  const handleLoginInput = (e) => {
    console.log('id', e.target.value);
    setId(e.target.value);
  }

  const handlePasswordInput = (e) => {
    console.log('pw', e.target.value);
    setPw(e.target.value);
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 : <input type="text" onChange={handleLoginInput}/>
      </label>
      <br/>
      <label>
        비밀번호 : <input type="password" onChange={handlePasswordInput}/>
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      {login ? <Homepage loginVal={setLogin}/> : <Login loginVal={setLogin}/>}
    </div>
  )
}
export default App;
