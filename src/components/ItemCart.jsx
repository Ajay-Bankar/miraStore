import React from 'react'

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { removeFromCart , increamentQty, decreamentQty } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';


import { useDispatch } from 'react-redux';

const ItemCart = ({ id, name, img, price, qty, }) => {


    const dispatch = useDispatch();

    return (

        <div className=' sm:flex sm:gap-2 shadow-2xl rounded-lg p-2  '>
            <MdDelete onClick={() => {
                dispatch(removeFromCart({ id, name, img, price, qty }));
                toast(`${name} Removed !`, {
                    icon: '👏',
                  });
            }} className='absolute right-7 cursor-pointer' />
            <img className=' w-[50px] h-[50px] object-cover' src={img} alt="" />
            <div className=' leading-5'>
                <h2 className=' font-bold'>{name}</h2>
                <div className=' flex justify-between'>
                    <span className=' text-green-500 font-bold'>₹{price}</span>
                    <div className=' flex justify-center items-center gap-2 absolute right-7'>
                        <AiOutlineMinus onClick={() => qty > 1 ? dispatch(decreamentQty({id})) : (qty=0)} className=' border-2 border-white text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />

                        <span>{qty}</span>
                        <AiOutlinePlus onClick={() => qty > 1 ? dispatch(increamentQty({id})) : (qty=0)} className=' border-2 border-white text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ItemCart
