# 중요한 예제

-   `006_Component/my-app/src/App.jsx`
    -   파일 분리
-   `006_Component/my-app/src/구조분해할당.jsx`
-   `007_Hook-useState/my-app/src/App.jsx`
    -   useState + 조건
-   `008_Event/my-app/src/App.jsx`
    -   로그인 / 로그아웃
    -   state 끌어올리기
-   `009_Component_List/my-app/src/App.jsx`
    -   배열 내 데이터 뿌려주기
    -   key 값
-   `010_조건부_렌더링/my-app/src/App.jsx`
    -   navbar 활용 가능
    -   클릭에 따라 렌더링 바꾸고 스타일 적용
-   `011_Style/my-app/src/App copy.jsx`
    -   글로벌 스타일
-   `011_Style/my-app/src/App copy 2.jsx`
    -   리셋 스타일
-   `011_Style/my-app/src/App copy 3.jsx`
    -   스타일드 컴포넌트 사용법
-   `011_Style/my-app/src/App copy 4.jsx`
    -   스타일드 컴포넌트: props에 따른 조건부 스타일
-   `011_Style/my-app/src/조건부스타일함수형태.jsx`
    -   스타일드 컴포넌트: 조건부 스타일의 함수 형태
-   `011_Style/my-app/src/App copy 5.jsx`, `011_Style/my-app/src/styled_components_확장.jsx`
    -   스타일드 컴포넌트: 스타일드 컴포넌트 내려받기
-   `011_Style/my-app/src/App.jsx`
    -   css + styled-components
-   `011_Style/my-app/src/App copy 5.jsx`
    -   module css
-   `012_합성_컴포넌트/my-app/src/App copy.jsx`
    -   합성 컴포넌트 만들기
-   `013_Router/my-app/src/App copy.jsx`
    -   라우터: Component props 전달하기
-   `013_Router/my-app/src/App copy 2.jsx`
    -   라우터: Link
-   `013_Router/my-app/src/App copy 3.jsx`
    -   라우터: 파라미터 설정
-   `013_Router/my-app/src/App copy 4.jsx`
    -   라우터: 파라미터 설정 & useLocation
    -   게시글 등등에 활용 가능
-   `013_Router/my-app/src/App.jsx`
    -   중첩된 라우터

# 4. JSX

## 4.1. 기초

-   JSX: JavaScript + XML

## 4.2. JSX 문법

### 4.2.1 최상위 부모요소는 1개

### 4.2.2 주석

### 4.2.3 태그에 클래스 넣기 + 스타일 적용하기

-   클래스 정의: className
-   in-line 스타일 적용

    ```html
    <div style={{backgroundColor:"black", color:"white"}}></div>
    ```

    -   객체 형태로 정의
    -   camelCase(단어를 대문자로 구분): .css 파일을 만들어 사용할 때에는 그대로 사용

### 4.2.4 자바스크립트 사용하기

-   중괄호 내 JavaScript 문법 사용 가능
    -   App copy 2.jsx 참고

## 4.3. 실습 과제

-   App.jsx, app.css 참고

## 참고

-   [JSX 좀 더 알아보기](https://paullabworkspace.notion.site/JSX-9a4ef8f7cecb406e8d2be2ff9383706f)
    -   props는 **리액트 컴포넌트를 사용하며 정의한 어트리뷰트들**이 모여있는 객체
        ![](https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1e05956b-f5de-4fac-ad6e-5948beee9393%2FUntitled.png?table=block&id=85f8ed17-cbf2-42a6-84ad-edb4cc6e7a39&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=2000&userId=&cache=v2)

# 5. Fragment

## 5.1. 시맨틱한 마크업을 방해하는 요소

## 5.2. Fragments

-   Fragments 사용시 <div>와 같은 별도의 노드를 추가하지 않고 여러 개의 자식을 감싸줄 수 있다.
-   방법 1: App copy.js 참고

    ```js
    import React, { Fragment } from "react";

    function App() {
        return (
            <React.Fragment>
                <h1>안녕, 라이캣 1호!</h1>
                <h1>안녕, 라이캣 2호!</h1>
            </React.Fragment>
        );
    }
    ```

-   방법 2: App.js 참고
    ```js
    function App() {
        return (
            <>
                <h1>안녕, 라이캣 1호!</h1>
                <h1>안녕, 라이캣 2호!</h1>
            </>
        );
    }
    ```

## 5.3. Fragment 사용 비교

# 6. Component 만들기

App.jsx와 Components 폴더 참고

## 6.1. 컴포넌트 만들기

-   컴포넌트 이름을 지을 때 첫 글자는 대문자

## 6.2. Props 파라미터

## 6.3. 컴포넌트 파일 분리

-   파일 분리시 가장 윗줄에 `import React from 'react`를 입력.
    -   명시적으로 'react를 사용하겠다'라고 선언한다고 보면 됨

## 6.4. Quiz

## 6.5. 참고사항

### 6.5.1. 구조 분해 할당을 통한 props 전달

-   구조분해할당.jsx, 구조분해할당1.jsx 참고

# 7. Hook - useState

## 7.1. 컴포넌트에 변하는 데이터 넣고 싶어요.

-   모든 변수가 변할 때마다 컴포넌트를 업데이트 한다면 많은 리소스 낭비됨
-   특정 변수를 지정하여 그 변수가 변할 때마다 페이지를 업데이트 하라는 명령을 내려줘야 한다.

## 7.2. useState 사용해보기

```js
import React, { useState } from "react";
```

-   useState: 변수의 값이 변경될 때마다 페이지를 업데이트 하도록 만들어주는 것
-   setState를 통해 값이 변경될 때 리액트는 자동으로 해당 '컴포넌트'를 다시 렌더링해준다.

## 7.3. Quiz

# 8. React에서 이벤트 처리하기

## 8.1. DOM 이벤트와의 차이점

```js
function Resume(props) {
  const [like, setLike] = useState(0);

  function handleClickEvent() {
    setLike(like + 1);
  }

  return (
    <button onClick={handleClickEvent}>like</button> <span>{like}</span>
  );
}
```

-   React의 이벤트는 카멜케이스 사용
-   React는 JSX를 사용하여 함수로 이벤트 핸들러를 전달
    -   이벤트 관련 함수는 앞에 handle을 붙여주는 것이 관례!: App copy 2.jsx 참고

## 8.2. 리액트에서 지원하는 이벤트 종류

-   onClick: App copy 2.jsx
-   onChange: App copy 5.jsx, App copy 7.jsx(로그인), App.jsx(로그인 & 끌어올리기 - 로그인시 로그아웃시 화면 전환)
-   onInput:
-   onFocus
-   onMouse: App copy 3.jsx, App copy 4.jsx
-   onLeave: App copy 3.jsx, App copy 4.jsx
-   onSubmit: App copy 5.jsx, App copy 7.jsx(로그인), App.jsx(로그인 & 끌어올리기 - 로그인시 로그아웃시 화면 전환)
-   기타: https://ko.reactjs.org/docs/events.html#other-events

# 9. 컴포넌트 리스트 만들기

## 9.1. 컴포넌트 리스트의 필요성

코드가 반복되고 있음

```js
import "./App.css";

function App() {
    return <Hello name="licat" />;
}

function Hello(props) {
    const name = props.name;

    return (
        <div>
            <h1>안녕, {name} 1호</h1>
            <h1>안녕, {name} 2호</h1>
            <h1>안녕, {name} 3호</h1>
            <h1>안녕, {name} 4호</h1>
            <h1>안녕, {name} 5호</h1>
            <h1>안녕, {name} 6호</h1>
            <h1>안녕, {name} 7호</h1>
            <h1>안녕, {name} 8호</h1>
            <h1>안녕, {name} 9호</h1>
            <h1>안녕, {name} 10호</h1>
        </div>
    );
}

export default App;
```

## 9.2. 컴포넌트 리스트 만들기

-   컴포넌트 안에서 리스트를 렌더링 할 때는 꼭 key값을 넣어줘야 한다.
    -   이유: 리액트에서 렌더링 작업을 진행할 때 어떤 요소에 변동이 있다면 그 요소만 새로 그려주기 위함.
    -   키가 없는 경우: App copy.jsx, 콘솔창을 열어보면 경고가 뜸
    -   키가 있는 경우: App copy 2.jsx
-   일반적으로 배열의 id 값을 넣어준다. 고유의 값을 찾을 수 없다면 인덱스를 key로 사용하면 되지만 나중에 순서와 관련된 문제가 생길 수 있기 때문에 권장 x
-   key 값은 **동일한 컴포넌트 리스트**에서만 '유일값'이면 된다.

## 9.3. 컴포넌트 리스트를 직접 만들어보기

-   App copy 3.jsx

## 9.4. 연습문제

# 10. 조건부 렌더링

## 10.1. 조건에 따라 다른 페이지 렌더링

## 10.2. 나아가기

-   삼항 연산자
-   단락 회로 평가

    ```js
    true && <h1>hello world</h1> -> h1 출력
    false && <h1>hello world</h1> -> false 출력
    true || <h1>hello world</h1> -> true 출력
    false || <h1>hello world</h1> -> h1 출력

    // 예시
    newMail.length > 0 && <h1>읽지 않은 메일이 있습니다.</h1> -> h1 출력
    ```

# 11. 스타일 적용하기

## 11.1. styled-components

설치 방법

```
npm install styled-components
```

### 11.1.1. 글로벌 스타일 만들기

-   최상위 컴포넌트(App.js) 상단에 추가하면 **모든 하위 컴포넌트**에 스타일이 적용된다.

    ```js
    import { createGlobalStyle } from "styled-components";
    ```

-   App copy.jsx

### 11.1.2. Reset css

-   설치 방법

    ```
    npm i styled-reset
    ```

*   글로벌 스타일에 styled-reset 적용

    ```js
    import { createGlobalStyle } from "styled-components";
    import reset from "styled-reset";

    const GlobalStyle = createGlobalStyle`
      ${reset}
    `;
    ```

*   App copy 2.jsx

### 11.1.3. styled-components를 사용한 스타일 적용

-   불러오기

    ```js
    import styled from "styled-components";
    ```

*   App copy 3.jsx

### 11.1.4. props에 따른 조건부 스타일

-   App copy 4.jsx

### 11.1.5. 다양한 문법 활용

-   CSS 확장
    -   App copy 5.jsx: 스타일드 컴포넌트 내려 받기
    -   App.jsx: css + styled-components

## 11.2. module.css

-   index.js에 index.css를 import하면 전역으로 CSS가 적용된다. App.js에 app.css를 import하면 App 컴포넌트에 들어있는 모든 컴포넌트에 적용된다.
    ![](https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff40568e5-5a88-4b40-abd7-b7331cd0ee7e%2FUntitled.png?table=block&id=a117fa1e-1353-4d81-806c-d55ca067d724&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=490&userId=&cache=v2)
-   부모 컴포넌트에서 import한 css는 자식까지 자동으로 적용되고, 자식 컴포넌트에 새로 css를 적용하게 되면 부모의 스타일은 무시되고 자식 컴포넌트에 import된 스타일이 적용된다.

### 11.2.1. 일반 CSS일 때

-   해당 컴포넌트가 아닌 상위나 하위 컴포넌트에 영향을 줄 수 있다.

### 11.2.2. module.css일 때

-   자동으로 클래스명이 겹치지 않도록 처리해준다.

-   주의할 점: 적용하고자 하는 컴포넌트 이름과 반드시 일치시켜줘야 한다.
    -   Detail.jsx 파일에만 적용해주고 싶은 module.css의 파일명은 Detail.module.css여야 한다.

## 11.3. Quiz

## 11.4. 참고

### 11.4.1. styled components의 확장

-   `styled_components_확장.jsx`

### 11.4.2. 조건부 스타일의 함수 형태

-   `조건부스타일함수형태.jsx`

# 12. 합성 컴포넌트

-   일반적인 컴포넌트를 하나 만들고 그 안에 세부 기능을 가지는 컴포넌트를 합성
    ![](https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F72577288-6817-4121-a411-372329f9649c%2FUntitled.png?table=block&id=b15179d0-2a31-489e-9593-0275a156661a&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=1470&userId=&cache=v2)
    ![](https://paullabworkspace.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5e4de7f2-1ab5-4e43-a813-224ed51eea87%2FUntitled.png?table=block&id=637b7dc0-db50-4245-9b71-8106e5ff9e8a&spaceId=579fe283-28aa-489d-ae65-d683304becfc&width=670&userId=&cache=v2)
-   컴포넌트 사이에 들어가는 자식요소를 props.children으로 받아온다.
    -   App copy.jsx

# 13. React Router

## 13.1. 설치하기

```
npm install react-router-dom
```

## 13.2. BroserRouter, Routes, Route

```
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

### 13.2.1. Component props 전달하기

-   App copy.jsx

### 13.2.2 Link

-   link는 주소만 바꿀 뿐, 페이지를 새로 불러오지 않는다.
-   Link 작성법

    ```js
    // Link 작성하는 방법

    // 문자열
    <Link to="/courses?sort=name&sorting=asc" />

    // 객체
    <Link
      to={{
        pathname: "/courses",
        search: "?sort=name&sorting=asc",
        hash: "#the-hash",
        state: { fromDashboard: true }
      }}
    />
    ```

-   a 태그 대신 link 사용 이유
    -   a 태그: 클릭시 href에 설정해준 경로 이동과 동시에 페이지를 새로 불러오기 때문에 페이지 새로고침
    -   Link: HTML5 History API를 이용해 브라우저의 주소만 바꾸기 때문에 페이지를 불러오지 않고 dom만 조작해서 페이지를 보여줌
-   App copy 2.jsx

### 13.2.3. 파라미터 설정

-   App copy 3.jsx
-   App copy 4.jsx

### 13.2.4. 중첩된 Router

-   App.jsx

## 13.3. Quiz

-   퀴즈.jsx

*   **Home Page :** /
*   **Product Detail Page** : /products/:id
    -   ex) /products/1 , /products/2, /products/3, /products/4
*   **Product Detail Notice Page :** /products/:id/notice
    -   ex) /products/1/notice , /products/2/notice…
*   **Cart Page :** /cart
*   **Coupon Page :** /users/coupon
*   **Question Page :** /users/question
*   **Notice Page :** /users/notice
*   **User Page :** /users

## 13.4. 추가 연습문제
