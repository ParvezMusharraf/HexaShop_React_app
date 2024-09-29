// Import necessary modules
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import ShoppingCart from "../Comman/ShopingCart";
import { UserAuth } from "../context/UserContaxt";
import SearchFeild from "../Components/SearchBar/SearchFeild";
import { getAddToCart } from "../Request/Requiests";

// Create Header component
const Header = () => {
  const { userExist, handleLogOut } = UserAuth();
  const [cartQuantity, setCartQuantity] = useState(0);

  const fetchData = async () => {
    try {
      const userid = localStorage.getItem("userId");
      const res = await getAddToCart(userid);
      if (res.length > 0) {
        setCartQuantity(res.length);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <header className="header-area header-sticky">
      <div className="mx-5">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <Link to="/" className="logo">
                <img src={logo} alt="Logo" />
              </Link>

              {/* Menu */}
              <ul className="nav">
                <li>
                  <SearchFeild />
                </li>
                <li>
                  <Link
                    to="/"
                    className="scroll-to-section"
                    activeClassName="active"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/men" className="scroll-to-section">
                    Men's
                  </Link>
                </li>
                <li>
                  <Link to="/women" className="scroll-to-section">
                    Women's
                  </Link>
                </li>
                <li>
                  <Link to="/kids" className="scroll-to-section">
                    Kid's
                  </Link>
                </li>

                {/* Pages */}
                <li className="submenu">
                  <Link to="#" className="dropdown-toggle">
                    Pages
                  </Link>
                  <ul>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/products">Products</Link>
                    </li>
                    {/* <li><Link to="/single-product">Post Product</Link></li> */}
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </li>

                {/* User Authentication */}
                <li className="submenu">
                  <Link to="#" className="dropdown-toggle">
                    User
                  </Link>
                  {userExist ? (
                    <ul>
                      <li onClick={handleLogOut}>
                        <Link>Logout</Link>
                      </li>
                    </ul>
                  ) : (
                    // Render logout link if user is logged in
                    <ul>
                      {/* Render signup and login links if user is not logged in */}
                      <li>
                        <Link to="/signup">SignUp</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                    </ul>
                  )}
                </li>
                {userExist && (
                  <li>
                    <Link to="/Admin" className="scroll-to-section">
                      Dashboard
                    </Link>
                  </li>
                )}

                {/* Shopping Cart */}
                {userExist && (
                  <li>
                    <ShoppingCart totalUniqueItems={cartQuantity} />
                  </li>
                )}
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
