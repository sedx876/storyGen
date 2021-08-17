import React from 'react';
import superpowers from '../data/superpowers'
import {Link} from 'react-router-dom'

const generateSuperpower = () => {
  const superpower = superpowers[Math.floor(Math.random() * superpowers.length)];
  return superpower
}

const Superpowers = () => {
  return (
    <div 
      className="container card card-body bg-secondary text-center text-success border-success mb-3 mt-3">
      <h3>
        Looking for a Random SuperPower?
      </h3>
      <h4>Hit the 'Generate Random SuperPower' Button to Generate a SuperPower</h4>
      <br/>
        <Link 
          id='nameGenBtn' 
          className="btn btn-raised btn-primary btn-sm mx-auto text-center" 
          to="/superpower">
          Generate Random SuperPower 
        </Link>
      <br/>
        <h5>
          Your Random SuperPower is...
        </h5>
        <br/>
        <h2 className="card bg-secondary">
          <br/>
          👉{generateSuperpower()}👈
          <br/>
        </h2>
        <br/>
       
      
    </div>
  );
}

export default Superpowers;