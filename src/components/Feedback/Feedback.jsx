import React from 'react';
import Slider from "react-slick";
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import avatar1 from '../../assets/images/avatar1.png';
import avatar2 from '../../assets/images/avatar2.png';


const Feedback = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
    <div className='w-full bgw py-24'>

        <div className='md:max-w-[1480px] m-auto max-w-[600px] px-10'>

            <div className='flex flex-col justify-center gap-4'>
                <h1 className='text-4xl font-semibold text-[#06241B]'>Student <span className='text-[#20B486]'>Feedback</span></h1>
                <p className='text-[#6D737A] text-[20px]'>Various versions have evolved over the years, sometimes by accident,</p>
            </div>
            
          <Slider {...settings}>
            <FeedbackCard 
                name = "Jenny Wilson"
                image = {avatar1}
            />
            <FeedbackCard 
                name = "Guy Hawkins"
                image = {avatar2}
            />
          </Slider>

        </div>

        
    </div>
  )
}

export default Feedback;