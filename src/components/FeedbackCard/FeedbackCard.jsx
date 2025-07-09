import React from 'react';
import vector from '../../assets/images/Vector.svg';

const FeedbackCard = ({name, image}) => {
  return (
    <div className='bg-white shadow-lg p-8 rounded-[30px] my-12 mx-3'>
        <div className='flex flex-col justify-center items-center gap-4 sm:flex-row sm:items-start sm:justify-between'>
            <div className='flex items-center gap-3'>
                <img src={image} alt="#" />
                <div className='flex flex-col justify-center gap-2'>
                    <h1 className='text-black text-2xl font-semibold'>{name}</h1>
                    <p className='text-[16px] text-black'>UI-UX Designer</p>
                </div>
            </div>
            
            <img src={vector} alt="#" className='w-11 h-[33.7px]' />
            
        </div>
        <div className='flex flex-col justify-center pt-6 gap-4 text-[#363A3D] text-[16px]'>
            <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
            <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.</p>
        </div>

    </div>
  )
}

export default FeedbackCard;