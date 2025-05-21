// Import necessary modules
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import ShoppingCart from "../Comman/ShopingCart";
import { UserAuth } from "../context/UserContaxt";
import SearchFeild from "../Components/SearchBar/SearchFeild";
import { getAddToCart } from "../Request/Requiests";
// import "./header.css"
import "./header2.css"

// Create Header component
const Header = () => {
  const { userExist, handleLogOut } = UserAuth();
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
      <div className="mx-1">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <Link to="/" className="logo">
                <img src={logo} alt="Logo" />
              </Link>

              {/* Mobile Menu Trigger */}
              <div className="menu-trigger" onClick={toggleMenu}>
                <span>Menu</span>
              </div>

              {/* Navigation Menu */}
              <div className={`nav`}>
                <li>
                  <SearchFeild />
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/men">Men's</Link>
                </li>
                <li>
                  <Link to="/women">Women's</Link>
                </li>
                <li>
                  <Link to="/kids">Kid's</Link>
                </li>

                <li className="submenu">
                  <Link to="#">Pages</Link>
                  <ul>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/products">Products</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </li>

                <li className="submenu">
                  <Link to="#">User</Link>
                  <ul>
                    {userExist ? (
                      <li onClick={handleLogOut}>
                        <Link>Logout</Link>
                      </li>
                    ) : (
                      <>
                        <li>
                          <Link to="/signup">SignUp</Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </li>

                {/* {userExist && (
                  <li>
                    <Link to="/Admin">Dashboard</Link>
                  </li>
                )} */}
                {userExist && (
                  <li>
                    <ShoppingCart totalUniqueItems={cartQuantity} />
                  </li>
                )}
              </div>
            </nav>
          </div>
          <div>
              <nav className={`mobile-nav ${isMenuOpen ? "open" : "hide"}`}>
                <ul
                  style={{
                    backgroundColor: "black",
                    listStyle: "none",
                    margin: 0,
                    padding: "10px 20px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    color: "white",
                  }}
                >
                  <li>
                    <SearchFeild />
                  </li>

                  <li onClick={toggleMenu} >
                    <Link
                      to="/"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        padding: "8px 12px",
                        display: "block",
                      }}
                    >
                      Home
                    </Link>
                  </li>

                  <li onClick={toggleMenu}>
                    <Link
                      to="/men"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        padding: "8px 12px",
                        display: "block",
                      }}
                    >
                      Men's
                    </Link>
                  </li>

                  <li onClick={toggleMenu}>
                    <Link
                      to="/women"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        padding: "8px 12px",
                        display: "block",
                      }}
                    >
                      Women's
                    </Link>
                  </li>

                  <li onClick={toggleMenu}>
                    <Link
                      to="/kids"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        padding: "8px 12px",
                        display: "block",
                      }}
                    >
                      Kid's
                    </Link>
                  </li>

                  {/* Pages submenu */}
                  <li
                    style={{ position: "relative" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.querySelector("ul").style.display =
                        "flex")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.querySelector("ul").style.display =
                        "none")
                    }
                  >
                    <Link
                      to="#"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        padding: "8px 12px",
                        display: "block",
                      }}
                    >
                      Pages
                    </Link>
                    <ul
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        backgroundColor: "#111",
                        display: "none",
                        padding: "10px",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "10px",
                        minWidth: "200px",
                        borderRadius: "4px",
                        zIndex: 999,
                      }}
                    >
                      <li onClick={toggleMenu}>
                        <Link
                          to="/about"
                          style={{
                            color: "white",
                            textDecoration: "none",
                            padding: "6px 10px",
                            display: "block",
                          }}
                        >
                          About Us
                        </Link>
                      </li>
                      <li onClick={toggleMenu}>
                        <Link
                          to="/products"
                          style={{
                            color: "white",
                            textDecoration: "none",
                            padding: "6px 10px",
                            display: "block",
                          }}
                        >
                          Products
                        </Link>
                      </li>
                      <li onClick={toggleMenu}>
                        <Link
                          to="/contact"
                          style={{
                            color: "white",
                            textDecoration: "none",
                            padding: "6px 10px",
                            display: "block",
                          }}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* User submenu */}
                  <li
                    style={{ position: "relative" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.querySelector("ul").style.display =
                        "flex")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.querySelector("ul").style.display =
                        "none")
                    }
                  >
                    <Link
                      to="#"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        padding: "8px 12px",
                        display: "block",
                      }}
                    >
                      User
                    </Link>
                    <ul
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        backgroundColor: "#111",
                        display: "none",
                        padding: "10px",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "10px",
                        minWidth: "200px",
                        borderRadius: "4px",
                        zIndex: 999,
                      }}
                    >
                      {userExist ? (
                        <li onClick={handleLogOut}>
                          <Link
                            style={{
                              color: "white",
                              textDecoration: "none",
                              padding: "6px 10px",
                              display: "block",
                            }}
                          >
                            Logout
                          </Link>
                        </li>
                      ) : (
                        <>
                          <li onClick={toggleMenu}>
                            <Link
                              to="/signup"
                              style={{
                                color: "white",
                                textDecoration: "none",
                                padding: "6px 10px",
                                display: "block",
                              }}
                            >
                              SignUp
                            </Link>
                          </li>
                          <li onClick={toggleMenu}>
                            <Link
                              to="/login"
                              style={{
                                color: "white",
                                textDecoration: "none",
                                padding: "6px 10px",
                                display: "block",
                              }}
                            >
                              Login
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </li>

                  {/* {userExist && (
                    <li>
                      <Link
                        to="/Admin"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          padding: "8px 12px",
                          display: "block",
                        }}
                      >
                        Dashboard
                      </Link>
                    </li>
                  )} */}

                  {userExist && (
                    <li>
                      <ShoppingCart totalUniqueItems={cartQuantity} />
                    </li>
                  )}
                </ul>
              </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
