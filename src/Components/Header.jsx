// Import necessary modules
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { useCart } from 'react-use-cart';
import ShoppingCart from '../Comman/ShopingCart';
import { UserAuth } from '../context/UserContaxt';
import { useNavigate } from 'react-router-dom';

// Create Header component
const Header = () => {
    const {
        isEmpty,
        items,
        totalUniqueItems
    } = useCart();

    const navigate = useNavigate();
    const { userExist, setUserExist } = UserAuth();

    const handleLogOut = () => {
        localStorage.setItem("username", null);
        localStorage.setItem("email", null);
        localStorage.setItem("userId", null);
        setUserExist(false);
        alert("User logged out successfully");
        console.log(userExist); // This will log `false` because setUserExist(false) updates userExist state immediately
        navigate("/"); // Redirect to the homepage after logout
    };

    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/* Logo */}
                            <Link to="/" className="logo">
                                <img src={logo} alt="Logo" />
                            </Link>

                            {/* Menu */}
                            <ul className="nav">
                                <li><Link to="/" className="scroll-to-section" activeClassName="active">Home</Link></li>
                                <li><Link to="/men" className="scroll-to-section">Men's</Link></li>
                                <li><Link to="/women" className="scroll-to-section">Women's</Link></li>
                                <li><Link to="/kids" className="scroll-to-section">Kid's</Link></li>

                                {/* Pages */}
                                <li className="submenu">
                                    <Link to="#" className="dropdown-toggle">Pages</Link>
                                    <ul>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/products">Products</Link></li>
                                        {/* <li><Link to="/single-product">Post Product</Link></li> */}
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </li>

                                {/* User Authentication */}
                                <li className="submenu">
                                    <Link to="#" className="dropdown-toggle">User</Link>
                                    <ul>
                                        {userExist ? (
                                            <li onClick={handleLogOut}>Logout</li>
                                        ) : (
                                            // Render logout link if user is logged in
                                            <>
                                                {/* Render signup and login links if user is not logged in */}
                                                <li><Link to="/signup">SignUp</Link></li>
                                                <li><Link to="/login">Login</Link></li>
                                            </>
                                        )}
                                    </ul>
                                </li>

                                {/* Shopping Cart */}
                                <li>
                                    <ShoppingCart totalUniqueItems={totalUniqueItems} />
                                </li>
                            </ul>

                            {/* Menu Trigger */}
                            <a className="menu-trigger">
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
