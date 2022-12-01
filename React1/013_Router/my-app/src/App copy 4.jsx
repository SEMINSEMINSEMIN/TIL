import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useLocation,
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Link to="/"> home </Link>
            <Link to="/one"> one </Link>
            <Link to="/two"> two </Link>
            <Link to="/three"> three </Link>
            {/* 라우트를 감싸줍니다. */}
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/one" element={<One name="licat" />} />
                <Route path="/two" element={<Two />} />
                <Route path="/three" element={<Three />} />
                <Route path="/blog/:id" element={<Blog />} />
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

function Three() {
    return <h1>hello world3</h1>;
}

function Blog() {
    const location = useLocation();
    // 이걸 서버에 전송해서 그거에 관한 결과값을 보여줘야 함
    // http://localhost:3005/blog/7
    // {pathname: '/blog/7', search: '', hash: '', state: null, key: 'default'}

    // http://localhost:3005/blog/7?name=hojun
    // {pathname: '/blog/7', search: '?name=hojun', hash: '', state: null, key: 'default'}

    // http://localhost:3005/blog/7?name=hojun#1
    // {pathname: '/blog/7', search: '?name=hojun', hash: '#1', state: null, key: 'default'}
    console.log(location);

    const path = location.pathname.split("/")[2];
    console.log(path);
    return <BlogContent pathAtt={path} />;
}

function BlogContent({ pathAtt }) {
    return (
        <div>
            <h2>{pathAtt}번 게시글 입니다.</h2>
        </div>
    );
}

export default App;
