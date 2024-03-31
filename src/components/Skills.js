import React from 'react';
import '../App.css';

// -----> Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// -----> Import Solid Icons 
 import {
   faC,
 //  faVScodesquare,
 } from "@fortawesome/free-solid-svg-icons";

// -----> Import brand icons 
import {
  faBootstrap,
  faNode,
  // faVScodesquare
} from "@fortawesome/free-brands-svg-icons";


// -----> or
 import {
   faHtml5,
   faCss3Alt,
   faJs,
   faReact,
   faGithub,
   faFigma,
 } from "@fortawesome/free-brands-svg-icons";


// -----> or 
//import { faNodeJs, faMongodb } from "@fortawesome/free-regular-svg-icons";

// -----> Importing Image 
import MongoDB from "../assets/MongoDB.png";
import VS from "../assets/VS.png";

const Skills = () => {
  return (
    <div className='skills-container'>
      {/* <table className='skills-table'>
        <thead> SKills </thead>
        <tbody>
          <tr>
            <th> Language: </th>
            <td> HTML, CSS, JavaScript, C </td>
          </tr>
          <tr>
            <th> Frameworks: </th>
            <td>
              {" "}
              Bootstrap, ReactJs (Intermediate), ExpressJS (Intermediate),
              NodeJs (Intermediate)
            </td>
          </tr>
          <tr>
            <th> Databases: </th>
            <td> MongoDB (Intermediate) , MySQL (Intermediate) </td>
          </tr>
          <tr>
            <th> Tools: </th>
            <td> Figma, GitHub, VScode, Mongoose</td>
          </tr>
        </tbody>
      </table> */}

      <p className='language_div'>
        <span className='language'> Language: </span>
        <FontAwesomeIcon className='HTML' icon={faHtml5} />
        <FontAwesomeIcon className='CSS' icon={faCss3Alt} />
        <FontAwesomeIcon className='JavaScript' icon={faJs} />
        <FontAwesomeIcon className='C' icon={faC} />
      </p>

      <p className='frameworks_div'>
        <span className='framework'> Framework: </span>
        <FontAwesomeIcon className='BOOTSTRAP' icon={faBootstrap} />
        <FontAwesomeIcon className='REACT' icon={faReact} />
        {/* <FontAwesomeIcon className='EXPRESS' icon={faExpress} /> */}
        <FontAwesomeIcon className='NODEJS' icon={faNode} />
      </p>

      <p className='database_div'>
        <span className='database'> Database: </span>
        <div className='mongodb'> </div>
        <div className='sql'> </div>
        {/* <FontAwesomeIcon className='MONGODB' icon={faMongodb} /> */}
      </p>

      <p className='tools_div'>
        <span className='tools'> Tools: </span>
        {/* <FontAwesomeIcon className='VSCODE' icon={faVScodesquare} /> */}
        <div className='VS'> </div>
        <FontAwesomeIcon className='GITHUB' icon={faGithub} />
        <FontAwesomeIcon className='FIGMA' icon={faFigma} />
      </p>
    </div>
  );
}

export default Skills