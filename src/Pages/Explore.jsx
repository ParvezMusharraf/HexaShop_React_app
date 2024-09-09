import React, { useEffect, useState } from "react";
import { getAddToCart, removeCart } from "../Request/Requiests";

const Explore = () => {
  const [freeShipping, setFreeShipping] = useState(false);
  const [CardsDetails, setCardDetails] = useState([]);
  const [grandtTotal, setGrandTotal] = useState(0);
  const [isProductAvailable, setIsProductAvailable] = useState(false);

  const fetchData = async () => {
    try {
      const userid = localStorage.getItem("userId");
      const res = await getAddToCart(userid);
      if (res.length > 0) {
        setIsProductAvailable(true);
      } else {
        setIsProductAvailable(false);
      }
      setCardDetails(res);
      const totalPrice = res.reduce((total, product) => total + product.price, 0);
      if (totalPrice > 1000) {
        setFreeShipping(true);
      }
      setGrandTotal(totalPrice);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleremoveCart = async (ProductId2) => {
    try {
      const userid = localStorage.getItem("userId");
      console.log(ProductId2, userid, "removeCart");
      const data = {
        productId: ProductId2,
        userid: userid,
      };
      await removeCart(data);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section style={{ marginTop: "150px" }}>
      {isProductAvailable ? (
        <>
          <div className="grandTotol d-flex justify-content-center align-items-center m-3">
            <h6 className="text-success">Price Upto 1000 makes a free delivery</h6>
          </div>
          {CardsDetails?.map((p) => (
            <div key={p.id} className="main-container d-flex justify-content-center">
              <div
                className="wrapper d-flex row w-50 m-2"
                style={{
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <div className="left col-6 badge">
                  <img src={p.image} alt="" style={{ width: "100%", height: "auto" }} />
                </div>
                <div className="right col-6">
                  <div className="title m-1">{p.title}</div>
                  <div className="priceContainer m-1">
                    <strong>{p.price}$</strong>
                  </div>
                  {p.category === "electronics" ? (
                    ""
                  ) : (
                    <div className="SizeConatainer">
                      <h6 className="m-1">Sizes Available</h6>
                      <div className="Size_wrapper">
                        <ul>
                          <li className="btn btn-outline-dark m-1">S</li>
                          <li className="btn btn-outline-dark m-1">M</li>
                          <li className="btn btn-outline-dark m-1">L</li>
                          <li className="btn btn-outline-dark m-1">XL</li>
                          <li className="btn btn-outline-dark m-1">XXL</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  <div className="shipingContainer m-1">
                    <p>Free Shipping Available</p>
                    <div className="btn btn-success">In Stock</div>
                  </div>
                  <div className="replacement m-1 ">
                    <p className=" text-info">7-days Replacement Available</p>
                  </div>
                  <div className="description m-1">
                    <h6>Description</h6>
                    <p>{p.description}</p>
                  </div>
                  <div className="counterContainer d-flex justify-content-between align-items-center row">
                    <div className="left col-auto">
                      <button
                        className="btn btn-outline-dark m-1"
                        onClick={() => handleremoveCart(p._id)}
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="grandTotalContainer d-flex justify-content-center align-items-center m-3">
            {freeShipping ? (
              <div className="shippingInfo">
                <h3>
                  You Are eligible For <span className="text-primary">Free Shipping</span>
                </h3>
                <div className="total_amount d-flex row justify-content-center align-items-center m-4">
                  <h5 className="m-1">Total Amount :</h5>
                  <span className="m-1">
                    <strong> {grandtTotal}$</strong>
                  </span>
                  <button className="btn btn-dark" onClick={() => alert("Payment page is under construction")}>
                    Proceed to pay
                  </button>
                </div>
              </div>
            ) : (
              <div className="paidShipping">
                <h4>
                  You Have to pay some{" "}
                  <span className="text-danger">shipping Charges On delivery</span>
                </h4>
                <div className="total_amount d-flex row justify-content-center align-items-center m-4">
                  <h5 className="m-1">Total Amount :</h5>
                  <span className="m-1">
                    <strong> {grandtTotal}$</strong>
                  </span>
                  <button className="btn btn-dark" onClick={() => alert("Payment page is under construction")}>
                    Proceed to pay
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="noProducts d-flex justify-content-center align-items-center">
          <h2>No products found in the cart!</h2>
        </div>
      )}
    </section>
  );
};

export default Explore;
