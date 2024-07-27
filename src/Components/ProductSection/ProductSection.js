import React, { useEffect, useState } from "react";
import { getProductListByCategory } from "../../Request/Requiests";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import ProductDetailsModel from '../../Comman/ProductDetailModel'
import "../loader.css"
import { Card } from "antd";

const { Meta } = Card;

const ProductSection = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const category = searchParams.get("category");
  const [catagoryDetails, setCatagoryDetails] = useState([]);
  const [open, setOpen] = useState(false);
  const [callid, setCallId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductList = async () => {
      setIsLoading(true);
      try {
        const res = await getProductListByCategory(category);
        if (res === "No Product Found") {
          setCatagoryDetails([]);
        } else {
          setCatagoryDetails(res);
        }
      } catch (error) {
        console.error("Error fetching product list:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductList();
  }, [category]);

  const handleModel = (obj) => {
    setOpen(true);
    setCallId(obj);
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show a loader or a placeholder while loading
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        className="row"
        style={{
          marginTop: "200px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {catagoryDetails.length === 0 ? (
          <div>No products available in this category.</div>
        ) : (
          catagoryDetails.map((p, index) => (
            <div key={index} className="col-3 m-2">
              <Card
                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    style={{
                      height: "300px",
                      width: "250px",
                    }}
                    alt={p.title}
                    src={p.image}
                  />
                }
              >
                <Meta title={p.title} />
                <div className="d-flex justify-content-between align-items-center my-3">
                  <b>Details:</b>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleModel(p)}
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
      {open && (
        <ProductDetailsModel 
          setOpen={setOpen}
          obj={callid}
        />
      )}
    </div>
  );
};

export default ProductSection;
