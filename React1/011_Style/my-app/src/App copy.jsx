// createGlobalStyle(): 전역 스타일 컴포넌트, App.js 상단에 추가하면 모든 하위 컴포넌트에 스타일이 적용된다
import { createGlobalStyle } from "styled-components";
import Example from "./Components/Example.jsx";

const GlobalStyle = createGlobalStyle`
  span {
    color: red;
    font-size: 12px;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example/>
    </>
  );
}
export default App;
