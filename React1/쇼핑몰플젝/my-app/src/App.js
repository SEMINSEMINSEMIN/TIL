import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    useLocation,
} from "react-router-dom";

import Main from "./Pages/Main";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

function App() {
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
