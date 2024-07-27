import React, { useEffect, useState } from "react";
import { getProductListByCategory } from "../../Request/Requiests";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import ProductDetailModel from '../../Comman/ProductDetailModel';
import "../loader.css";
import { Card } from "antd";

const { Meta } = Card;

const ProductSection = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const category = searchParams.get("category");
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductList = async () => {
      setIsLoading(true);
      try {
        const res = await getProductListByCategory(category);
        if (res === "No Product Found") {
          setCategoryDetails([]);
        } else {
          setCategoryDetails(res);
        }
      } catch (error) {
        console.error("Error fetching product list:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductList();
  }, [category]);

  const handleModalOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
      <div className="row" style={{ marginTop: "10%", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center" }}>
        {categoryDetails.length === 0 ? (
          <div>No products available in this category.</div>
        ) : (
          categoryDetails.map((product, index) => (
            <div key={index} className="col-3 m-2">
              <Card
                hoverable
                style={{ width: 250 }}
                cover={<img style={{ height: "300px", width: "250px" }} alt={product.title} src={product.image} />}
              >
                <Meta title={product.title} />
                <div className="d-flex justify-content-between align-items-center my-3">
                  <b>Details:</b>
                  <button type="button" className="btn" onClick={() => handleModalOpen(product)}>
                    <IoIosArrowDropdownCircle />
                  </button>
                </div>
                <div className="d-flex justify-content-between">
                  <div>Category:</div>
                  <b>{product.category}</b>
                </div>
                <div className="d-flex justify-content-between total font-weight-bold mt-4">
                  <span>Total</span>
                  <span>${product.price}</span>
                </div>
              </Card>
            </div>
          ))
        )}
      </div>
      {open && selectedProduct && (
        <ProductDetailModel setOpen={setOpen} obj={selectedProduct} />
      )}
    </div>
  );
};

export default ProductSection;
