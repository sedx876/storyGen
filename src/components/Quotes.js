import React from 'react';
import quotes from '../data/quotes'
import {Link} from 'react-router-dom'

const generateQuote = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote
}

const Quotes = () => {
  return (
    <div 
      className="container card card-body bg-secondary text-center text-success border-success mb-3 mt-3">
      <h3>
        Looking for a Random Quote?
      </h3>
      <h4>Hit the 'Generate Random Quote' Button to Generate a Quote</h4>
      <br/>
        <Link 
          id='nameGenBtn' 
          className="btn btn-raised btn-primary btn-sm mx-auto text-center" 
          to="/quotes">
          Generate Random Quote 
        </Link>
      <br/>
        <h5>
          Your Random Quote is...
        </h5>
        <br/>
        <h2 className="card bg-secondary">
          <br/>
          👉{generateQuote()}👈
          <br/>
        </h2>
        <br/>
       
      
    </div>
  );
}

export default Quotes;