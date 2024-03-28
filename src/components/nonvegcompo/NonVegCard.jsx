import React from 'react'

import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/CartSlice';

const NonVegCard = ({id,name, price, desc, rating, img, handleToast}) => {

  const dispatch = useDispatch();

  return (
   

    <div className=' sm:w-[250px] w-[150px] p-0    sm:p-8 shadow-2xl shadow-black rounded-lg  mt-8 '>
      
      <img className=' sm:w-[200px] sm:h-[200px] w-[100px] h-[100px] ml-6 sm:ml-0 object-cover hover:scale-105 duration-700 rounded-xl  cursor-pointer ' src={img} alt="" />

      <div className=' flex justify-between mt-2 mb-2 text-sm'>
        <h2 className=' font-bold'>{name}</h2>
        <span className=' text-green-500'>₹ {price}</span>
      </div>
      <p className=' text-sm font-normal sm:block hidden'>{desc.slice(1, 50)}</p>

      <div className=' flex justify-between'>
        <span className=' flex justify-center items-center'>
        <FaStar className='mr-1 text-yellow-500' /> {rating}
        </span>
        
        <button onClick={()=>{dispatch(addToCart({id, name, price, rating, img,handleToast, qty: 1}));
        handleToast(name);

      }} className=' p-1 text-white bg-green-500 hover:bg-green-700 rounded-lg text-sm'>Add to cart</button>

        
      </div>

    </div>
    
  )
}

export default NonVegCard

