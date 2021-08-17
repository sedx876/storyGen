import React from 'react';
import fandoms from '../data/fandoms'
import {Link} from 'react-router-dom'

const generateFandom = () => {
  const fandom = fandoms[Math.floor(Math.random() * fandoms.length)];
  return fandom
}

const Fandoms = () => {
  return (
    <div 
      className="container card card-body bg-secondary text-center text-success border-success mb-3 mt-3">
      <h3>
        Looking for a Random Fandom?
      </h3>
      <h4>Hit the 'Generate Random Fandom' Button to Generate a Fandom</h4>
      <br/>
        <Link 
          id='nameGenBtn' 
          className="btn btn-raised btn-primary btn-sm mx-auto text-center" 
          to="/fandoms">
          Generate Random Fandom 
        </Link>
      <br/>
        <h5>
          Your Random Fandom is...
        </h5>
        <br/>
        <h2 className="card bg-secondary">
          <br/>
          👉{generateFandom()}👈
          <br/>
        </h2>
        <br/>
       
      
    </div>
  );
}

export default Fandoms;