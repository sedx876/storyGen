import React from 'react'

export const UnsplashImage = ({ url, key }) => {
  return (
    <>
      <img style={{width: '300px', height: '300px'}} key={key} src={url} alt="" />
    </>
  )
}