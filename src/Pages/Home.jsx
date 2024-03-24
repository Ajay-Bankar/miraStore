import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import FoodItem from '../components/FoodItem'
import Cart from '../components/Cart'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div className=' text-white'>
      <Navbar />
      <Category />
      <Slider/>
      <FoodItem />
      <Cart />
    </div>
  )
}

export default Home
