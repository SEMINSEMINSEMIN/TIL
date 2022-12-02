import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    useLocation,
} from "react-router-dom";
import axios from "axios";
import { 
  useLayoutEffect, 
  useRef 
} from "react";
import Main from "./Pages/Main";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
    const data = useRef(null);
    useLayoutEffect(() => {
      axios.get("http://35.76.53.28:8080/mall")
        .then((res) => {
          data.current = res.data;
        })
        .then(console.log(data));
    }, []);
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
