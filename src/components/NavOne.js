import React, { Component } from "react";
import { Link } from "gatsby";
//import logo from "../assets/images/logo-dark.png";
class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display !== "block" ? "block" : "none";
    });
  };



  render() {
    return (
      <header className="site-header site-header__header-one ">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link to="/" className="navbar-brand">
              joethebig
              </Link>
            
              <button className="menu-toggler">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" navigation-box">
                <li className="current">
                  <Link to="/">Home</Link>
                
                </li>
                <li>
                      <Link to="/about">About </Link>
                     
                    </li>
               
                <li>
                  <a href="/courses">Shop</a>
                
                </li>
                <li>
                  <Link to="/course-details">Product Detail</Link>
                 
                </li>
                <li>
                  <Link to="/news">privacy policy</Link>
                  
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            
          </div>
        </nav>
        
      </header>
    );
  }
}

export default NavOne;
