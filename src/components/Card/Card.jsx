import React from 'react';
import "./Card.css";
import StarRatings from '../StarRatings/StarRatings';

const Card = (props) => {
  const {course} = props;
  return (
    <div className='bg-white rounded-xl overflow-hidden drop-shadow-md card'>
      <div className='p-4'>
        <img src={course.image} alt="#"
        className='h-48 w-full object-cover rounded-xl'
        style={{backgroundColor : course.bgColor}}
      />
      </div>

      <div className='flex flex-col gap-4 justify-center p-4 border-b'>
        <h2 className='truncate'>{course.title}</h2>
        <StarRatings ratings = {course.ratings}/>
        
      </div>
      <h4 className='p-4'>${course.price}</h4>

      <div className='absolute left-9 top-7 w-[72px] h-[36px] bg-gray-200 rounded flex items-center justify-center text-base text-[#1B1D1F]'>
        {course.category}
      </div>
      
    </div>
  )
}

export default Card;