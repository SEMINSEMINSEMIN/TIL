// Context API에서 Context.consumer로 전달하던 방식을 Hooks의 useContext를 사용해서 더 편하게 값을 전달할 수 있다.
// useContext는 함수형 컴포넌트에서만 사용 가능하다.
import { useContext, createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
    return <HelloLicat value={{ name: "semin", id: "ksm9802" }} />;
};

// const HelloLicat = () => {
//   return (
//     <UserInfo.Consumer>
//       {(value) => (
//         <div>
//           <input type="text" />
//           <h2>{value.name}</h2>
//           <strong>{`@ ${value.id}`}</strong>
//         </div>
//       )}
//     </UserInfo.Consumer>
//   );
// };

const HelloLicat = ({ value: { name, id } }) => {
    return (
        <>
            <h2>{name}</h2>
            <strong>{id}</strong>
            <HelloLicatTwo />
        </>
    );
};

const HelloLicatTwo = () => {
    const { name, id } = useContext(UserInfo);
    return (
        <div>
            <h2>{name}</h2>
            <strong>{id}</strong>
        </div>
    );
};

export default App;
