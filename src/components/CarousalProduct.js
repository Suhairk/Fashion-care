import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeaderImages  from '../constents/HeaderImages'
import '../components/compStyles/CarousalProduct.css'

function CarousalProduct() {
  return (
    <div className='carousel-main'>
        <div className='carousel'>
        <Carousel
        autoPlay={true}
        showStatus = {false}
        showThumbs = {false} 
        showIndicators= {false} 
        infiniteLoop={true} 
        interval="5000"
       >
            <div>
            <img src={HeaderImages.C5} alt="image1"></img>
            </div>
            <div>
            <img src={HeaderImages.C3} alt="image2"></img>
            </div>
            <div>
            <img src={HeaderImages.C4} alt="image3"></img>
            </div>
        </Carousel>
        </div>
        
    </div>
  )
}

export default CarousalProduct