/** @format */

import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faYoutube /* Add other icons as needed */,
} from "@fortawesome/free-brands-svg-icons";


const Home = () => {
  return (
    <div className='Home'>
      <div className='home-container'>
        <div className='home-picture'></div>
        <div className='home-text'>
          <h4>
            {" "}
            Name: <span className='home-name'> Redwan Shawkat </span>
          </h4>
          <h4>
            Email: <span className='home-email'> redwanshawkat@gmail.com </span>
          </h4>
          <h4>
            Contact: <span className='home-contact'> 01632108860 </span>
          </h4>

          {/* // -----> Social Links  */}
          <section className='social-links'>
            {/* // -----> GitHub  */}
            <a href='https://github.com/Redwan-Shawkat'>
              <FontAwesomeIcon icon={faGithub} />
            </a>

            {/* // -----> Facebook  */}
            <a
              href='https://www.facebook.com/redwanshawkat/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
