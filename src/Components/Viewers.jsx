 
import React from 'react'
import img1 from '../images/viewers-disney.png'
import img2 from '../images/viewers-marvel.png'
import img3 from '../images/viewers-national.png'
import img4 from '../images/viewers-pixar.png'
import img5  from '../images/viewers-starwars.png'

import vid1 from '../images/1564674844-disney.mp4'
import vid2 from '../images/1564676115-marvel.mp4'
import vid3 from '../images/1564676296-national-geographic.mp4'
import vid4 from '../images/1564676714-pixar.mp4'
import vid5 from '../images/1608229455-star-wars.mp4'

function Viewers() {
  const videoStyle =`
  w-full 
  h-full 
  absolute
  top-0
  z-0 
  opacity-0
  hover:opacity-100
  transition-all
  duration-500
  hover:scale-110
  hover:border-2
  hover:border-white
  rounded-md
`




  const imgStyle = `
  w-full 
 z-1
  `

  const boxStyles = `
  relative
  shadow-lg
  cursor-pointer
  mx-5
  rounded-lg
  border-[1px]
  border-[rgba(249,249,249,0.1)]
  mt-5
  mb-2
  `
 
  return (
    <div className='grid grid-cols-none lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-10 overflow-hidden'>
      <div className={boxStyles}>
        <img className={imgStyle} src={img1} alt="" />
        <video src={vid1} autoPlay={true} loop={true} playsInline={true} className={videoStyle}></video>
        </div>
      <div className={boxStyles}>
        <img className={imgStyle} src={img2} alt="" />
        <video src={vid2} autoPlay={true} loop={true} playsInline={true} className={videoStyle} ></video>
      </div>

      <div className={boxStyles}>
        <img className={imgStyle} src={img3} alt="" />
        <video src={vid3} autoPlay={true} loop={true} playsInline={true} className={videoStyle} ></video>
        </div>

      <div className={boxStyles}>
        <img className={imgStyle} src={img4} alt="" />
        <video src={vid4} autoPlay={true} loop={true} playsInline={true} className={videoStyle} ></video>
      </div>

      <div className={boxStyles}>
        <img className={imgStyle} src={img5} alt="" />
        <video src={vid5} autoPlay={true} loop={true} playsInline={true} className={videoStyle} ></video>
        </div>
    </div>
  )
}

export default Viewers
