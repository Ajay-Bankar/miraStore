import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [activeCart, setActiveCart] = useState(false);
    const cartItems = useSelector((state) => state.cart.cart);
    const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);
    const navigate = useNavigate();

    return (
        <div>
            <div className={`fixed right-0 top-0 w-full bg-gray-600 h-full p-5 text-white sm:w-[23vw] mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-700 z-50`}>
                <div className='overflow-y-scroll scrollbar-hidden overflow-hidden scroll-smooth sm:h-[450px] h-[350px]'>
                    <div className='flex justify-between items-center my-3'>
                        <span className='text-xl font-bold'>My Order</span>
                        <IoMdClose onClick={() => setActiveCart(!activeCart)} className='border-2 border-gray-400 text-gray-400 font-bold text-xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer' />
                    </div>
                    {cartItems.length > 0 ? cartItems.map((food) => {
                        return (
                            <ItemCart
                                key={food.id}
                                id={food.id}
                                name={food.name}
                                price={food.price}
                                img={food.img}
                                qty={food.qty}
                            />
                        );
                    }) : <h2 className='text-center font-bold text-xl'>Your Cart is empty</h2>}
                </div>
                <div className='absolute bottom-0 mb-5'>
                    <h3 className='font-semibold'>Item : {totalQty}</h3>
                    <h3 className='font-semibold'>Total Amount : {totalPrice} </h3>
                    <hr className='w-[85vw] sm:w-[18vw] my-2 classn' />
                    {cartItems.length > 0 && <button onClick={() => navigate("/success")} className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg sm:w-[18vw] w-[85vw]'>Checkout</button>}
                </div>
            </div>
            <FaShoppingCart onClick={() => setActiveCart(!activeCart)} className='rounded-full text-green-400 shadow-md text-5xl bg-white p-3 fixed bottom-4 right-4 animate-bounce cursor-pointer' />
        </div>
    )
}

export default Cart;
