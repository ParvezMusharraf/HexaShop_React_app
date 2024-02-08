import React from 'react';
import kid1 from "../../assets/images/kid-01.jpg"

const KidsSection = () => {
    return (
        <section className="section" id="kids">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2>Kid's Latest</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="kid-item-carousel">
                            <div className="owl-kid-item owl-carousel">
                                {/* Repeat the following block for each item */}
                                <div className="item">
                                    <div className="thumb">
                                        <div className="hover-content">
                                            <ul>
                                                <li><a href="single-product.html"><i className="fa fa-eye"></i></a></li>
                                                <li><a href="single-product.html"><i className="fa fa-star"></i></a></li>
                                                <li><a href="single-product.html"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <img src={kid1} alt="" />
                                    </div>
                                    <div className="down-content">
                                        <h4>School Collection</h4>
                                        <span>$80.00</span>
                                        <ul className="stars">
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Repeat block ends here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KidsSection;
