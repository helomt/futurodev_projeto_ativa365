import { createContext, useContext } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import { validacaoEntradaUsuario } from "../services/serverUsers";

export const AuthContext = createContext({});

export function AuthProvider ({children}){
    const [user, setUser] = useState(() =>{
        const userStorage = localStorage.getItem('@ativa365:user');
        if(userStorage){
            return JSON.parse(userStorage);
        }
        return null;
    });

    async function signIn(email, senha){
      const resposta = await validacaoEntradaUsuario(email, senha);
      if (resposta[0]){
        const data = resposta[1];
        setUser(data);
        localStorage.setItem('@ativa365:user', JSON.stringify(data));
        return true;
      } else{
        return false;
      }
    }

    function signOut(){
        localStorage.removeItem('@ativa365:user');
        setUser(null);
    }

    return( 
        <AuthContext.Provider value={{user, signIn,signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes ={
    children: PropTypes.node.isRequired,
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}