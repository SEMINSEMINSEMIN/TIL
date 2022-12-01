// import "./test.css";
import style from "./test.module.css";

export default function Test() {
    return (
        // <div className="div2">Test 2</div>
        <div className={style.test}>Test 2</div>
    );
}
