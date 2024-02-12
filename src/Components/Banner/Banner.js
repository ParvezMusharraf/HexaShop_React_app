import React from 'react';
import leftBannerImage from '../../assets/images/left-banner-image.jpg';
import RightBannerImage from '../../assets/images/baner-right-image-01.jpg';
import { useEffect } from 'react';
import {getCatagoriesList} from '../../Request/Requiests';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import '../Banner/Banner.css';

const Banner = () => {

    const [catagoriesList,setCatagoriesList]= useState();

    useEffect(()=>{
        getCatagoriesList().then((res)=>{

            // const shuffleArray = (array) => {
            //     let shuffledArray = array.slice();
            //     for (let i = shuffledArray.length - 1; i > 0; i--) {
            //         const j = Math.floor(Math.random() * (i + 1));
            //         [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
            //     }
            //     return shuffledArray;
            // };
            // 
            
            // setCatagoriesList(shuffleArray(res)?.slice(0, 4));
            setCatagoriesList(res.slice(0,4));
            console.log(res)
        }
        )
    },[])
    
    let navigate = new useNavigate()


    const handleNavigate = (categoryId) => {
      let url = `/productsSection?categoryId=${categoryId}`;
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
                    <a href="#">Purchase Now!</a>
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
                                        <h4>{cat.name}</h4>
                                        <span>We Provide Best{cat.name}</span>
                                    </div>
                                    <div className="hover-content">
                                        <div className="inner">
                                            <h4>{cat.CatName}</h4>
                                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                            <div className="main-border-button">
                                                <button className='btn btn-outline-light' onClick={()=>handleNavigate(cat.id)}>More Products</button>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={cat.image ? cat.image : RightBannerImage } alt={cat.name}/>
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

