import React from "react";
import { getProductListByCategory } from "../../Request/Requiests";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useEffect } from "react";
import { useState } from "react";
import ProductDetailsModel from '../../Comman/ProductDetailModel'

import { Card } from "antd";

const { Meta } = Card;

const ProductSection = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const category = searchParams.get("category");
  const [catagoryDetails, setCatagoryDetails] = useState([]);
  const [open, setOpen] = useState(false);
  const [callid,setcallId]= useState("")


  useEffect(() => {
    getProductListByCategory(category).then((res) => {
      setCatagoryDetails(res);
    });
  }, []);

  const handleModel = (obj)=>{
    setOpen(true)
    setcallId(obj)
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {catagoryDetails.map((p, index) => (
          <div className="col-3 m-2 ">
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
<Meta
              title={p.title}
            />
            <div className="d-flex justify-content-between align-items-center my-3">
              <b>Details:</b>
              <button type="button" class="btn " data-toggle="modal" onClick={()=>handleModel(p)}  data-target="#exampleModal"> <IoIosArrowDropdownCircle /></button>
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
      {open &&
    <ProductDetailsModel 
    setOpen={setOpen}
    obj={callid}
    />
    }
    </div>
  );
};

export default ProductSection;
