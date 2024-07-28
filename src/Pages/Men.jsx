import React, { useState, useEffect } from "react";
import { getProductListByCategory } from "../Request/Requiests";
import { HiArrowCircleRight } from "react-icons/hi";
import { Card } from "antd";
import ProductDetailsModel from "../Comman/ProductDetailModel";

const { Meta } = Card;

const Men = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false); // Fixed typo
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Renamed for clarity
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductListByCategory("men's clothing");
        if (res === "No Product Found") {
          setProductDetails([]);
        } else {
          setProductDetails(res);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to load products");
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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        width: "100%",
      }}
    >
      <div
        className="row"
        style={{
          marginTop: "10%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : productDetails.length === 0 ? (
          <div>No products found.</div>
        ) : (
          productDetails.map((p) => (
            <div className="auto m-2" key={p.id}>
              {" "}
              {/* Added unique key */}
              <Card
                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    style={{ height: "280px", width: "250px" }}
                    alt={p.title}
                    src={p.image}
                  />
                }
              >
                <Meta
                  title={p.title}
                  description={showDetails ? p.description : ""}
                />
                <div className="d-flex justify-content-between total font-weight-bold mt-4">
                  <span>Total:</span>
                  <span>${p.price}</span>
                </div>
                {/* <div className="d-flex justify-content-between">
                  <span>Category:</span>
                  <b>{p.category}</b>
                </div> */}
                <div className="d-flex justify-content-between align-items-center my-3">
                  <b>Details:</b>
                  <button
                    type="button"
                    // className="btn"
                    style={{
                      borderRadius: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "none",
                    }}
                    onClick={() => handleModalOpen(p)}
                  >
                    <HiArrowCircleRight />
                  </button>
                </div>
              </Card>
            </div>
          ))
        )}
      </div>
      {open && selectedProduct && (
        <ProductDetailsModel setOpen={setOpen} obj={selectedProduct} />
      )}
    </div>
  );
};

export default Men;
