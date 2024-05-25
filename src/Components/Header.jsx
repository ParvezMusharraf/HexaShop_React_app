// Import necessary modules
import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../assets/images/logo.png'
import { CiShoppingCart } from "react-icons/ci";


// Create Header component
const Header = () => {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav ">
                            {/* Logo */}
                            <Link to="/" className="logo">
                                <img src={logo} alt="Logo" />
                            </Link>

                            {/* Menu */}
                            <ul className="nav ">
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
                                        <li><Link to="/single-product">Post Product</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </li>

                                {/* Features */}
                                <li className="submenu">
                                    <Link to="#" className="dropdown-toggle">Features</Link>
                                    <ul>
                                        <li><Link to="/features/page-1">Features Page 1</Link></li>
                                        <li><Link to="/features/page-2">Features Page 2</Link></li>
                                        <li><Link to="/features/page-3">Features Page 3</Link></li>
                                        <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                    </ul>
                                </li>

                                {/* Explore */}
                                <li><Link to="/explore" className="scroll-to-section" style={{
                                    fontSize:"25px"
                                }}><CiShoppingCart /></Link></li>
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
