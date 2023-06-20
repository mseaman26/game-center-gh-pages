import React, { createContext, useContext, useState} from 'react'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState('')

    return (
        <AuthContext.Provider
            value={{currentUser, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
}