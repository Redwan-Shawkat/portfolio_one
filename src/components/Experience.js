import React from "react";
import "../App.css";

const Experience = () => {
  return (
    <div className="experience-details">
      <h3>
        {" "}
        <b>
          {" "}
          <u>B-Trac Solutions Ltd. </u>
        </b>{" "}
      </h3>
      <p> Web Application Intern </p>
      <span> February 2025 - April 2025</span>
      <ul>
        <li>
          Worked on push notification integration using RabbitMQ and Firebase
          (Android) / Apple APNs (iOS) with JavaScript.
        </li>
        <li>
          Learned Laravel and Lumen; built a lightweight backend API in Lumen
          using API tokens for authentication.
        </li>
      </ul>
    </div>
  );
};

export default Experience;
