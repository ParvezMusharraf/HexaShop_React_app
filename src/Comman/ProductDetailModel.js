import React from "react";
import { useCart } from "react-use-cart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddToCart } from "../Request/Requiests";
import { UserAuth } from "../context/UserContaxt";
import { useNavigate } from "react-router-dom";

const ProductDetailModel = ({ setOpen, obj }) => {
  const handleCancel = () => {
    setOpen(false);
  };
  const navigate = useNavigate()
  const { userExist, handleLogOut } = UserAuth();

  const addToCart = (product) => {
    try {
      const data = {
        productId: product,
        userid: localStorage.getItem("userId"),
      };
      const saveAddToCart = async () => {
        console.log(data);
        const res = await AddToCart(data);
        if (res.message === "Product added to cart successfully") {
          alert(res.message);
        } else alert(res.message);
      };
      saveAddToCart();
    } catch (error) {
      alert("Failed to cart add");
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className="modal fade show"
        style={{ display: "flex", height: "100vh", overflowY: "auto" }}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: "100%", margin: "0" }}
        >
          <div
            className="modal-content"
            style={{ display: "flex", flexDirection: "row", height: "100%" }}
          >
            <div
              className="image-section"
              style={{ flex: 1, background: "#f8f9fa" }}
            >
              <img
                className="img-fluid"
                src={obj.image}
                alt="Product"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="details-section"
              style={{ flex: 1, padding: "20px", overflowY: "auto" }}
            >
              <div className="modal-header" style={{ borderBottom: "none" }}>
                <h5 className="modal-title" id="exampleModalLabel">
                  Product Details
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCancel}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <h2 className="p-1">{obj.title}</h2>
              <h5 className="p-1">Description</h5>
              <p className="p-1">{obj.description}</p>
              <div className="price-section">
                <h5 className="p-1">
                  <b>Price: </b>
                  {obj.price}$
                </h5>
              </div>
              <div className="button-section">
                <button type="button" className="btn btn-primary p-1 m-1">
                  Buy Now
                </button>
                {userExist ? (
                  <button
                    type="button"
                    onClick={() => addToCart(obj._id)}
                    className="btn btn-secondary p-1 m-2"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() =>navigate("/login") }
                    className="btn btn-secondary p-1 m-2"
                  >
                    Login to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailModel;
