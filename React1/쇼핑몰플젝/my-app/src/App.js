import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    useLocation,
} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

import Main from "./Pages/Main";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
  useEffect(() => {
    axios.get("")
  })
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;




export default function Product() {
  useEffect(() => {
    // '마운트 될 때' '브라우저에 그려진 후' 딱 한 번 실행
    axios.get("http://test.api.weniv.co.kr/mall").then((res) => {
      console.log("axios");
      console.log(res); // Object
      console.log(res.data);
    });
    fetch("http://test.api.weniv.co.kr/mall")
      .then((res) => {
        console.log("fetch");
        console.log(res); // Response
        // console.log(res.json()) // pending됩니다.
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div>Product</div>;
}
