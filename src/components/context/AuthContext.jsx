import { createContext, useContext, useEffect, useState } from 'react';
import {jwtDecode} from "jwt-decode";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState({
        full_name: '',
        email:'',

    });

    const fnlogin = (token)=>{
        const tokenDecoded = jwtDecode(token);
        if(tokenDecoded){
            setIsLogged(true);
            setUser(tokenDecoded);

           window.localStorage.setItem(import.meta.env.VITE_TKN_NAME, token);
        }
        console.log(tokenDecoded);
    }

    const fnLogout = () => {
        console.log("entro al log out!!!");
        setIsLogged(false);
        setUser({
            full_name: '',
            email:'',
        });

           window.localStorage.removeItem(import.meta.env.VITE_TKN_NAME);
    }
    
    useEffect(() => {
        console.log("requerimos hacer algo para determinar si ya hay sesion activa....");
        const tknFromStorage = window.localStorage.getItem(import.meta.env.VITE_TKN_NAME);
        if(tknFromStorage){
            console.log("hay una session!!!");
            fnlogin(tknFromStorage);
        }else{
            console.log("no hay session");
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, isLogged, fnlogin, fnLogout}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
