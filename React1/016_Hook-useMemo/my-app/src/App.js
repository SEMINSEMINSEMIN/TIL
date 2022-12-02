// useMemo는 렌더링 '중'에 실행되어서 의존하는 값이 '변경되었는지'를 체크하고, 의존성 값이 '변경'되었을 때만 값을 다시 계산
// 렌더링 전에 실행되어 메모이제이션한 것을 반환. 값이 바뀌었는지 확인하고 렌더링 '전'에 저장된 것을 보내줌.
// 최적화할 함수와 함수가 의존하게 될 값을 useMemo에게 전달

import { useState, useMemo, useRef } from "react";

function App() {
    const inputName = useRef(null);
    const inputId = useRef(null);
    const [userInfo, setUserInfo] = useState([]);
    // const [name, setName] = useState("");
    // const name = useRef(null);
    // const [id, setId] = useState("");
    // const id = useRef(null);

    function handleInputName(e) {
        // console.log(inputName.current);
        // setName(e.target.value); // onChange시마다 렌더링, 렌더링할 때마다 호출
        inputName.current.value = e.target.value;
        // console.log(inputName.current.value);
        // console.log(inputName.current);
        // console.log("렌더링 - 1");
    }

    function handleIdName(e) {
        // console.log(inputId.current);
        // setId(e.target.value); // onChange시마다 렌더링, 렌더링할 때마다 호출
        inputId.current.value = e.target.value;
        // console.log(inputId.current);
        // console.log("렌더링 - 2");
    }

    function handleSubmit(e) {
        // console.log(inputName.current);
        // console.log(inputId.current);
        e.preventDefault();
        const newInfo = [
            ...userInfo,
            { name: inputName.current.value, id: inputId.current.value },
        ];
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
