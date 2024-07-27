import React, { useState, useEffect } from 'react';
import { getProductListByCategory } from '../Request/Requiests';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Card } from "antd";
import ProductDetailsModel from '../Comman/ProductDetailModel';
const { Meta } = Card;

const Women = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductListByCategory("women's clothing");
        if (res === "No Product Found") {
          setProductDetails([]);
        } else {
          setProductDetails(res);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProductDetails([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleModalOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", padding: "20px" }}>
      <div className="row" style={{ marginTop: "200px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
        {isLoading ? (
          <div>Loading...</div>
        ) : productDetails.length === 0 ? (
          <div>No products found.</div>
        ) : (
          productDetails.map((p) => (
            <div className="auto m-2" key={p.id}>
              <Card
                hoverable
                style={{ width: 250 }}
                cover={<img style={{ height: "280px", width: "250px" }} alt={p.title} src={p.image} />}
              >
                <Meta
                  title={p.title}
                  description={showDetails ? p.description : ""}
                />
                <div className="d-flex justify-content-between align-items-center my-3">
                  <b>Details:</b>
                  <button type="button" className="btn" onClick={() => handleModalOpen(p)}><IoIosArrowDropdownCircle /></button>
                </div>
                <div className="d-flex justify-content-between">
                  <div>Category:</div>
                  <b>{p.category}</b>
                </div>
                <div className="d-flex justify-content-between total font-weight-bold mt-4">
                  <span>Total</span>
                  <span>${p.price}</span>
                </div>
              </Card>
            </div>
          ))
        )}
      </div>
      {open && <ProductDetailsModel setOpen={setOpen} product={selectedProduct} />}
    </div>
  );
};

export default Women;
