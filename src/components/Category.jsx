import React, { useEffect, useState } from 'react'
import FoodData from '../components/FoodData'

import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';

const Category = () => {

    const [categories, setCategories] = useState([]);

    const listUniqueCategories = () => {
        const UniqueCategories = [...new Set(FoodData.map((food) => food.category)) ];
           setCategories(UniqueCategories); 
        //    console.log(UniqueCategories);
       
    };

    useEffect(() => {

        listUniqueCategories();
     
    }, [])

    const dispatch = useDispatch();
    const selectCategory = useSelector((state) => state.category.category);
    


  return (
    <div className=' ml-4 '>
      <h3 className=' text-2xl font-bold mt-5 mx-6 '>Find the best food</h3>
        <div className=' flex mt-5 gap-5  overflow-x-scroll scroll-smooth lg:overflow-hidden scrollbar-hidden '>

        <button onClick={() => dispatch(setCategory("All"))}
                 className={` sm:w-24 px-3 py-2 bg-gray-200 font-bold text-black hover:bg-green-700 hover:text-white cursor-pointer rounded-lg ${selectCategory === "All" && "bg-green-500 text-white "}`}>
                All
            </button>

       
        
        {categories.map((category, index) => {

            return(

                <button onClick={() => dispatch(setCategory(category))}
                key={index} className={` sm:w-24 px-3 py-2 bg-gray-200 font-bold text-black hover:bg-green-700 hover:text-white cursor-pointer rounded-lg ${selectCategory === category && "bg-green-500 text-white"}`}>
                {category}
            </button>

            )
        })}

     
       </div>  
    </div>
  )
}

export default Category
{/* <button className=' sm:w-24 px-3 py-2 bg-gray-200 font-bold text-black hover:bg-green-700 hover:text-white  cursor-pointer rounded-lg'>
Dinner
</button> */}