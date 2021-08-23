import React from 'react';
import ailments from '../data/ailments'
import {Link} from 'react-router-dom'

const generateAilment = () => {
  const ailment = ailments[Math.floor(Math.random() * ailments.length)];
  return ailment
}

const Ailments = () => {
  return (
    <div 
      className="container card card-body bg-secondary text-center text-success border-success mb-3 mt-3">
      <h3>
        Looking for a Random Ailment?
      </h3>
      <h4>Hit the 'Generate Random Ailment' Button to Generate a Ailment</h4>
      <br/>
        <Link 
          id='nameGenBtn' 
          className="btn btn-raised btn-primary btn-sm mx-auto text-center" 
          to="/ailments">
          Generate Random Ailment 
        </Link>
      <br/>
        <h5>
          Your Random Ailment is...
        </h5>
        <br/>
        <h2 className="card bg-secondary">
          <br/>
          👉{generateAilment()}👈
          <br/>
        </h2>
        <br/>
       
      
    </div>
  );
}

export default Ailments;