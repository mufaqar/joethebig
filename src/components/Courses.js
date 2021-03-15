import React from "react";
import { Link } from "gatsby";
import course1 from "../assets/images/product-1.jpg";


const Courses = () => {
  return (
    <section className="course-one course-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />               
              </div>
              <div className="course-one__content">
                <h2 className="course-one__title">
                  <Link to="/cl">
                          Tahiti Palms Canty Shirt
                        </Link>
                </h2>
                <div className="course-one__meta">                  
                  <a href="/course-details">$18</a>
                </div>
               
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />               
              </div>
              <div className="course-one__content">
                <h2 className="course-one__title">
                  <Link to="/course-details">
                          Tahiti Palms Canty Shirt
                        </Link>
                </h2>
                <div className="course-one__meta">                  
                  <a href="/course-details">$18</a>
                </div>
               
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />               
              </div>
              <div className="course-one__content">
                <h2 className="course-one__title">
                  <Link to="/course-details">
                          Tahiti Palms Canty Shirt
                        </Link>
                </h2>
                <div className="course-one__meta">                  
                  <a href="/course-details">$18</a>
                </div>
               
              </div>
            </div>
          </div>


          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />               
              </div>
              <div className="course-one__content">
                <h2 className="course-one__title">
                  <Link to="/course-details">
                          Tahiti Palms Canty Shirt
                        </Link>
                </h2>
                <div className="course-one__meta">                  
                  <a href="/course-details">$18</a>
                </div>
               
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />               
              </div>
              <div className="course-one__content">
                <h2 className="course-one__title">
                  <Link to="/course-details">
                          Tahiti Palms Canty Shirt
                        </Link>
                </h2>
                <div className="course-one__meta">                  
                  <a href="/course-details">$18</a>
                </div>
               
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />               
              </div>
              <div className="course-one__content">
                <h2 className="course-one__title">
                  <Link to="/course-details">
                          Tahiti Palms Canty Shirt
                        </Link>
                </h2>
                <div className="course-one__meta">                  
                  <a href="/course-details">$18</a>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div className="post-pagination">
          <a href="#none">
            <i className="fa fa-angle-double-left"></i>
          </a>
          <a className="active" href="#none">
            1
          </a>
          <a href="#none">2</a>
          <a href="#none">3</a>
          <a href="#none">4</a>
          <a href="#none">
            <i className="fa fa-angle-double-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
