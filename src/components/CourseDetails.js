import React from "react";

import courseD1 from "../assets/images/single-product-1.jpg";


const CourseDetails = () => {
  return (
    <section className="section-product">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="section__images">

            <img src={courseD1} className="image_ol" alt="" /> 
              
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="section__content">
          <div className="product-single js-product">
          <h1 class="product__title">
                  Ditch International Hoodie <span>Sandstone</span>
                </h1>

                <div class="product__price">
                  <del class="product__price-compared"></del>
             

                  <span class="product__price-total" >Rs 23,100</span>
                
                </div>

                <div class="product__submit">


                <button type="submit" class="btn btn--black js-btn-product">Add to Cart</button>
                </div>
                <div class="product__content">
                
                <p >Free shipping on US orders over Rs. 18,500. All sale items are final sale.</p>
                

                <p>New for Spring '21, our Ditch International Hoodie is a revamp of our core Ditch Miller Standard program. We've made our International styles in a new, heavyweight 460gsm loopback terry that's structured but soft and stands up to both winter chills and your&nbsp; Cold-War-era-apartment-building-basement washing machine.&nbsp;We've also tweaked our standard Ditch Hoodie fit to add more room in the shoulder and chest, meaning you can buy your normal size.&nbsp;<strong>&#65279;</strong></p>
                  <ul>
                  <li>New Standard Fit. Take your normal size, or size up for an oversized look.&nbsp;</li>
                  <li>460gsm 100% cotton loopback terry fabric</li>
                  <li>1-piece Hood with dart detail</li>
                  <li>Bound back neck seam with cotton herringbone tape</li>
                  <li>Flat braided cotton hood drawcord</li>
                  <li>Antique nickel metal hood drawcord eyelet</li>
                  <li>Kangaroo Pocket with bartacks</li>
                  <li>Exterior woven flag label on side seam</li>
                  <li>Overlock with split needle seams</li>
                  <li>Embroidered ‘International’ graphic logo on front chest</li>
                  <li>Embroidered ‘Slash’ logo on Sleeve</li>
                  <li>1x1 Rib WB and Sleeve Cuff</li>
                  <li>Machine wash cold, tumble dry</li>
                  </ul>

                


              </div>
          
          
          
          
          
          
           </div>   
           
           </div>
            
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
