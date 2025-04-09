/** @format */

import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
        <li>
          <Link to='/education'>Education</Link>
        </li>
        <li>
          <Link to='/training'> Training </Link>
        </li>
        <li>
          <Link to='/projects'> Projects </Link>
        </li>
        <li>
          <Link to='/experience'> Experience </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
