/*
작은 프로젝트에서는 props 전달은 문제가 없습니다. 
하지만 프로젝트가 커져서 부모가 n번째 자손에게 넘겨줘야 한다면 n-1개의 자손에게 props를 사용하여 전달하게 됩니다. 
단지 전달을 위해서 말이죠! 계속해서 불필요한 props를 사용하게 되고 의미 없는 값들이 컴포넌트들을 스쳐가게 됩니다. 
*/

// context: props를 사용하지 않고 데이터를 전달하도록 해줌, props에 대한 '전역' 데이터 저장소
// 필요에 의해서만 사용하길 권고함
// const App = () => {
//   return (
//     <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
//   );
// };

// const HelloLicat = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h2>{props.value.id}</h2>
//       <strong>{props.value.name}</strong>
//       <HelloLicatTwo value={{name:props.value.name, id: props.value.id}}/>
//     </div>
//   );
// };

// const HelloLicatTwo = (props) => {
//   return (
//     <div>
//       <h2>Two : {props.value.id}</h2>
//       <strong>Two : {props.value.name}</strong>
//     </div>
//   );
// };

// export default App;

const App = () => {
  return <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />;
};

const HelloLicat = ({ value: { name, id } }) => {
  return (
    <div>
      <h2>{id}</h2>
      <strong>{name}</strong>
      <HelloLicatTwo value={{ name, id }} />
    </div>
  );
};

const HelloLicatTwo = ({ value: { name, id } }) => {
  return (
    <div>
      <h2>Two : {id}</h2>
      <strong>Two : {name}</strong>
    </div>
  );
};

export default App;
