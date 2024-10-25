import React from 'react';
import '../App.css'

import EduToggle from './EduToggle';

const Education = () => {
  return (
    <div className='edDescription'>

      <EduToggle
        title='BACHELOR OF SCIENCE (B.Sc.)'
        Institution='DAFFODIL INTERNATIONAL UNIVERSITY'
        Department='Department of Software Engineering'
        Graduation='Passed Year: 2023'
        Result='CGPA 3.63 out of 4.00'
      />

      <EduToggle
        title='HIGHER SECONDARY SCHOOL CERTIFICATE (H.Sc.)'
        Institution='Mohammadpur Model School & College'
        Board='Board: Dhaka'
        Group='Group: Science'
        Graduation='Passed Year: 2018'
        Result='GPA 3.75 out of 5.00'
      />

      <EduToggle
        title='SECONDARY SCHOOL CERTIFICATE (S.Sc.)'
        Institution='Mohammadpur Model School & College'
        Board='Board: Dhaka'
        Group='Group: Science'
        Graduation='Passed Year: 2016'
        Result='GPA 4.83 out of 5.00'
      />
    </div>
  );
}

export default Education