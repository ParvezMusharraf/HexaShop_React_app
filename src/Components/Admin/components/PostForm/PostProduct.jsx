import React, { useState } from "react";
import { SaveProduct } from "../../../../Request/Requiests";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../sidebar";

const PostProduct = () => {
  const [counter, setCounter] = useState(null);
  const [ratingCounter, setRatingCounter] = useState("");
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: "",
    quantity: "",
    userid: localStorage.getItem("userId"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setError({ ...error, title: value.length === 0 ? "This field is required" : "" });
    } else if (name === "category") {
      setError({ ...error, categoryErr: value === "" ? "Please select a category" : "" });
    } else if (name === "description") {
      setError({ ...error, description: value.length === 0 ? "This field is required" : "" });
    } else if (name === "image") {
      setError({ ...error, image: value.length === 0 ? "This field is required" : "" });
    } else if (name === "price") {
      setError({ ...error, priceErr: value <= 0 ? "Price must be greater than zero" : "" });
    } else if (name === "ratingRate") {
      setRatingCounter(value); // Handle rating counter separately
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      rating: ratingCounter,
      quantity: counter,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (formData.title.length === 0) {
      setError({ ...error, title: "This field is required" });
      return;
    }
    if (formData.category === "") {
      setError({ ...error, categoryErr: "Please select a category" });
      return;
    }
    if (formData.description.length === 0) {
      setError({ ...error, description: "This field is required" });
      return;
    }
    if (formData.price <= 0) {
      setError({ ...error, priceErr: "Price must be greater than zero" });
      return;
    }
    if (formData.image.length === 0) {
      setError({ ...error, image: "This field is required" });
      return;
    }
    if (counter <= 0) {
      setError({ ...error, ratingCounErr: "Quantity must be greater than zero" });
      return;
    }

    // Submit the form
    SaveProduct(formData)
      .then((res) => {
        toast.success("Product Posted Successfully");
      })
      .catch((err) => {
        toast.warn("Something Went Wrong");
        console.error(err);
      });
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <Sidebar />
      <section
        className="container w-50"
        style={{
          marginTop: "150px",
          display: "flex",
          padding: "40px",
          borderRadius: "10px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>Post Product</h4>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-3 row">
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">
                Title<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              {error.title && <div className="text-danger">{error.title}</div>}
            </div>
            <div className="col-md-6">
              <label htmlFor="category" className="form-label">
                Category<span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
                <option value="kid's clothing">Kid's clothing</option>
                <option value="jewelry">Jewelry</option>
                <option value="electronics">Electronics</option>
              </select>
              {error.categoryErr && (
                <div className="text-danger">{error.categoryErr}</div>
              )}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description<span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            {error.description && (
              <div className="text-danger">{error.description}</div>
            )}
          </div>
          <div className="mb-3 row">
            <div className="col-md-6">
              <label htmlFor="price" className="form-label">
                Price<span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
              {error.priceErr && (
                <div className="text-danger">{error.priceErr}</div>
              )}
            </div>
            <div className="col-md-6">
              <label htmlFor="image" className="form-label">
                Image URL<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
              {error.image && <div className="text-danger">{error.image}</div>}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="ratingRate" className="form-label">
              Rating Rate
            </label>
            <input
              type="text"
              className="form-control"
              id="ratingRate"
              name="ratingRate"
              value={ratingCounter}
              onChange={(e) => setRatingCounter(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ratingCount" className="form-label">
              Quantities<span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="ratingCount"
              name="ratingCount"
              value={counter}
              onChange={(e) => setCounter(e.target.value)}
            />
            {error.ratingCounErr && (
              <div className="text-danger">{error.ratingCounErr}</div>
            )}
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-outline-dark">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default PostProduct;
