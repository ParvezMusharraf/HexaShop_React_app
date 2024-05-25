import React from 'react';
import leftBannerImage from '../../assets/images/left-banner-image.jpg';
import RightBannerImage from '../../assets/images/baner-right-image-01.jpg';
import { useEffect } from 'react';
import {getCatagoriesList} from '../../Request/Requiests';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import '../Banner/Banner.css';

const Banner = () => {

    const [catagoriesList,setCatagoriesList]= useState();

    useEffect(()=>{
        getCatagoriesList().then((res)=>{
            setCatagoriesList(res.slice(0,4));
            console.log(res)
        }
        )
    },[])
    
    let navigate = new useNavigate()


    const handleNavigate = (categoryName) => {
      let url = `/productsSection?category=${categoryName}`;
      navigate(url);
    };


  return (
    <div className="main-banner" id="top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-content">
              <div className="thumb">
                <div className="inner-content">
                  <h4>We Are Hexashop</h4>
                  <span>Awesome, clean & Atractive </span>
                  <div className="main-border-button">
                    <Link to="/products">Purchase Now!</Link>
                  </div>
                </div>
                <img src={leftBannerImage} alt="Hexashop Left Banner" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
    {/* Right content code here */}
    <div class="right-content">
        <div class="row">
            {catagoriesList?.map((cat,i)=>{  return <div key={i} class="col-lg-6">
                <div className="right-first-image ">
                    <div className="thumb">
                        <div className="inner-content">
                            <h4>{cat.categoryName}</h4>
                            <span>We Provide Best {cat.categoryName}</span>
                        </div>
                        <div className="hover-content">
                            <div className="inner">
                                <h4>{cat.categoryName}</h4>
                                <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                <div className="main-border-button">
                                    <button className='btn btn-outline-light' onClick={()=>handleNavigate(cat.categoryName)}>More Products</button>
                                </div>
                            </div>
                        </div>
                        {/* Fixing image size by adding fixed width and height */}
                        <img src={cat.image ? cat.image : RightBannerImage } alt={cat.name} style={{ width: '100%', height: '300px' }}/>
                    </div>
                </div>
            </div>
            })
            }
        </div>
    </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

