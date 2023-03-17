import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import './ImgSlider.css'
import img1 from '../images/slider-badag.jpg'
import img2 from '../images/slider-badging.jpg'
import img3 from '../images/slider-scales.jpg'
import img4 from '../images/slider-scale.jpg'




function ImgSlider() {
    let settings =
    {
        dots: true,
        infinte: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,

    }

    return (

        <Slider {...settings} className='slider'>
            <div>
                <img className=' cursor-pointer rounded-md shadow-lg shadow-transparent hover:border-2 hover:border-white transition duration-400 ease-in-out' src={img1} alt="" />
            </div>
            <div>
                <img className=' cursor-pointer rounded-md shadow-lg shadow-transparent hover:border-2 hover:border-white transition duration-400 ease-in-out' src={img2} alt="" />
            </div>
            <div>
                <img className=' cursor-pointer rounded-md shadow-lg shadow-transparent hover:border-2 hover:border-white transition duration-400 ease-in-out' src={img3} alt="" />
            </div>
            <div>
                <img className=' cursor-pointer rounded-md shadow-lg shadow-transparent hover:border-2 hover:border-white transition duration-400 ease-in-out' src={img4} alt="" />
            </div>
        </Slider>

    )
}

export default ImgSlider
