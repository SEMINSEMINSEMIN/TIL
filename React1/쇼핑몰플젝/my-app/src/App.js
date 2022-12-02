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
  useState
} from "react";
import Main from "./Pages/Main";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
    const [data, setData] = useState([]);
    useLayoutEffect(() => {
      axios.get("http://35.76.53.28:8080/mall")
        .then((res) => {
          setData(res.data);
        })
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main data={data} />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
