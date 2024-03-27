import React from 'react';
import '../App.css';

const Skills = () => {
  return (
    <div className='skills-container'>
      <table className='skills-table'>
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
      </table>
    </div>
  );
}

export default Skills