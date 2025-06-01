import React from "react";
import { useState, useEffect } from "react";
import { getAllProductsList } from "../Request/Requiests";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Card } from "antd";
import ProductDetailsModel from "../Comman/ProductDetailModel";
import Footer from "../Components/Footer/Footer";

const { Meta } = Card;

const Product = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [showDetails, setShowDetials] = useState(false);
  const [open, setOpen] = useState(false);
  const [callid, setcallId] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    getAllProductsList().then((res) => {
      setProductDetails(res.data);
      console.log(res.data);
    });
  }, []);

  const handleModel = (obj) => {
    setOpen(true);
    setcallId(obj);
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
            justifyContent: isMobile ? "center" : "space-between",
            alignItems: "center",
          }}
        >
          {productDetails.map((p, index) => (
            <div className="auto m-2 ">
              <Card
                hoverable
                style={{ width: 250 }}
                cover={
                  <img
                    style={{
                      height: "280px",
                      width: "250px",
                    }}
                    alt={p.title}
                    src={p.image}
                  />
                }
                // onClick={()=>setOpen(true)}
              >
                <Meta
                  title={p.title}
                  description={showDetails ? p.description : ""}
                />
                <div className="d-flex justify-content-between align-items-center my-3">
                  <b>Details:</b>
                  <button
                    type="button"
                    class="btn "
                    data-toggle="modal"
                    onClick={() => handleModel(p)}
                    data-target="#exampleModal"
                  >
                    {" "}
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
          ))}
        </div>
        {open && <ProductDetailsModel setOpen={setOpen} obj={callid} />}
      </div>
      <Footer />
    </>
  );
};

export default Product;
