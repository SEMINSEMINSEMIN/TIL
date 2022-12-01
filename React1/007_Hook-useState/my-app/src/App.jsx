import { useState } from "react";

// 다시 렌더링 할 필요가 없는 데이터는 useState를 사용하지 않음으로써 자원을 아낄 수 있다

function Resume(props) {
    const [like, setLike] = useState("");

    function clickLike() {
        if (like === "") {
            setLike("Like");
        } else {
            setLike("");
        }
    }

    return (
        <div>
            <h1>{props.name} 자기소개서</h1>
            <p>취미 : {props.hobby}</p>
            <p>좋아하는 음식 : {props.food}</p>
            <p>
                좋아하는 색 :{" "}
                <span style={{ color: props.color }}>{props.color}</span>
            </p>
            <button onClick={clickLike}>like</button>
            <span>{like}</span>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Resume
                name="강세민"
                hobby="노래부르기"
                food="돼지고기 김치찌개"
                color="purple"
            />
        </div>
    );
}

export default App;
