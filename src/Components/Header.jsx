// Import necessary modules
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import '../Components/header.css'


// Create Header component
const Header = () => {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav d-flex justify-content-between align-items-center">
                            {/* Logo */}
                            <Link to="/" className="logo">
                                <img src={logo} alt="Logo" />
                            </Link>

                            {/* Menu */}
                            <ul className="nav ">
                                <li><Link to="/" className="scroll-to-section p-2" activeClassName="active">Home</Link></li>
                                <li><Link to="/men" className="scroll-to-section p-2">Men's</Link></li>
                                <li><Link to="/women" className="scroll-to-section p-2">Women's</Link></li>
                                <li><Link to="/kids" className="scroll-to-section p-2">Kid's</Link></li>
                                
                                {/* Pages */}
                                <li className="nav-item dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Pages
                                </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link to="/about" className="dropdown-item">
                        About Us
                      </Link>
                      <Link to="/products" className="dropdown-item">
                        Products
                      </Link>
                      <Link to="/single-product" className="dropdown-item">
                        Single Product
                      </Link>
                      <Link to="/contact" className="dropdown-item">
                        Contact Us
                      </Link>
                    </div>
                  </li>

                               

                  <li className="nav-item dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Features
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownFeatures"
                    >
                      <Link to="/features/page-1" className="dropdown-item">
                        Features Page 1
                      </Link>
                      <Link to="/features/page-2" className="dropdown-item">
                        Features Page 2
                      </Link>
                      <Link to="/features/page-3" className="dropdown-item">
                        Features Page 3
                      </Link>
                      <a
                        href="https://templatemo.com/page/4"
                        className="dropdown-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Template Page 4
                      </a>
                    </div>
                  </li>

                                {/* Explore */}
                                <li><Link to="/explore" className="scroll-to-section">Explore</Link></li>
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
