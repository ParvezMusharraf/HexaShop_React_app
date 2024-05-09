import React from "react";
import { useState } from "react";

const SingleProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };
  return (
    <section
      className="container w-50"
      style={{
        marginTop: "150px",
        display: "flex",
        padding: "40px",
        borderRadius:"10px",
        // backgroundColor: "lightgray",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
          <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="category" className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 row">
        <div className="col-md-6">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="ratingRate" className="form-label">Rating Rate</label>
        <input
          type="text"
          className="form-control"
          id="ratingRate"
          name="rating.rate"
          value={formData.rating.rate}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ratingCount" className="form-label">Rating Count</label>
        <input
          type="number"
          className="form-control"
          id="ratingCount"
          name="rating.count"
          value={formData.rating.count}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center">
      <button type="submit" className="btn btn-outline-dark">Submit</button>
      </div>
    </form>

    </section>
  );
};

export default SingleProduct;
