// useLayoutEffect와 useEffect의 차이
//// useLayoutEffect: 브라우저에 렌더링 되기 전 작업
//// useEffect: 브라우저에 렌더링 된 후 작업
import React, { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const handleonClick = () => {
    setNum(num + 1);
  };

  useLayoutEffect(() => {
    console.log("useLayoutEffect 1"); // 마운트 될 때 브라우저에 그려주기 전에 딱 '한 번' 실행하는 애
    return () => {
      console.log("useLayoutEffect return_1"); // 언마운트 될 때 단 한 번 실행된다
    };
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect 2"); // 마운트/업데이트 '될 때마다' 브라우저에 그려주기 전에 실행
    return () => {
      console.log("useLayoutEffect return_2"); // 업데이트가 될 때, 언마운트가 될 때 실행됨
    };
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect 3"); // 마운트 될 때, num state 변경으로 인해 업데이트 될 때 브라우저에 그려주기 전에 실행
    return () => {
      console.log("useLayoutEffect return_3"); /// 업데이트가 될 때, 언마운트가 될 때 실행된다.
    };
  }, [num]);

  // useLayoutEffect가 모두 끝난 후에야 브라우저에 그려주기 시작

  useEffect(() => {
    console.log("useEffect 1"); // 마운트 될 때 브라우저에 그려진 후 딱 한 번 실행
    return () => {
      console.log("useEffect return_1"); // 언마운트 될 때 단 한 번 실행
    };
  }, []);

  useEffect(() => {
    console.log("useEffect 2"); // 마운트/업데이트 될 때마다 브라우저에 그려진 후 실행
    return () => {
      console.log("useEffect return_2"); // 업데이트가 될 때, 언마운트가 될 때 실행된다.
    };
  });

  useEffect(() => {
    console.log("useEffect 3"); // 마운트 될 때, num state 변경으로 인해 업데이트 될 때 브라우저에 그려진 후 실행된다
    return () => {
      console.log("useEffect return_3"); // 업데이트가 될 때, 언마운트될 때 실행된다.
    };
  }, [num]);

  return <button onClick={handleonClick}>{num}</button>;
}

const Wrap = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => setIsVisible(!isVisible);
  return (
    <>
      <button onClick={handleClick}>
        {isVisible ? "언마운트시키기" : "마운트시키기"}
      </button>
      <br></br>
      {isVisible && <App />}
    </>
  );
};

export default Wrap;
