import React, { useState, useEffect } from "react";
import { getProductListByCategory } from "../Request/Requiests";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Card } from "antd";
import ProductDetailsModel from "../Comman/ProductDetailModel";
import Footer from "../Components/Footer/Footer";

const { Meta } = Card;

const Kids = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false); // Fixed typo
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Renamed for clarity
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state
    const [isMobile, setIsMobile] = useState(false);


   useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // set breakpoint for mobile
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductListByCategory("kid's clothing");
        if (res === "No Product Found") {
          setProductDetails([]);
          setIsLoading(false);
        } else {
          setProductDetails(res);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to load products");
        setProductDetails([]);
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
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "20px",
        }}
      >
        <div
          className="row"
          style={{
            marginTop: isMobile ? "20%" : "10%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: isMobile ? "center" :"space-between",
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
                  <div className="d-flex justify-content-between align-items-center my-3">
                    <b>Details:</b>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => handleModalOpen(p)}
                    >
                      <IoIosArrowDropdownCircle />
                    </button>
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
        {open && selectedProduct && (
          <ProductDetailsModel setOpen={setOpen} obj={selectedProduct} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Kids;
