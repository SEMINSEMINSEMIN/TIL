import React, { useState, useEffect } from "react";

function Time(props) {
    const [today, setToday] = useState(new Date());
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    console.log("렌더링이 됩니다..?"); //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

    useEffect(() => {
        // 마운트 될 때, today 변경으로 인해 업데이트 될 때 브라우저에 '그려진 후' 실행된다.

        let time = setInterval(() => {
            const t = new Date();
            setToday(t);
            // setHour(t.getHours());
            // setMin(t.getMinutes());
            // setSec(t.getSeconds());
        }, 1000);
        return () => {
            // 업데이트가 될 때, 언마운트될 때 실행된다.

            //컴포넌트가 사라지기 전에 setinterval을 clearinterval해줍니다
            // The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval().
            clearInterval(time);
        };
    }, [today]);

    return (
        <div>
            <h1>
                시간 : {hour}시 {min}분 {sec}초
            </h1>
        </div>
    );
}

function App() {
    return (
        <div>
            <Time />
        </div>
    );
}

export default App;
