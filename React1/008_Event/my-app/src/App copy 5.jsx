import { useState } from "react";

function App() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [submit, setSubmit] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // console.log("submit");
        setSubmit("제출되었습니다.");
    };

    const handleLoginInput = (e) => {
        setId(e.target.value);
        // console.log("id", e.target.value);
    };

    const handlePasswordInput = (e) => {
        setPw(e.target.value);
        // console.log("pw", e.target.value);
    };

    return (
        <>
            <form onSubmit={handleLoginSubmit}>
                <label>
                    아이디 : <input type="text" onChange={handleLoginInput} />
                </label>
                <br />
                <label>
                    비밀번호 :{" "}
                    <input type="password" onChange={handlePasswordInput} />
                </label>
                <button type="submit">로그인</button>
            </form>
            <div>
                <p>{id}</p>
                <p>{pw}</p>
                <p>{submit}</p>
            </div>
        </>
    );
}
export default App;
