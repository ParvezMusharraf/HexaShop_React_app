import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { getProductListByCategory } from "../../Request/Requiests";
import { Link } from "react-router-dom";
import "../loader.css"


const WomenSection = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductListByCategory("women's clothing");
        if (res === "No Product Found") {
          setProductDetails([]);
        } else {
          setProductDetails(res);
        }
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <section className="section" id="women">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>
                Women's Latest{" "}
                <span>
                  <Link to="/productsSection?category=women's clothing">
                    Show More
                  </Link>
                </span>
              </h2>
              <span>
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {isLoading ? (
              <div className="loader-container">
                <div className="spinner"></div>
              </div>
            ) : productDetails.length === 0 ? (
              <p className="no-products">No products found.</p>
            ) : (
              <OwlCarousel className="owl-theme" {...options}>
                {productDetails.map((item) => (
                  <div className="item" key={item.id}> {/* Assuming each item has a unique `id` */}
                    <div className="thumb2">
                      <div className="hover-content">
                        <ul>
                          <li>
                            <a href="single-product.html">
                              <i className="fa fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">
                              <i className="fa fa-star"></i>
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">
                              <i className="fa fa-shopping-cart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="down-content">
                      <h4>{item.title}</h4>
                      <span>${item.price}</span>
                      <ul className="stars">
                        {[...Array(5)].map((_, i) => (
                          <li key={i}>
                            <i className="fa fa-star"></i>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenSection;
