import React from 'react'
import { useState,useEffect } from 'react';
import { getAllProductsList } from '../Request/Requiests';
import { FaProductHunt } from "react-icons/fa";

import { CgDetailsMore } from "react-icons/cg";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";

const Product = () => {

  const [productDetails,setProductDetails] = useState([]);

  const banner="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"

useEffect(()=>{
  getAllProductsList().then((res)=>{
    setProductDetails(res.data)
    console.log(res.data)
  })
},[]);

  return (
    <div  style={{ display: 'flex', flexWrap: 'wrap',marginTop:"100px",flexDirection:"row",width:"100%" }}>
          {productDetails?.map((p,index)=> <MDBContainer  className="col-6 my-5">
    <MDBRow className="justify-content-around">
      <MDBCol md="7">
        <MDBCard className="text-black">
          <MDBIcon fab icon="apple" size="lg" className="px-3 pb-2" />

          {/* images */}
          <MDBCardImage
            src={p.image}
            position="top"
            alt={p.title}
          />
          <MDBCardBody>
            <div className="text-center">
            <MDBCardTitle>{p.title}</MDBCardTitle>
              {/* title */}
              <p className="text-muted mb-4">{p.title}</p> 
            </div>
            <div>
              <div className="d-flex justify-content-between">
              {/* description */}
                <p>{p.description}</p>
                <CgDetailsMore />          
              </div>
              <div className="d-flex justify-content-between">
              {/* category */}
                <h6>{p.category.name}</h6>
                <FaProductHunt />
              </div>
            </div>
            <div className="d-flex justify-content-between total font-weight-bold mt-4">
              <span>Total</span>
              {/* price */}
              <span>${p.price}</span>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
    ) 
  }

  
    </div>
  )
}

export default Product
