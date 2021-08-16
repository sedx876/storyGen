import React from 'react';
import firstNames from '../data/firstNames'
import {Link} from 'react-router-dom'

const generateFirstName = () => {
  const name = firstNames[Math.floor(Math.random() * firstNames.length)];
  return name
}

const FirstNameGenerator = () => {
  return (
    <div 
      className="container card card-body bg-secondary text-center text-success border-success mb-3 mt-3">
      <h3>
        Stumped for a Character First Name?
      </h3>
      <h4>Hit the 'Name Generator' Button to Generate a New Name</h4>
      <br/>
        <Link 
          id='nameGenBtn' 
          className="btn btn-raised btn-primary btn-sm mx-auto text-center" 
          to="/firstnamegen">
          Generate First Name
        </Link>
      <br/>
        <h5>
          Your New Character Name is...
        </h5>
        <br/>
        <h2 className="card bg-secondary">
          <br/>
          ~{generateFirstName()}~
          <br/>
        </h2>
        <br/>
       
      
    </div>
  );
}

export default FirstNameGenerator;