import React from 'react'
import '../CSS/slider.css'
import Slider from "react-slick";
const Sliderside = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
 return(
    <div className="featured-projects">
    <h2>Featured <span>Projects</span></h2>
    <div className="projects">
    <Slider {...settings}>
        {/* <div className="project">
            <img className='img1' src="../../public/assest/build1.png" alt="Project1" />
            <p>New High School</p>
        </div>
        <div className="project">
          <img className='img2' src="../../public/assest/build2.png" alt="Project2" />
          <p>Portside Hub</p>
        </div>
        <div className="project">
          <img className='img3' src="../../public/assest/build3.png" alt="Project3" />
          <p>Forest View Apartments</p>
        </div>
        <div className="project">
          <img className='img4' src="../../public/assest/build4.png" alt="Project4" />
          <p>Pen states hospital</p>
        </div> */}
        </Slider>
      {/* <div className="swiper-control">
       <div  className='swiper-button-prev slider-arrow '>
        <ion-icon className='arrow-back-outline'></ion-icon>
       </div>
       <div  className='swiper-button-next slider-arrow '>
        <ion-icon className='arrow-forward-outline'></ion-icon>
       </div>
       <div className="swiper-pagination"></div>
      </div> */}
    </div>
</div>
 )
}

export default Sliderside
