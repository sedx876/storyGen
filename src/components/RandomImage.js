import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



function RandomImage(){
  

  return(
    <div className="container card card-body bg-secondary text-center text-success border-success mb-3 mt-3">
     
     <Link 
          id='nameGenBtn' 
          className="btn btn-raised btn-primary btn-sm mx-auto text-center" 
          to="/ranimg">
          Generate Random Image 
        </Link> 
        <img 
      src="https://source.unsplash.com/random/800x600"
      alt="new"
      />
      
    </div>

    
  )

}

export default RandomImage