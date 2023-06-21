import React, { createContext, useContext, useEffect, useState} from 'react'
import Auth from './auth'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState('')
   
    const [loading, setLoading] = useState(false)

    

    return (
        <AuthContext.Provider
            value={{currentUser, setCurrentUser, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}