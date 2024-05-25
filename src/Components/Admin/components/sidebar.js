import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/admin/all-products">All Products</Link></li>
        <li><Link to="/admin/manage-products">Manage Products</Link></li>
        <li><Link to="/admin/post-products">Post Products</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;