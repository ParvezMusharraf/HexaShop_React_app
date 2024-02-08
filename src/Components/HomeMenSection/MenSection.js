import React from 'react';
import Men1 from '../../assets/images/men-01.jpg'

const MenSection = () => {
    return (
        <section className="section" id="men">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2>Men's Latest</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="men-item-carousel">
                            <div className="owl-men-item owl-carousel">
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
                                        <img src={Men1} alt="" />
                                    </div>
                                    <div className="down-content">
                                        <h4>Classic Spring</h4>
                                        <span>$120.00</span>
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

export default MenSection;
