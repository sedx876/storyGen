import React from 'react';
import storyStarters from '../data/storyStarters'
import {Link} from 'react-router-dom'

const generateStoryStarter = () => {
  const story = storyStarters[Math.floor(Math.random() * storyStarters.length)];
  return story
}

const StoryStarter = () => {
  return (
    <div 
      className="container card card-body bg-secondary text-center text-success border-success mb-3 mt-3">
      <h3>
        Start Your Story with a Random Idea
      </h3>
      <h4>Hit the 'Name Generator' Button to Generate a New Name</h4>
      <br/>
        <Link 
          id='nameGenBtn' 
          className="btn btn-raised btn-primary btn-sm mx-auto text-center" 
          to="/storystarter">
          Generate Story Starter
        </Link>
      <br/>
        <h5>
          Your New Story Starter is...
        </h5>
        <br/>
        <h2 className="card bg-secondary">
          <br/>
          👉{generateStoryStarter()}👈
          <br/>
        </h2>
        <br/>
       
      
    </div>
  );
}

export default StoryStarter;