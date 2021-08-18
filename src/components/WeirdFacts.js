import React from 'react';
import weirdFacts from '../data/weirdFacts'
import {Link} from 'react-router-dom'

const generateWeirdFacts = () => {
  const facts = weirdFacts[Math.floor(Math.random() * weirdFacts.length)];
  return facts
}

const WeirdFacts = () => {
  return (
    <div 
      className="container card card-body bg-secondary text-center text-success border-success mb-3 mt-3">
      <h3>
        Here are some weird and random facts to get the creative juices flowing.
      </h3>
      <h4>Hit the 'Generate Weird Fact' Button to Generate a Fandom</h4>
      <br/>
        <Link 
          id='nameGenBtn' 
          className="btn btn-raised btn-primary btn-sm mx-auto text-center" 
          to="/weirdfacts">
          Generate Weird Fact 
        </Link>
      <br/>
        <h5>
          Your Weird Fact is...
        </h5>
        <br/>
        <h2 className="card bg-secondary">
          <br/>
          👉{generateWeirdFacts()}👈
          <br/>
        </h2>
        <br/>
       
      
    </div>
  );
}

export default WeirdFacts;