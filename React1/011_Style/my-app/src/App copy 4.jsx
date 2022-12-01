// 클래스 네임 고민할 필요 없음
// 클래스가 겹치는지 안 겹치는지 고려할 필요가 없음
// js에서 css 처리 가능

import styled from "styled-components";

const ContentDiv = styled.div`
    margin: 40px;
    border: ${({ borderColor }) =>
        borderColor === "red" ? "1px solid red" : "1px solid black"};
`;
const ContentH2 = styled.h2`
    width: 200px;
    margin: 0 auto;
    text-align: center;
    color: ${({ name }) => (name === "hello" ? "red" : "black")};
`;

function App() {
    return (
        <>
            <ContentDiv borderColor="red">
                <ContentH2 name="hello">Q&A</ContentH2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nihil corporis consectetur, suscipit delectus nulla labore
                    officiis corrupti ratione itaque. Sequi, modi corrupti?
                    Doloribus voluptatem ipsa libero reiciendis quas expedita
                    laboriosam.
                </p>
            </ContentDiv>
            <ContentDiv>
                <ContentH2 name="world">Q&A</ContentH2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nihil corporis consectetur, suscipit delectus nulla labore
                    officiis corrupti ratione itaque. Sequi, modi corrupti?
                    Doloribus voluptatem ipsa libero reiciendis quas expedita
                    laboriosam.
                </p>
            </ContentDiv>
        </>
    );
}
export default App;
