import React from 'react';
import phobias from '../data/phobias'
import {Link} from 'react-router-dom'

const generatePhobia = () => {
  const phobia = phobias[Math.floor(Math.random() * phobias.length)];
  return phobia
}

const Phobias = () => {
  return (
    <div 
      className="container card card-body bg-secondary text-center text-success border-success mb-3 mt-3">
      <h3>
        Looking for a Random Phobia?
      </h3>
      <h4>Hit the 'Generate Random Phobia' Button to Generate a Phobia</h4>
      <br/>
        <Link 
          id='nameGenBtn' 
          className="btn btn-raised btn-primary btn-sm mx-auto text-center" 
          to="/phobias">
          Generate Random Phobia 
        </Link>
      <br/>
        <h5>
          Your Random Phobia is...
        </h5>
        <br/>
        <h2 className="card bg-secondary">
          <br/>
          👉{generatePhobia()}👈
          <br/>
        </h2>
        <br/>
       
      
    </div>
  );
}

export default Phobias;