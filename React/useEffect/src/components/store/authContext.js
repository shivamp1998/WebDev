import React,{useState} from 'react';
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin : (email,password) => {

    },
    onLogout: () => {

    }

});

export const  AuthContextProvider  = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const logoutHandler = () => {
        setIsLoggedIn(false);
    }
    const loginHandler = () => {
        setIsLoggedIn(true);
    }
    return (
        <AuthContextProvider value={{
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler    
        }}>

        </AuthContextProvider>
    )
}

export default AuthContext;