import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const Explore = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  const [freeShipping, setFreeShipping] = useState(false);

  useEffect(() => {
    if (grandTotal > 1000) {
      setFreeShipping(true);
    } else {
      setFreeShipping(false);
    }
  }, []);

  if (isEmpty)
    return (
      <p
        style={{
          marginTop: "100px",
        }}
      >
        Your cart is empty
      </p>
    );

  const grandTotal = items.reduce((total, item) => total + item.price, 0);

  return (
    <section
      style={{
        marginTop: "150px",
      }}
    >
      <div className="grandTotol d-flex justify-content-center align-items-center m-3">
        <h6 className="text-success"> Price Upto 1000 meke a free dilavery</h6>
      </div>
      {items.map((p) => (
        <div
          key={p.id}
          className="main-container d-flex justify-content-center"
        >
          <div
            className="wrapper d-flex row w-50 m-2"
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <div className="left col-6 badge">
              <img
                src={p.image}
                // src="https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/navy_blue_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg"
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="right col-6">
              <div className="title m-1">{p.title}</div>
              <div className="priceContainer m-1">
                <strong>{p.price}$</strong>
              </div>
              {p.category == "electronics" ? (
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
                <p>Free Shiping Available</p>
                <div className="btn btn-success">In Stocks</div>
              </div>
              <div className="replacement m-1 ">
                <p className=" text-info">7-days Replacement Available</p>
              </div>
              <div className="description m-1">
                <h6>Description</h6>
                <p>{p.description}</p>
              </div>
              <div className="counterContainer d-flex justify-content-between align-items-center row">
                {/* <div className="right col-auto">
              <button
                className="btn btn-outline-dark"
                // onClick={decrementCounter}
              >
                -
              </button>
              <span>Counter</span>
              <button
                className="btn btn-outline-dark"  
                // onClick={incrementCounter}
              >
                +
              </button>
              </div> */}
                <div className="left col-auto">
                  <button
                    className="btn btn-outline-dark m-1"
                    onClick={() => removeItem(p.id)}
                  >
                    {" "}
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
             <h3> You Are eligible For <span className="text-primary">Free Shipping</span> </h3>
             <div className="total_amount d-flex row justify-content-center align-items-center m-4"> 
             <h5 className="m-1">Total Amount :</h5>
             <span className="m-1"><strong> {grandTotal.toFixed(2)}$</strong></span>
             <button className="btn btn-dark" onClick={()=> alert("Payment page is underconstruction")} >Proceed to pay</button>
             </div>
             </div>
        ) : (
          <div className="paidShipping">
            <h4>You Have to pay some <span className="text-danger">shipping Charges On delivery</span></h4>
            <div className="total_amount d-flex row justify-content-center align-items-center m-4"> 
             <h5 className="m-1">Total Amount :</h5>
             <span className="m-1"><strong> {grandTotal.toFixed(2)}$</strong></span>
             <button className="btn btn-dark" onClick={()=> alert("Payment page is underconstruction")}>Proceed to pay</button>
             </div>
             </div>
        )}
      </div>
    </section>
  );
};

export default Explore;
