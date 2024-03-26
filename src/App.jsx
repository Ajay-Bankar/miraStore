import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Success from './Pages/Success'
import Error from './Pages/Error'
import All from './Pages/All'
import Veg from './Pages/Veg'
import Lunch from './Pages/Lunch'
import Breakfast from './Pages/Breakfast'
import Nonveg from './Pages/Nonveg'

const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        
        <Route path='/' element = {<Home />} />
        <Route path='success' element = {<Success />} />
        <Route path='all' element = {<All />} /> 
        <Route path='veg' element = {<Veg />} />
        <Route path='lunch' element ={ <Lunch/>} />
        <Route path='breakfast' element={ <Breakfast/>} />
        <Route path='nonveg' element={ <Nonveg/>} />

        <Route path='*' element = {<Error/>} />
      
        
       </Routes>
       
       
       </BrowserRouter>
    
    </div>
  )
}

export default App
