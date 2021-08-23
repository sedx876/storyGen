import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import story from '../images/story.png'

const Navbar = () =>{

  return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary text-primary">
  <div class="container-fluid">
    <Link class="navbar-brand text-primary" to='/'>
      <img src={story} style={{width: '50px', height: '50px'}}/>
      storyGen
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        
        <li class="nav-item">
        <Link 
          id='' 
          className="text-primary" 
          to="/firstnamegen">
          First Name
        </Link>
        </li>

        ⭐️

        <li class="nav-item">
          <Link 
          id='' 
          className="text-primary" 
          to="/storystarter">
          Story Starter
        </Link>
        </li>

        ⭐️

        <li class="nav-item">
        <Link 
          id='' 
          className="text-primary" 
          to="/musicinspo">
          Music Inspiration
        </Link>
        </li>

        ⭐️

        <li class="nav-item">
        <Link 
          id='' 
          className="text-primary" 
          to="/ficchar">
          Fictional Characters
        </Link>
        </li>

        ⭐️

        <li class="nav-item">
        <Link 
          id='' 
          className="text-primary" 
          to="/fandoms">
          Fandoms
        </Link>
        </li>

        ⭐️

        <li class="nav-item">
        <Link 
          id='' 
          className="text-primary" 
          to="/ranimg">
          Random Image
        </Link>
        </li>

        ⭐️

        <li class="nav-item">
        <Link 
          id='' 
          className="text-primary" 
          to="/superpower">
          Random SuperPowers
        </Link>
        </li>

        ⭐️

        <li class="nav-item">
        <Link 
          id='' 
          className="text-primary" 
          to="/weirdfacts">
          Weird Facts
        </Link>
        </li>

        ⭐️

        <li class="nav-item">
        <Link 
          id='' 
          className="text-primary" 
          to="/phobias">
          Phobias
        </Link>
        </li>

        


        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar