import React from 'react';
import cta from '../../assets/images/ctaupdated.png';

const CTA = () => {
  return (
    <div className='w-full bg-[#E9F8F3B2] py-24'>
        <div className='max-w-[1480px] m-auto px-4'>
            <div className='grid md:grid-cols-2 items-center gap-28'>

                <img src={cta} alt="#" className=''/>

                <div className='flex flex-col gap-6 md:pt-28'>
                    <h1 className='text-4xl font-semibold text-[#06241B]'>Join <span className='text-[#20B486]'>World's largest</span> learning platform today</h1>
                    <h2 className='text-[#06241B] text-2xl pb-6'>Start learning by registering for free</h2>

                    <button className='text-[16px] text-white bg-[#20B486] py-3 px-6 rounded-lg md:w-[168px]'>Sign up for Free</button>

                </div>

            </div>

        </div>

    </div>
  )
}

export default CTA;