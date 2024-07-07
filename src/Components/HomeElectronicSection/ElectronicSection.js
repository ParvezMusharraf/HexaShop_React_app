import React, { useState, useEffect } from 'react';
import kid1 from "../../assets/images/kid-01.jpg"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { getProductListByCategory } from '../../Request/Requiests';
import { Link } from 'react-router-dom';



const ElectronicSection = () => {
    const [productDetails, setProductDetails] = useState([]);


    useEffect(() => {
        getProductListByCategory("electronics").then((res) => {
            setProductDetails(res);
        });
    }, []);
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };
  return (
    <section className="section" id="Electronics">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="section-heading">
                    <h2>Latest Electronics <span><Link to="/productsSection?category=electronics">Show More</Link></span></h2>
                    <span>Details to details is what makes Hexashop different from the other themes.</span>
                </div>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <OwlCarousel className="owl-theme" {...options}>
                    {productDetails?.map((item, i) => (
                        <div className="item" key={i}>
                            <div className="thumb2">
                                <div className="hover-content">
                                    <ul>
                                        <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                        <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                        <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="down-content">
                                <h4>{item.title}</h4>
                                <span>${item.price}</span>
                                <ul className="stars">
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    </div>
</section>
  )
}

export default ElectronicSection
