// useMemo는 렌더링 '중'에 실행되어서 의존하는 값이 '변경되었는지'를 체크하고, 의존성 값이 '변경'되었을 때만 값을 다시 계산
// 렌더링 전에 실행되어 메모이제이션한 것을 반환. 값이 바뀌었는지 확인하고 렌더링 '전'에 저장된 것을 보내줌.
// 최적화할 함수와 함수가 의존하게 될 값을 useMemo에게 전달

import { useState, useMemo, useRef } from "react";

function App() {
  const inputName = useRef(null);
  const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  function handleInputName(e) {
    setName(e.target.value); // onChange시마다 렌더링, 렌더링할 때마다 호출
    console.log("렌더링 - 1");
  }

  function handleIdName(e) {
    setId(e.target.value); // onChange시마다 렌더링, 렌더링할 때마다 호출
    console.log("렌더링 - 2");
  }

  function handleSubmit(e) {
    e.preventDefault();

    // userInfo.push({name:inputName.current.value, id: inputId.current.value});
    // 이런식으로 push로 하면 리렌더링되지 않음.
    // userInfo에서 참조하는 것은 배열의 '주소'
    // 배열 안의 값을 아무리 바꿔도 참조하고 있는 것은 배열 안의 '값'이 아니라 객체의 '주소'
    // userInfo => 주소(a) => 객체(b), b만 바뀜, a는 바뀌는게 아님
    // 리액트는 새로운 값으로 변했다고 생각하지 않기 때문에 리렌더링이 일어나지 않는다.
    const newInfo = [...userInfo, { name, id }];
    console.log("렌더링 - 3");
    inputName.current.value = "";
    inputId.current.value = "";
    inputName.current.focus();
    setUserInfo(newInfo);
    console.log(newInfo);
  }

  // 아이디나 비밀번호에 값 입력할 때마다 getNum도 렌더링됨!
  // 문제점: getNum은 버튼 누를 때마다 바뀌면 되는건데 쓸데없이 렌더링되고 있음.
  function getNum(user) {
    console.log("getNum 렌더링");
    return user.length;
  }

  const n = useMemo(() => getNum(userInfo), [userInfo]);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInputName}
          ref={inputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={handleIdName}
          ref={inputId}
        />
        <button type="submit" onClick={handleSubmit}>
          버튼
        </button>
      </form>
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>{value.name}</h3>
            <strong>@{value.id}</strong>
          </li>
        ))}
      </ul>
      <span>{n}</span>
    </div>
  );
}
export default App;
