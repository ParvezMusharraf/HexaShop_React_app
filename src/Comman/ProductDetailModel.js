import React, { useEffect, useState } from "react";
import {useCart} from 'react-use-cart';
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const ProductDetialModel = ({ setOpen, obj }) => {
  const [data,setData]= useState()
  const {addItem} = useCart()

  const handleCancel = () => {
    console.log(`Clicked cancel button${obj._id} `);
    setOpen(false);
  };

  const AddtoCart = (obj)=>{
    addItem({ ...obj, id: obj._id })
    const notify = ()=>{
      toast.success("Item added successfully")
    }
    notify()
    // setTimeout(()=>{
    // },[2000])
  }

  return (
    <>
    <ToastContainer/>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Product Details
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="image-section text-center">
                {/* Render your image here */}
                <img
                  className="img-thumbnail rounded w-75 h-75"
                  src={obj.image}
                  alt="Product"
                />
              </div>
              <div className="container">
                <div className="details-section">
                  <h2 className="p-1">{obj.title}</h2>
                  <h5 className="p-1" > Description </h5>
                  <p className="p-1">{obj.description}</p>
                </div>
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
                  <button type="button" 
                  onClick={()=> AddtoCart(obj)
                    }
                   className="btn btn-secondary p-1 m-2">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetialModel;
