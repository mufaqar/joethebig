import React, { Component } from "react";



class AboutOne extends Component {
  constructor() {
    super();
    this.state = {
      startCounter: false
    };
  }

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ startCounter: true });
    }
  };

  render() {
    return (
      <section className="about-one ">
        <div className="container text-center">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              Let’s do study with <br />
              expert teachers
            </h2>
          </div>
          
          <p className="about-one__text">
           
            <br />
            “Not only did I find the most beautiful and amazing husband, I found my soul mate, a new hobby that has turned into a business and a livelihood for our little family.

A place on earth that I love to be, and a kind of peace and inspiration I hardly knew existed. We work hard, but after 11 years I still have this strange feeling of being on holiday - on an adventure. The nature that surrounds us is stunning, so even taking the car to run an errand feels like a small holiday for my mind.

Travelling the world and seeing our work in the most beautiful stores and spaces is a pleasure and feels like an achievement. I am still trying to understand that all this could happen for us. I just feel very, very lucky”.

Samina Langholz, Montemerano Jan 2016
          </p>
        
        </div>
      </section>
    );
  }
}

export default AboutOne;
