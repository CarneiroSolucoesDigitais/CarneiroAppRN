import React, { createContext, useState } from 'react';

export const AuthContext = createContext({})

interface Props{
    children: React.ReactNode;
}

function AuthProvider({children}: Props){
    return (
        <AuthContext.Provider value={{nome: "teste"}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;