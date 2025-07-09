import React from 'react';
import "./Hero.css";
import magnifyingGlass from "../../assets/images/magnifyingGlass.svg"
import hero from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <div className='hero-container'>

        <div className='grid m-auto md:grid-cols-2 inner-hero-container'>
            <div className='flex flex-col justify-start gap-6'>
                <p className="upper-text">START TO SUCCESS</p>

                <h1 className='md:text-[56px] text-5xl'>
                    Access To <span>5000+</span> Courses from <span>300</span> Instructors & Institutions
                </h1>

                <p className='lower-text'>
                    Various versions have evolved over the years, sometimes by accident,
                        
                </p>
                <form className='flex items-center justify-between shadow-lg hero-form'>
                    <input type="text" placeholder='What do want to learn?'/>
                    <button>
                        <img src={magnifyingGlass} alt="#" />
                    </button>
                </form>

            </div>
            <img src={hero} alt="#" className='md:order-last order-first md:pb-0 pb-8' />

        </div>

    </div>
  )
}

export default Hero;