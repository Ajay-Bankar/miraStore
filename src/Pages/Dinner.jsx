import React from 'react'
import Navbar from '../components/Navbar'
import DinnerItem from '../components/dinnercompo/DinnerItem'
import Footer from '../components/Footer'

const Dinner = () => {
  return (
    <div className=' text-white'>
      <Navbar/>
      <div className=' mt-2 sm:mt-7 sm:*:text-4xl sm:*:font-bold text-center text-xl font-bold text-red-400 sm:*:text-red-600 animate-pulse'><h1>A healthy diet can make you happy!</h1></div>

   
      <DinnerItem/>
      <Footer/>
       
      
    </div>
  )
}

export default Dinner
