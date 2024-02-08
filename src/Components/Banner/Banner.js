import React from 'react';
import leftBannerImage from '../../assets/images/left-banner-image.jpg';
import RightBannerImage from '../../assets/images/baner-right-image-01.jpg';
import RightBannerImage2 from '../../assets/images/baner-right-image-02.jpg';
import RightBannerImage3 from '../../assets/images/baner-right-image-03.jpg';
import RightBannerImage4 from '../../assets/images/baner-right-image-04.jpg';
// import '../Banner/Banner.css';

const Banner = () => {
  return (
    <div className="main-banner" id="top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-content">
              <div className="thumb">
                <div className="inner-content">
                  <h4>We Are Hexashop</h4>
                  <span>Awesome, clean & creative HTML5 Template</span>
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
                        <div class="col-lg-6">
                            <div class="right-first-image">
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h4>Women</h4>
                                        <span>Best Clothes For Women</span>
                                    </div>
                                    <div class="hover-content">
                                        <div class="inner">
                                            <h4>Women</h4>
                                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                            <div class="main-border-button">
                                                <a href="#">Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={RightBannerImage}/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-first-image">
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h4>Men</h4>
                                        <span>Best Clothes For Men</span>
                                    </div>
                                    <div class="hover-content">
                                        <div class="inner">
                                            <h4>Men</h4>
                                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                            <div class="main-border-button">
                                                <a href="#">Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={RightBannerImage2}/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-first-image">
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h4>Kids</h4>
                                        <span>Best Clothes For Kids</span>
                                    </div>
                                    <div class="hover-content">
                                        <div class="inner">
                                            <h4>Kids</h4>
                                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                            <div class="main-border-button">
                                                <a href="#">Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={RightBannerImage3}/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="right-first-image">
                                <div class="thumb">
                                    <div class="inner-content">
                                        <h4>Accessories</h4>
                                        <span>Best Trend Accessories</span>
                                    </div>
                                    <div class="hover-content">
                                        <div class="inner">
                                            <h4>Accessories</h4>
                                            <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                            <div class="main-border-button">
                                                <a href="#">Discover More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={RightBannerImage4}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

