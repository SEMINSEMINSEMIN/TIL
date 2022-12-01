// import "./app.css";
import style from "./app.module.css";
import Test from "./Components/Test.jsx";

// 캐스트캐이딩
export default function App() {
    return (
        <div className="App">
            {/* <div>Test 1</div> */}
            {/* <Test /> */}

            {/* 클래스명에 고유값을 추가해주어서 겹치지 않도록 함 */}
            {/* <div className="div1">Test 1</div> */}

            {/* module.css */}
            <div className={style.test}>Test 1</div>
            <Test />
        </div>
    );
}
