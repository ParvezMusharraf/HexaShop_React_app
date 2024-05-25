import React from 'react';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
// import './ShoppingCart.css'; // Assuming you have a CSS file for styling

const ShoppingCart = ({ totalUniqueItems }) => {
    return (
        <li className='d-flex'>
            <div className='row align-items-center'>
                <Link to="/addToCart" className="scroll-to-section col-auto" style={{ fontSize: "25px" }}>
                    <CiShoppingCart />
                </Link>
                {totalUniqueItems > 0 && (
                   <span className=' col-auto' style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    position: 'absolute',
                    top: '-5px',
                    right: '-10px',
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    display: 'inline-block'
                }}>
                    {totalUniqueItems}
                </span>
                )}
            </div>
        </li>
    );
};

export default ShoppingCart;