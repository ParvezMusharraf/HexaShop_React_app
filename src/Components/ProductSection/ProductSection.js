import React from 'react'
import {getProductByCatagories} from '../../Request/Requiests'
import { useEffect } from 'react';
import { useState } from 'react';
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



const ProductSection = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const userIdParam = searchParams.get("categoryId");
  const [catagoryDetails,setCatagoryDetails]= useState()

  const banner = "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
  

  useEffect(() => {
    let data = userIdParam

    getProductByCatagories(data)?.then((res) => {
      setCatagoryDetails(res.data);
      console.log(res.data, "property Details");
    });
  }, []);

  return (
    <div className='' style={{
      marginTop:"200px",
      display:'flex',
      flexDirection:"row",
      flexWrap:"wrap"
      
    }}>


    { 
    catagoryDetails?.map((p,index)=> <MDBContainer fluid className="my-5">
    <MDBRow className="justify-content-center">
      <MDBCol md="4">
        <MDBCard className="text-black">
          <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />

          {/* images */}
          <MDBCardImage
            // src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
            src={
              JSON.parse(p.images[0]) && JSON.parse(p.images[0]) !== 'null'
              ? JSON.parse(p.images[0])
              : banner            }
            position="top"
            alt={p.title}
          />
          <MDBCardBody>
            <div className="text-center">
              <MDBCardTitle>Believing is seeing</MDBCardTitle>
              {/* title */}
              <p className="text-muted mb-4">{p.title}</p> 
            </div>
            <div>
              <div className="d-flex justify-content-between">
              {/* description */}
                <span>{p.description}</span>
                <span>$5,999</span>
              </div>
              <div className="d-flex justify-content-between">
              {/* category */}
                <span>{p.category.name}</span>
                <span>$999</span>
              </div>
              {/* <div className="d-flex justify-content-between">
                <span>Vesa Mount Adapter</span>
                <span>$199</span>
              </div> */}
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

export default ProductSection
