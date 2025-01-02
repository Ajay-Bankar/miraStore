import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { removeFromCart, increamentQty, decreamentQty } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const ItemCart = ({ id, name, img, price, qty }) => {
    const dispatch = useDispatch();

    const truncatedName = name.length > 7 ? `${name.slice(0, 7)}...` : name;

    return (
        <div className='flex items-center sm:gap-2  shadow-2xl rounded-lg py-2  relative overflow-hidden'>
            <MdDelete 
                onClick={() => {
                    dispatch(removeFromCart({ id, name, img, price, qty }));
                    toast(`${name} Removed !`, {
                        icon: <MdDelete className='text-2xl text-red-600' />,
                    });
                }} 
                className='absolute right-7 cursor-pointer' 
            />
            <img className='w-[50px] h-[50px] object-cover rounded-full' src={img} alt="" />
            <div className='flex flex-col ml-2'>
                <h2 className='font-bold' title={name}>{truncatedName}</h2>
                <div className='flex items-center justify-between gap-2 '>
                    <span className='text-green-500 font-bold'>₹{price}</span>
                    <div className='flex items-center gap-2 ml-auto'>
                        <AiOutlineMinus 
                            onClick={() => qty > 1 && dispatch(decreamentQty({ id }))} 
                            className='border-2 border-white text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' 
                        />
                        <span>{qty}</span>
                        <AiOutlinePlus 
                            onClick={() => dispatch(increamentQty({ id }))} 
                            className='border-2 border-white text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;