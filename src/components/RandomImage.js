import React, { useState, useEffect } from 'react'
import { UnsplashImage } from './UnsplashImage'
import axios from 'axios'
import {Link} from 'react-router-dom'

const generateImage = () => {
  const ranImg = `https://source.unsplash.com/random/800x600`
  const image = ranImg[Math.floor(Math.random() * ranImg.length)];
  return image
}

function RandomImage(){
  const [images, setImage] = useState([])

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = (count = 1) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        setImage([...images, ...res.data]);
      })
  }

  return(
    <div className="container card card-body bg-secondary text-center text-success border-success mb-3 mt-3">
     {/* <button onClick={fetchImages}>Image</button> */}
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
      {/* {generateImage()} */}
        {/* {images.map(image => (
            <UnsplashImage url={image.urls.thumb} key={image.id} />
          ))} */}
    </div>

    
  )

}

export default RandomImage