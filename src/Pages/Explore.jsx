import React from "react";
import { useCart } from "react-use-cart";

const Explore = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

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

  return (
    <section
      style={{
        marginTop: "100px",
      }}
    >
      <div className="main-container d-flex justify-content-center">
        <div
          className="wrapper d-flex row w-50 m-2"
          style={{
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div className="left col-6 badge">
            <img
              src="https://www.beyoung.in/api/cache/catalog/products/new_checked_shirt_image_9_12_2022/navy_blue_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="right col-6">
            <div className="title m-1">This is title</div>
            <div className="priceContainer m-1">
              <strong>Price</strong>
            </div>
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
            <div className="shipingContainer m-1">
              <p>Free Shiping Available</p>
              <div className="btn btn-success">In Stocks</div>
            </div>
            <div className="replacement m-1 ">
              <p className=" text-info">7-days Replacement Available</p>
            </div>
            <div className="counterContainer d-flex justify-content-between align-items-center row m-1">
              <div className="right col-auto">
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
              </div>
              <div className="left col-auto">
                <button className="btn btn-outline-dark"> Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
