import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./productList.css";
import { getListingProduct } from "../Request/Requiests";

const ProductList = () => {
  const location = useLocation(); // Access location object
  const searchParams = new URLSearchParams(location.search); // Get query parameters
  const productId = searchParams.get("productId"); // Get 'productId' from query params
  const [productList, setProductList] = useState([]);

  const getList = async () => {
    try {
      await getListingProduct(productId).then((res) => {
        if (res) {
          setProductList(res);
          console.log("list", res);
        } else {
          return <div>No Product Found</div>;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList()
}, [productId]);

  return (
    <div
      className="product-list"
      style={{
        marginTop: "150px",
      }}
    >
      {productList.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div className="product-details">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <div className="product-rating">Rating: {product.rating} ⭐</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
