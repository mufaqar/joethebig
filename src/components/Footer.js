import React from "react";


const Footer = () => {

  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
            
            <div className="col-xl-4 col-lg-6 col-sm-12">
                <div className="footer-widget ">
                  <h2 className="footer-widget__title">About joethebig</h2>
                  <p className="footer-widget__text">
                  joethebig and joethebig Design are trademarks and/or registered trademarks of Harry's Inc. or its affiliates
                  </p>
                  
                 
                </div>
              </div>
           
            
             <div className="col-xl-4 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__link">
                  <h2 className="footer-widget__title">Explore</h2>
                  <div className="footer-widget__link-wrap">
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="#none">Home</a>
                      </li>
                      <li>
                        <a href="#none">About</a>
                      </li>
                      <li>
                        <a href="#none">Products</a>
                      </li>
                      <li>
                        <a href="#none">Privacy Polisy</a>
                      </li>
                    
                    </ul>
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="#none">Help </a>
                      </li>
                      <li>
                        <a href="#none">Contact</a>
                      </li>
                      <li>
                        <a href="#none">Register Now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__contact">
                  <h2 className="footer-widget__title">Aout Store </h2>
                  <div className="site-footer__social">
              

              <a href="#none">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#none">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#none">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#none">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            
                </div>
              </div>
            
             </div>
          </div>
        </div>
      
      </footer>

      <div className="search-popup">
        <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
        <div className="search-popup__inner">
          <form action="#" className="search-popup__form">
            <input
              type="text"
              name="search"
              placeholder="Type here to Search...."
            />
            <button type="submit">
              <i className="kipso-icon-magnifying-glass"></i>
            </button>
            <div className="cancel"></div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Footer;
