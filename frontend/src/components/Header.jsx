import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthenticationContext } from '../hooks/useAuthenticationContex';
import { useLogout } from '../hooks/useLogOut';

export const Header = () => {

    const {user}=useAuthenticationContext();
    const {logout}=useLogout();

  return (
    
    <header>
        <div className="logo">TODO</div>
        <div className="actions">
            {user && <>

                <div>{user.email}</div>
                <div onClick={()=>logout()}>Logout</div>

            </>}
            {!user && <><Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link></>}
        </div>
    </header>
  )
}

 