import React, {useState, useEffect} from 'react'

// createContext: 기본 컨텍스트를 만든다. 반환하는 건 컴포넌트를 포함하는 객체
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // IDE 자동 완성 하기 위해
  onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(false);
  }

  const loginHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(true);
  }

  return (
    <AuthContext.Provider
      value = {{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
