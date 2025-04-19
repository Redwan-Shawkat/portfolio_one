/** @format */

import React from "react";
import "../App.css";

const Projects = () => {
  return (
    <div className="project-details">
      <div className="project01">
        <p> Portfolio Website </p>
        <small> A simple portfolio website using HTML, CSS & React. </small>
        <div className="project-links">
          <a href="https://github.com/Redwan-Shawkat/portfolio_one">
            GitHub Repository
          </a>
          <em> - </em>
          <a href="https://portfolio-nu-one-65.vercel.app/"> Preview </a>
          <em> - </em>
          <a href="https://www.youtube.com/watch?v=iEycTxr4XOY"> Video </a>
        </div>
      </div>
      <div className="project02">
        <p> Campsite Booking Website </p>
        <small>
          A non-responsive website designed for website booking using HTML &
          CSS.
        </small>
        <div className="project-links">
          <a href="https://github.com/Redwan-Shawkat/Booking-Camping-Site?tab=readme-ov-file">
            GitHub Repository
          </a>
          <em> - </em>
          <a href="https://redwan-shawkat.github.io/Booking-Camping-Site/">
            Preview
          </a>
          <em> - </em>
          <a href="https://www.youtube.com/watch?v=6ueLMNR_vTU"> Video </a>
        </div>
      </div>
      <div className="project03">
        <p> Digital Dashboard</p>
        <small>
          {" "}
          A non-responsive digital dashboard is created using HTML, CSS.{" "}
        </small>
        <div className="project-links">
          <a href="https://github.com/Redwan-Shawkat/Dashboard?tab=readme-ov-file">
            GitHub Repository
          </a>
          <em> - </em>
          <a href="https://redwan-shawkat.github.io/Dashboard/"> Preview </a>
          <em> - </em>
          <a href="https://www.youtube.com/watch?v=YBUBUgLLU_c"> Video </a>
        </div>
      </div>
      <div className="project04">
        <p> Weather APP</p>
        <small>
          A weather app is created using HTML, CSS, JavaScript Query, API
        </small>
        <div className="project-links">
          <a href="https://github.com/Redwan-Shawkat/Weather-APP">
            GitHub Repository
          </a>
          <em> - </em>
          <a href="https://redwan-shawkat.github.io/Weather-APP/"> Preview </a>
          <em> - </em>
          <a href="https://www.youtube.com/watch?v=tb6AgtCxceQ"> Video </a>
        </div>
      </div>
      <div className="project05">
        <p> Push Notification (Notification Handling - JavaScript) </p>
        <small>
          Push notification integration using RabbitMQ and Firebase (Android) /
          Apple APNs (iOS) with JavaScript
        </small>
        <div className="project-links">
          <a href="https://github.com/Redwan-Shawkat/push-notification">
            GitHub Repository
          </a>
        </div>
      </div>
      <div className="project06">
        <p> Push Notification (Backend – Lumen API) </p>
        <small>
          Developed a backend API using Lumen to manage and send push
          notifications to mobile devices via Firebase and Apple APNs.
        </small>
        <div className="project-links">
          <a href="https://github.com/Redwan-Shawkat/lumen_pushNotification">
            GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
