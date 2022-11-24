// module css
// index.js에 index.css를 import 하게 되면 전역으로 CSS 적용
// App.js에 app.css를 import 하게 되면 App 컴포넌트에 들어있는 모든 컴포넌트에 적용됨
// 부모 컴포넌트에서 import한 css는 자식까지 자동으로 적용되고, 자식 컴포넌트에 새로 css를 적용하게 되면 부모의 스타일은 무시되고 자식 컴포넌트에 import된 스타일이 적용된다.