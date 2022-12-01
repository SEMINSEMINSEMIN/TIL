import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useLocation,
    Outlet,
} from "react-router-dom";

import Homepage from "./Components/Homepage";
import Product from "./Components/Product";
import Notice from "./Components/Notice";
import Cart from "./Components/Cart";
import User from "./Components/User";
import Coupon from "./Components/Coupon";
import Question from "./Components/Question";
import UserNotice from "./Components/UserNotice";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> Home Page </Link>
                    </li>
                    <li>
                        <Link to="/products/1"> 메뉴 확인 </Link>
                    </li>
                    <li>
                        <Link to="/cart"> 장바구니 </Link>
                    </li>
                    <li>
                        <Link to="/users"> 프로필 </Link>
                    </li>
                </ul>
            </nav>
            {/* 라우트를 감싸줍니다. */}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products/:id/*" element={<Outlet />}>
                    <Route path="" element={<Product />} />
                    <Route path="notice/" element={<Notice />} />
                </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/users/*" element={<Outlet />}>
                    <Route path="" element={<User />} />
                    <Route path="coupon/" element={<Coupon />} />
                    <Route path="notice/" element={<UserNotice />} />
                    <Route path="question/" element={<Question />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
