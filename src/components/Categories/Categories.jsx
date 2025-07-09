import React from 'react';
import "../Categories/Categories.css";
import CategoriesCard from '../CategoriesCard/CategoriesCard';
import { categories } from '../../data/categories';



const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7]'>
        <div className='max-w-[1480px] py-24 px-4 m-auto flex flex-col gap-12'>
            <div className='flex flex-col justify-start gap-4'>
                <h1 className='text-4xl text-[#06241B] font-semibold'>Most Popular <span className='text-[#20B486]'>Categories</span></h1>
                <p className='text-[20px] text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident,</p>
            </div>

            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                
               {
                categories.map((category) => <CategoriesCard key={category.id} category = {category} />)
               }

            </div>

        </div>

    </div>
  )
}

export default Categories;