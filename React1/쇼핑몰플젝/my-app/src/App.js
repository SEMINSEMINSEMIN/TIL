import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    useLocation,
} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
}
export default App;
