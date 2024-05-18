import React from "react";
import { useState } from "react";
import {SaveProduct} from '../Request/Requiests'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PostProduct = () => {
  const [counter,setCounter]=useState()
  const [ratingCounter,setRatingCounter]=useState()
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
  const CountChange = (e)=>{
    const count  = e.target.value
    setCounter(count)
  }
  const ChangeRating = (e)=>{
    const Rating  = e.target.value
    setRatingCounter(Rating)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      rating: {
        rate: ratingCounter,
        count: counter,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SaveProduct(formData).then((res)=>{
      if(res="Title, price, and category are required"){
        const notify = () => toast.warn("Somthing Went Wrong");
        notify()
      }else{
        const notify = () => toast.success("Product Posted Successfully");
        notify()
    }
    }).catch((err)=>{
      console.log(err)
       })
    console.log(formData);
  };
  return (
    <>
    <ToastContainer
    position="top-center"/>
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
  <select
    className="form-control"
    id="category"
    name="category"
    value={formData.category}
    onChange={handleChange}
  >
    <option value="">Select a category</option>
    <option value="men's clothing">men's clothing</option>
    <option value="women's clothing">women's clothing</option>
    <option value="kid's clothing">kid's clothing</option>
    <option value="jewelery">jewelery</option>
    <option value="electronics">electronics</option>
  </select>
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
          name="ratingRate"
          onChange={ChangeRating}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ratingCount" className="form-label">Rating Count</label>
        <input
          type="number"
          className="form-control"
          id="ratingCount"
          name="ratingCount"
          // value={formData.rating.count}
          onChange={CountChange}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center">
      <button type="submit" className="btn btn-outline-dark">Submit</button>
      </div>
    </form>

    </section>
    </>
  );
};

export default PostProduct;
