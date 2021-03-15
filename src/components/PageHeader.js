import React from "react";


const PageHeader = (props) => {
  return (
    <section className="inner-banner">
      <div className="container">
        
        <h2 className="inner-banner__title">{props.title}</h2>
      </div>
    </section>
  );
};

export default PageHeader;
