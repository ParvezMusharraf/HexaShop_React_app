import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/sidebar.css'; // Ensure this path is correct
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false); 
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowButton(false);
    } else {
      // Scrolling up
      setShowButton(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      {showButton && (
        <button onClick={toggleSidebar} className="toggle-button">
          {isOpen ? <FaRegWindowClose /> : <GiHamburgerMenu />}
        </button>
      )}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebarContainer">
          <ul>
            <li><Link to="/admin/all-products">All Products</Link></li>
            <li><Link to="/admin/manage-products">Manage Products</Link></li>
            <li><Link to="/admin/post-products">Post Products</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
