import React from 'react'

const Category = () => {
  return (
    <div className=' ml-4 '>
      <h3 className=' text-2xl font-bold mt-5 mx-6 '>Find the best food</h3>
      <div className=' flex mt-5 gap-5  overflow-x-scroll scroll-smooth lg:overflow-hidden  '>
        <button className=' sm:w-24 px-3 py-2 bg-gray-200 font-bold text-black hover:bg-green-700 hover:text-white cursor-pointer rounded-lg'>
            All
        </button>
        <button className='  sm:w-24 px-3 py-2 bg-gray-200 font-bold text-black hover:bg-green-700 hover:text-white  cursor-pointer rounded-lg'>
            Lunch
        </button>
        <button className=' sm:w-24 px-3 py-2 bg-gray-200 font-bold text-black hover:bg-green-700 hover:text-white  cursor-pointer rounded-lg'>
            Breakfast
        </button>
        <button className='  sm:w-24 px-3 py-2 bg-gray-200 font-bold text-black hover:bg-green-700 hover:text-white  cursor-pointer rounded-lg'>
            Veg
        </button>
        <button className='  sm:w-24 px-3 py-2 bg-gray-200 font-bold text-black hover:bg-green-700 hover:text-white  cursor-pointer rounded-lg'>
            Nonveg
        </button>
        <button className=' sm:w-24 px-3 py-2 bg-gray-200 font-bold text-black hover:bg-green-700 hover:text-white  cursor-pointer rounded-lg'>
            Dinner
        </button>

    
      </div>
    </div>
  )
}

export default Category
