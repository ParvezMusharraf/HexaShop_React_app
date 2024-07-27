import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { getProductListByCategory } from "../../Request/Requiests";
import ProductDetailsModel from '../../Comman/ProductDetailModel'
import "../loader.css"

const ProductSection = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const category = searchParams.get("category");
  const [productDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductListByCategory(category);
        if (res === "No Product Found") {
          setIsLoading(false);
        } else {
          setProductDetails(res);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch products", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

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

  const handleModel = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  return (
    <section className="section" id="product-section">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <div className="container">
            <div className="section-heading">
              <h2>
                Product List{" "}
                <span>Explore More</span>
              </h2>
            </div>
          </div>
          <div className="container">
            <OwlCarousel className="owl-theme" {...options}>
              {productDetails.length === 0 ? (
                <p>No products found.</p>
              ) : (
                productDetails.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="thumb2">
                      <div className="hover-content">
                        <ul>
                          <li>
                            <button onClick={() => handleModel(item)}>
                              <i className="fa fa-eye"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="down-content">
                      <h4>{item.title}</h4>
                      <span>${item.price}</span>
                    </div>
                  </div>
                ))
              )}
            </OwlCarousel>
          </div>
          {open && 
            <ProductDetailsModel 
              setOpen={setOpen}
              obj={selectedProduct}
            />
          }
        </>
      )}
    </section>
  );
};

export default ProductSection;
