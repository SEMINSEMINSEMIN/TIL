import { useState, useMemo, useRef } from "react";

function App() {
    const inputName = useRef(null);
    const inputId = useRef(null);
    const [userInfo, setUserInfo] = useState([]);
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    function handleInputName(e) {
        setName(e.target.value);
        console.log("렌더링 - 1");
    }

    function handleIdName(e) {
        setId(e.target.value);
        console.log("렌더링 - 2");
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newInfo = [...userInfo, { name, id }];
        inputName.current.value = "";
        inputId.current.value = "";
        inputName.current.focus();
        setUserInfo(newInfo);
        console.log("렌더링 - 3");
        console.log(newInfo);
    }

    // 아이디나 비밀번호에 값 입력할 때마다 getNum도 렌더링됨!
    // 문제점: getNum은 버튼 누를 때마다 바뀌면 되는건데 쓸데없이 렌더링되고 있음.
    function getNum(user) {
        console.log("getNum 렌더링");
        return user.length;
    }

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
            <span>{getNum(userInfo)}</span>
        </div>
    );
}
export default App;
