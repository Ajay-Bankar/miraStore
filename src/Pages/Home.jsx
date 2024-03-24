import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import FoodItem from '../components/FoodItem'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <div className=' text-white'>
      <Navbar />
      <Category />
      <FoodItem />
      <Cart />
    </div>
  )
}

export default Home
