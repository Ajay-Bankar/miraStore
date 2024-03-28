import React from 'react'
import Navbar from '../components/Navbar'
import NonVegItem from '../components/nonvegcompo/NonVegItem'
import Footer from '../components/Footer'
import NonImageSlide from '../components/nonvegcompo/NonImageSlide'
import Cart from '../components/Cart'

const Nonveg = () => {
  return (
    <div className=' text-white'>
      <Navbar />
      <NonImageSlide />
      <div className=' mt-5 sm:mt-7 sm:*:text-4xl sm:*:font-bold text-center text-xl font-bold text-red-400 sm:*:text-red-600'><h1> Get Your Non-Veg On!
      </h1></div>


      <NonVegItem />
      <Cart/>
      <Footer />


    </div>
  )
}

export default Nonveg
