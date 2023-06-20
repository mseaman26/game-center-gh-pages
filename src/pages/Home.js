import React from 'react';
import { Link } from 'react-router-dom'
import Auth from '../utils/auth'





const Home = () => {



return (
    <>
    <h1>Welcome to Game Center</h1>
    <Link to={Auth.loggedIn() ? '/nerdle' : '/login'}>Nerdle</Link>
    
    </>
)
}
export default Home