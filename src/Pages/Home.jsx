import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import FoodItem from '../components/FoodItem'
import Cart from '../components/Cart'
import Slider from '../components/Slider'
import Nonveg from './Nonveg'
import Footer from '../components/Footer'
import Popup from '../components/Popup'

const Home = () => {
  return (
    <div className=' text-white '>
      <Popup/>
      
      <Navbar />
      <Category />
      
      <Slider/>
      
      <FoodItem />
      <Cart />
      <Footer/>

    </div>
  )
}

export default Home
