import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';

const Navbar = () => {
    const [openLoginForm, setOpenLoginForm] = useState(false);
    const dispatch = useDispatch();

    const toggleLoginForm = () => {
        setOpenLoginForm(!openLoginForm);
    };

    const closeLoginForm = () => {
        setOpenLoginForm(false);
    };

    return (
        <div className='w-full'>
            <nav className='flex flex-col lg:flex-row md:flex-row justify-between sm:px-5 sm:mt-5 mt-3'>
                <div className='flex justify-center'>
                    <img className='sm:w-[130px] sm:h-[130px] sm:rounded-full w-[100px] h-[100px] rounded-full sm:p-5 p-3 bg-red-800 border-2' src="images/logo3.png" alt="" />
                </div>

                <div className='flex justify-between px-2'>
                    <div className='sm:p-7 mt-5 p-0 ml-2'>
                        <input onChange={(e) => dispatch(setSearch(e.target.value))} className='sm:w-[350px] sm:h-[50px] w-[250px] h-[35px] rounded-lg outline-none text-black' type="text" placeholder='Search Now' />
                    </div>

                    <div className="mt-5 px-2 sm:mt-12">
                        <button onClick={toggleLoginForm} className="sm:text-2xl text-sm font-bold sm:border-2 p-1">
                            LOGIN
                        </button>
                    </div>
                </div>

               
            </nav>

            {/* Popup Login Form */}
            {openLoginForm && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 transition-all duration-1000">
                    <div className="bg-white text-black p-8 rounded-lg shadow-lg">
                        <div className="flex justify-end">
                            <button onClick={closeLoginForm}>
                                <i className="fa-solid fa-xmark text-2xl"></i>
                            </button>
                        </div>
                        <h2 className="text-2xl mb-4">Login Form</h2>
                        <div className='flex flex-col gap-5 items-center'>
                            <label>Username<input type="text" placeholder='Enter Username' /></label>
                            <label>Password<input type="text" placeholder='Enter Password' /></label>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;
