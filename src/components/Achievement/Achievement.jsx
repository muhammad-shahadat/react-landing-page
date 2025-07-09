import React from 'react';
import "../Achievement/Achievement.css";
import achievement from "../../assets/images/achievement.png";
import graduationCap1 from "../../assets/images/GraduationCap1.svg";
import videoCamera from "../../assets/images/VideoCamera.svg";


const Achievement = () => {
  return (
    <div className='w-full achievement-container'>
    
            <div className='max-w-[1480px] m-auto py-24 px-4 grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-[56px] text-5xl'>
                        Our <span className='text-[#20B486]'>Achievement</span>
                    </h1>
                    <p className='pt-4'>
                        Various versions have evolved over the years, sometimes by accident,
                    </p>
                    <div className='grid grid-cols-2 pt-20'>
                        <div className='flex gap-6'>
                            
                            <img src={graduationCap1} alt="" />
                            
                            <div>
                                <h2 className='font-semibold text-3xl text-black py-2'>300</h2>
                                <p className='text-[#6D737A] text-[20px]'>Instructor</p>
                            </div>
                        </div>
                        <div className='flex gap-6'>
                            
                            <img src={videoCamera} alt="" />
                            
                            <div>
                                <h2 className='font-semibold text-3xl text-black py-2'>10,000+</h2>
                                <p className='text-[20px] text-[#6D737A]'>Video</p>
                            </div>
                        </div>
                        <div className='flex pt-14 gap-6'>
                            
                            <img src={videoCamera} alt="" />
                            
                            <div>
                                <h2 className='font-semibold text-3xl text-black py-2'>10,000+</h2>
                                <p className='text-[20px] text-[#6D737A]'>Video</p>
                            </div>
                        </div>
                        <div className='flex pt-14 gap-6'>
                            
                            <img src={videoCamera} alt="" />
                            
                            <div>
                                <h2 className='font-semibold text-3xl text-black py-2'>10,000+</h2>
                                <p className='text-[20px] text-[#6D737A]'>Video</p>
                            </div>
                        </div>

                    </div>
    
                    
    
                </div>
                <div className='flex justify-end md:order-last order-first md:pb-0 pb-6'>
                    <img src={achievement} alt="#"/>
                </div>
    
            </div>
    
        </div>
  )
}

export default Achievement;