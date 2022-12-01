import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            {/* 라우트를 감싸줍니다. */}
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/one" element={<One name="licat" />} />
                <Route path="/two" element={<Two />} />
                <Route
                    path="/three"
                    element={
                        <Three
                            style={{ backgroundColor: "red", color: "white" }}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

function Index() {
    return <h1>hello world0</h1>;
}

function One({ name }) {
    return <h1>{name} world1</h1>;
}

function Two() {
    return <h1>hello world2</h1>;
}

function Three({ style }) {
    return <h1 style={style}>hello world3</h1>;
}

export default App;
