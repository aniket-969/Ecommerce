import React from 'react'
import { auth } from '../../config/config';
import { Link} from 'react-router-dom';
import { logout } from './../../config/auth/logout';
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {

    const[user] = useAuthState(auth)
    
  return (
    <nav>
   
        {!user?<Link to="/login" >Login</Link>:<Link to="/" onClick={logout}>Logout</Link>}
        <Link to="/">Shop</Link>
        <Link to="/cart" >Cart</Link>

    </nav>
  )
}

export default Header