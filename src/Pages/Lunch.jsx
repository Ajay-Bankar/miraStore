import React from 'react'
import Navbar from '../components/Navbar'
import LunchItem from '../components/lunchcompo/LunchItem'
import Footer from '../components/Footer'
import Marq from '../components/Marq'

const Lunch = () => {
  return (
    <div className=' text-white'>
      <Navbar/>
      
      <LunchItem/>
      {/* <Marq/> */}
      <Footer/>
    </div>
  )
}

export default Lunch
