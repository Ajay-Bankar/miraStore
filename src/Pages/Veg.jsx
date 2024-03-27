import React from 'react'
import Navbar from '../components/Navbar'
import VegCard from '../components/vegcompo/VegCard'
import VegItem from '../components/vegcompo/VegItem'
import Slider from '../components/Slider'
import FoodItem from '../components/FoodItem'
import Footer from '../components/Footer'


const Veg = () => {
  return (
    <div className=' text-white'>
      <Navbar/>
      <Slider/>
      
      

      <div className=' mt-2 sm:mt-7 sm:*:text-4xl sm:*:font-bold text-center text-xl font-bold text-red-400 sm:*:text-red-600 animate-pulse'><h1>Peace Begins on Your Plate.</h1></div>

      
      
      <VegItem/>
      <Footer/>
      
    
      
      
    
      
    </div>
  )
}

export default Veg;
