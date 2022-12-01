import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./구조분해할당1";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
