/** @format */

import React from "react";
import "../App.css";

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className='home-picture'></div>
        <div className='home-text'>
          <h4>
            {" "}
            Name: <span className='home-name'> Illias Ahmed</span>
          </h4>
          <h4>
            {" "}
            Email: <span className='home-email'> x@gmail.com </span>
          </h4>
          <h4>
            {" "}
            Contact: <span className='home-contact'> 017- </span>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Home;
