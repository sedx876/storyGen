import React from 'react';
import musicInspo from '../data/musicInspo'
import {Link} from 'react-router-dom'

const generateMusicInspo = () => {
  const music = musicInspo[Math.floor(Math.random() * musicInspo.length)];
  return music
}

const MusicInspo = () => {
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
          to="/musicinspo">
          Generate Random Song 
        </Link>
      <br/>
        <h5>
          Your New Story Starter is...
        </h5>
        <br/>
        <h2 className="card bg-secondary">
          <br/>
          👉{generateMusicInspo()}👈
          <br/>
        </h2>
        <br/>
       
      
    </div>
  );
}

export default MusicInspo;