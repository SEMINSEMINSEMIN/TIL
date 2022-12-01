function One() {
    return <p>one</p>;
}

function Two() {
    return <p>two</p>;
}

function Three() {
    return <p>three</p>;
}

function App() {
    return (
        <div>
            {[
                <One key="one" />,
                <Two key="two" />,
                <Three key="three" />,
                [
                    <One key="one" />,
                    <Two key="two" />,
                    [<One key="one" />, <Two key="two" />],
                ],
            ]}
        </div>
    );
}

export default App;
