import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const CategoriesCard = (props) => {
    const {category} = props;
    return (
        <div className='flex items-center justify-between border py-4 px-6 hover:border-[#20B486] hover:cursor-pointer rounded-lg drop-shadow bg-white categories-card'>
            <div className='flex items-center gap-4'>
                <img src={category.image} alt="" />
                <h2 className='text-[20px] text-black'>{category.category}</h2>
            </div>
            <div className='rounded-lg arrow-icon-area'>
                <GoArrowUpRight 
                    size={24}
                    style={{color:"#20B486"}}
                    className='arrow-icon'
                />
            </div>
        </div>
  )
}

export default CategoriesCard;