import React from 'react';
import "./Companies.css";
import companyName1 from "../../assets/images/Frame (1).png";
import companyName2 from "../../assets/images/Frame (1).svg";
import companyName3 from "../../assets/images/Frame.png";
import companyName4 from "../../assets/images/Frame.svg";

const Companies = () => {
  return (
    <div className='w-full bg-white companies'>
      <div className="md:max-w[1480px] m-auto flex flex-col justify-center items-center gap-3 companies-container">
        <h1>Trusted by over 25,000 teams around the world.</h1>
        <p>Leading companies use the same courses to help employees keep their skills fresh.</p>
        <div className='flex items-center md:gap-12 justify-center py-2 companies-name'>

          <img src={companyName1} alt="#" />
          <img src={companyName2} alt="#" />
          <img src={companyName3} alt="#" />
          <img src={companyName4} alt="#" />

        </div>
      </div>
    </div>
  )
}

export default Companies;