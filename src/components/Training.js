/** @format */
import React from "react";
import "../App.css";

const Training = () => {
  return (
    <div className='training-container'>
      <div className='course'>
        <h2> Course</h2>
        <div className='course-details'>
          <p className='cNo'> 01 </p>
          <q> MERN Stack Web Development </q>
          <blockquote>
            <p> Interactive Cares </p>
            <small>
              HTML, CSS, JavaScript, Bootstrap, React, Express.js, Node.js,
              MongoDB
            </small>
          </blockquote>
        </div>
        <div className='course-details'>
          <p className='cNo'> 02 </p>
          <q> Online Web Designer Course </q>
          <blockquote>
            <p> Bdcalling Academy </p>
            <small>HTML, CSS, Bootstrap</small>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Training;
