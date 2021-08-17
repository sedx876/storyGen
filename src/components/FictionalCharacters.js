import React from 'react';
import fictionalCharacters from '../data/fictionalCharacters'
import {Link} from 'react-router-dom'

const generatefictionalCharacters = () => {
  const fictionalChar = fictionalCharacters[Math.floor(Math.random() * fictionalCharacters.length)];
  return fictionalChar
}

const FictionalCharacters = () => {
  return (
    <div 
      className="container card card-body bg-secondary text-center text-success border-success mb-3 mt-3">
      <h3>
        Stumped for a Character First Name?
      </h3>
      <h4>Hit the 'Generate Fictional Character' Button to Generate a Fictional Character</h4>
      <br/>
        <Link 
          id='nameGenBtn' 
          className="btn btn-raised btn-primary btn-sm mx-auto text-center" 
          to="/ficchar">
          Generate Fictional Character 
        </Link>
      <br/>
        <h5>
          Your Fictional Character is...
        </h5>
        <br/>
        <h2 className="card bg-secondary">
          <br/>
          ~{generatefictionalCharacters()}~
          <br/>
        </h2>
        <br/>
       
      
    </div>
  );
}

export default FictionalCharacters;