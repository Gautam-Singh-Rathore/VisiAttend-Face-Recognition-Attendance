import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children})=>{

    var user = JSON.parse(localStorage.getItem("user")) || {};
    
    
    const [isLoggedIn , setIsLoggedIn] = useState(Object.keys(user).length >0);

    useEffect(()=>{
        user = JSON.parse(localStorage.getItem("user")) || {};
    },[isLoggedIn])

    const value ={user , isLoggedIn , setIsLoggedIn};
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );

}
export {UserContext , UserProvider}