import React from 'react'
import Navbar from '../components/Navbar'
import LunchItem from '../components/lunchcompo/LunchItem'
import Footer from '../components/Footer'
import Marq from '../components/Marq'
import Cart from '../components/Cart'

const Lunch = () => {
  return (
    <div className=' text-white'>
      <Navbar/>
      
      <LunchItem/>
      {/* <Marq/> */}
      <Cart/>
      <Footer/>
    </div>
  )
}

export default Lunch
