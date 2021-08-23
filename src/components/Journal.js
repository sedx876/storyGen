import React from 'react';
import journals from '../data/journals'
import {Link} from 'react-router-dom'

const generateJournal = () => {
  const journal = journals[Math.floor(Math.random() * journals.length)];
  return journal
}

const Journal = () => {
  return (
    <div 
      className="container card card-body bg-secondary text-center text-success border-success mb-3 mt-3">
      <h3>
        Looking for a Random Ailment?
      </h3>
      <h4>Hit the 'Generate Random Journal Prompt' Button to Generate a Ailment</h4>
      <br/>
        <Link 
          id='nameGenBtn' 
          className="btn btn-raised btn-primary btn-sm mx-auto text-center" 
          to="/journal">
          Generate Random Journal Prompt 
        </Link>
      <br/>
        <h5>
          Your Random Ailment is...
        </h5>
        <br/>
        <h2 className="card bg-secondary">
          <br/>
          👉{generateJournal()}👈
          <br/>
        </h2>
        <br/>
       
      
    </div>
  );
}

export default Journal;