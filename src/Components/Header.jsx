// Import necessary modules
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import ShoppingCart from '../Comman/ShopingCart';
import { UserAuth } from '../context/UserContaxt';
import SearchFeild from "../Components/SearchBar/SearchFeild";

// Create Header component
const Header = () => {
    const { userExist,handleLogOut  } = UserAuth();
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
                                <li><SearchFeild/></li>
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
                                    <ShoppingCart />
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
