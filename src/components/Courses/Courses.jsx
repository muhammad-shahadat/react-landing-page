import React from 'react';
import "./Courses.css";
import Card from '../Card/Card';
import Slider from "react-slick";
import { courses } from '../../data/courses';

const Courses = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    
  };

  


  return (
    <div className='w-full bg-[#E9F8F3B2] py-24'>

        <div className='md:max-w-[1480px] m-auto max-w-[600px] px-10 courses'>

          <div className='flex flex-col justify-center gap-4'>
            <h1>Most Popular <span>Courses</span></h1>
            <p>Various versions have evolved over the years, sometimes by accident,</p>
          </div>
            
          <Slider {...settings}>
            {
              courses.map((course) => <Card key={course.id} course = {course} />)
            }

          </Slider>

        </div>

        
    </div>
  )
}

export default Courses;