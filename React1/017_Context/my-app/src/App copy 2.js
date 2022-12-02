import React, { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
    return <HelloLicat value={{ name: "세민", id: "ksm9802" }} />;
};

const HelloLicat = ({ value: { name, id } }) => {
    return (
        <div>
            <h2>{name}</h2>
            <strong>{id}</strong>
            <HelloLicatTwo />
        </div>
    );
};

const HelloLicatTwo = () => {
    return (
        <UserInfo.Consumer>
            {(value) => (
                <div>
                    <h2>{value.name}</h2>
                    <strong>{value.id}</strong>
                </div>
            )}
        </UserInfo.Consumer>
    );
};

export default App;
