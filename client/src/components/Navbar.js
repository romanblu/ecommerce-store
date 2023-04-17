import React from 'react'
import Wrapper from '../assets/wrappers/Header'
import {Link, useNavigate} from 'react-router-dom';

export default function Navbar({user, logoutUser, loginUser}) {
    const history = useNavigate();
    let cartCount = 0;
    if(user){
        cartCount = user.cart.products.length;
    }

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        logoutUser();
        history.push('/login')
    }

    let adminLink = ''
    if(user && user.role === 'admin'){
        adminLink = <li><Link to="/admin/dashboard" className="header-page">DASHBOARD</Link></li>
    }
    
    return (
        <Wrapper>
            <div className="navbar container" key={user}>
                <li><Link to="/" className="header-page">HOME</Link></li>
                <li><Link to="/about-us" className="header-page">ABOUT US</Link></li>
                <li><Link to="/contact-us" className="header-page">CONTACT</Link></li>
                <li><Link to="/shipping" className="header-page">SHIPPING</Link></li>

                {
                    user ? 
                        <li className="login-logout"><Link to="#" className="header-page" onClick={handleLogout}>Logout</Link></li> 
                    : 
                        <li className="login-logout"><Link to="/login" className="header-page">Login</Link></li>
                } 
                {adminLink}
                <li ><Link to="/cart"><i className="cart fas fa-shopping-cart"><span className="cart-count">{cartCount}</span></i></Link></li>
            </div>

        </Wrapper>
    )
}
