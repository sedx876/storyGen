import React from 'react';
import places from '../data/places'
import {Link} from 'react-router-dom'

const generatePlace = () => {
  const place = places[Math.floor(Math.random() * places.length)];
  return place
}

const Places = () => {
  return (
    <div 
      className="container card card-body bg-secondary text-center text-success border-success mb-3 mt-3">
      <h3>
        Looking for a Random Place?
      </h3>
      <h4>Hit the 'Generate Random Place' Button to Generate a Place</h4>
      <br/>
        <Link 
          id='nameGenBtn' 
          className="btn btn-raised btn-primary btn-sm mx-auto text-center" 
          to="/places">
          Generate Random Place 
        </Link>
      <br/>
        <h5>
          Your Random Place is...
        </h5>
        <br/>
        <h2 className="card bg-secondary">
          <br/>
          👉{generatePlace()}👈
          <br/>
        </h2>
        <br/>
       
      
    </div>
  );
}

export default Places;