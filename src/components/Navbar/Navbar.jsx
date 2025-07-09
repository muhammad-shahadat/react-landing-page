import React, { useState } from 'react'
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import  lockIcon from "../../assets/images/Lock.svg"
import practiceIcon from "../../assets/images/Practice.svg";

const Navbar = () => {

    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => {

        setIsToggle(!isToggle);
    }

  return (
    <div className='navbar-container'>
        <div className="inner-container">

            <img src={practiceIcon} alt="#" />
            <nav className='hidden md:block'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Course</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div className="hidden md:flex btn-group ">
                
                <button className='login-btn flex'>
                    <img src={lockIcon} alt="#" />Login

                </button>
                <button className='signup-btn'>Sign up for Free</button>
            </div>

            <div className="md:hidden" onClick={handleToggle}>

                {
                    isToggle ? <IoMdClose className='close-icon'/> : <RxHamburgerMenu className='hamburger-icon' />
                }

            </div>
            


        </div>

        <div className="sidebar-container">
            <nav className={isToggle ? "z-10 p-4 absolute px-8 w-full  md:hidden" : "hidden"}>
                <ul>
                    <li className='p-4 hover:bg-gray-200 rounded'>Home</li>
                    <li className='p-4 hover:bg-gray-200 rounded'>About</li>
                    <li className='p-4 hover:bg-gray-200 rounded'>Course</li>
                    <li className='p-4 hover:bg-gray-200 rounded'>Blog</li>
                    <li className='p-4 hover:bg-gray-200 rounded'>Contact</li>
                    <div className='flex flex-col w-full my-4 gap-4'>
                        <button className='login-btn flex justify-center border border-[#20B486]'>
                            <img src={lockIcon} alt="#" />Login

                        </button>
                        <button className='signup-btn'>Sign up for Free</button>
                    </div>    
                </ul>

            </nav>
        </div>       

    </div>
  )
}

export default Navbar