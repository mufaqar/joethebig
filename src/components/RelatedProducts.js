import React from "react";
import { Link } from "gatsby";
import course1 from "../assets/images/product-2.jpg";
import course2 from "../assets/images/product-2.jpg";
import course3 from "../assets/images/product-3.jpg";



const RelatedProducts = () => {
  return (
    <section className="product-one product-page">
      <div className="container">

      <header class="section__head">
          <h4>Recommended Items</h4>
        </header>
        <div className="row">
          <div className="col-lg-4">
            <div className="product__single">
               <div className="product-one__image">
                    <img src={course2} className="image_ol" alt="" /> 
                    <div class="img_overlay">
                    <div class="buytext">BUY</div>
                </div>          
              </div>
              <div className="product-one__content">
                <h4 className="product_title">
                      <Link to="">Tahiti Palms Canty Shirt </Link>
                  </h4>
                <h4 class="price"> 
                     275 EUR
                 </h4>               
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="product__single">
               <div className="product-one__image">
                    <img src={course2} className="image_ol" alt="" /> 
                    <div class="img_overlay">
                    <div class="buytext">BUY</div>
                </div>          
              </div>
              <div className="product-one__content">
                <h4 className="product_title">
                      <Link to="/course-details">Tahiti Palms Canty Shirt </Link>
                  </h4>
                <h4 class="price"> 
                     275 EUR
                 </h4>               
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="product__single">
               <div className="product-one__image">
                    <img src={course3} className="image_ol" alt="" /> 
                    <div class="img_overlay">
                    <div class="buytext">BUY</div>
                </div>          
              </div>
              <div className="product-one__content">
                <h4 className="product_title">
                      <Link to="/course-details">Tahiti Palms Canty Shirt </Link>
                  </h4>
                <h4 class="price"> 
                     275 EUR
                 </h4>               
              </div>
            </div>
          </div>

          
        </div>
    
      </div>
    </section>
  );
};

export default RelatedProducts;
