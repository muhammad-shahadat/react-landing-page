import React from 'react';
import practiceLogo from '../../assets/images/Practice.svg';
import { FaFacebookF, FaDribbble, FaLinkedinIn, FaInstagram, FaBehance  } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='max-w-[1480px] m-auto px-4'>
            <div className='grid md:grid-cols-5 max-[768px]:grid-cols-2 gap-8'>

                <div className='col-span-2'>
                    <img src={practiceLogo} alt="#" />
                    <h2 className='text-[#1B1D1F] text-2xl pt-6 font-semibold'>Contact Us</h2>
                    <h3 className='text-[16px] text-[#6D737A] pt-4 pb-2'>Call : +123 400 123</h3>
                    <h3 className='text-[16px] text-[#6D737A]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in, feugiat auctor felis.</h3>
                    <h3 className='text-[16px] text-[#6D737A] py-4'>Email: example@mail.com</h3>

                    <div className='flex items-center gap-4 py-4'>
                        <div className='p-[14px] bg-[#E9F8F3] rounded-lg'>
                            <FaFacebookF 
                                size={25}
                                style={{color:'#4DC39E'}}
                            />

                        </div>
                        <div className='p-[14px] bg-[#E9F8F3] rounded-lg'>
                            <FaDribbble 
                                size={25}
                                style={{color:'#4DC39E'}}
                            />

                        </div>
                        <div className='p-[14px] bg-[#E9F8F3] rounded-lg'>
                            <FaLinkedinIn  
                                size={25}
                                style={{color:'#4DC39E'}}
                            />

                        </div>
                        <div className='p-[14px] bg-[#E9F8F3] rounded-lg'>
                            <FaInstagram 
                                size={25}
                                style={{color:'#4DC39E'}}
                            />

                        </div>
                        <div className='p-[14px] bg-[#E9F8F3] rounded-lg'>
                            <FaBehance 
                                size={25}
                                style={{color:'#4DC39E'}}
                            />

                        </div>
                    </div>
                    
                </div>

                <div className='flex flex-col gap-8'>
                    <h2 className='text-[#1B1D1F] text-2xl font-semibold'>Explore</h2>

                    <ul className='text-[16px] text-[#6D737A] flex flex-col gap-4'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Course</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    
                </div>

                <div className='flex flex-col gap-8'>
                    <h2 className='text-[#1B1D1F] text-2xl font-semibold'>Category</h2>

                    <ul className='text-[16px] text-[#6D737A] flex flex-col gap-4'>
                        <li>Design</li>
                        <li>Development</li>
                        <li>Marketing</li>
                        <li>Business</li>
                        <li>Lifestyle</li>
                        <li>Photography</li>
                        <li>Music</li>

                    </ul>
                    
                </div>

                <div className='flex flex-col gap-8 max-[768px]:col-span-2'>
                    <h2 className='text-[#1B1D1F] text-2xl font-semibold'>Subscribe</h2>
                    <h3 className='text-[16px] text-[#6D737A]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in, feugiat auctor felis.</h3>

                    <div>
                        <form action="#" className='pb-6'>
                            <input type="text"
                                placeholder='Email here'
                                className='bg-[#F2F3F4] text-[16px] p-4 rounded-lg text-[#6D737A] w-full'

                            />
                        </form>

                        <button className='text-[16px] text-white bg-[#20B486] py-3 px-6 rounded-lg w-full md:w-[161px]'>Subscribe Now</button>
                    </div>

                    
                    
                </div>


            </div>

        </div>

    </div>
  )
}

export default Footer;