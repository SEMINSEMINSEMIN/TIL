function App() {
    return (
        <>
            <Hello name="Semin" />
            {/* <Hello name="" /> */}
        </>
    );
}

function Hello({ name }) {
    if (name) {
        return <One name={name} />;
    } else {
        return <Two />;
    }
}

function One({ name }) {
    return (
        <div>
            <h1>안녕하세요! {name}님!</h1>
        </div>
    );
}

function Two() {
    return (
        <div>
            <h1>이름을 입력하지 않았습니다.</h1>
        </div>
    );
}
export default App;
