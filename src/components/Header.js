import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import Auth from '../utils/auth'
import { useAuthContext } from "../utils/authContext";
import { useNavigate } from 'react-router-dom';
import LoadingModal from "./LoadingModal/LoadingModal";



const Header = () => {
    const navigate = useNavigate()
    const { currentUser, setCurrentUser, loading, setLoading } = useAuthContext()

    console.log(Auth.loggedIn())
    console.log(Auth.getProfile())

    const handleLogOut = () => {
        setCurrentUser('not logged in')
        Auth.logout()
        navigate('/')
    }

    const fetchData = () => {
        setLoading(true);
    
        // Simulate an asynchronous operation
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        
      };

    useEffect(() => {
        fetchData()
        if(Auth.loggedIn()){
            console.log(Auth.getProfile().data.username)
            setCurrentUser(Auth.getProfile().data.username)
        }else{
            setCurrentUser('not logged in')
        }
    },[])

    return (
        <>
            {loading ? <LoadingModal/> : <></>  }
            <h1>Header</h1>
            <p>logged in as: {Auth.loggedIn()? currentUser : 'not logged in'}</p>
            {!Auth.loggedIn() ? 
                <>
                <Link to={'/login'}>Log In</Link>
                <Link to={'/signup'}>Sign Up</Link></> 
                : <button onClick={handleLogOut}>Log Out</button>}
            <br/>
            
            
        </>
    )
}

export default Header