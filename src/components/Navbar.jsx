import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navData = [
    { title: "Home", linkTo: "" },
    { title: "Veg", linkTo: "/veg" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className=' w-full'>
            <nav className='flex flex-col lg:flex-row md:flex-row justify-between sm:px-5 sm:mt-5 mt-3 '>
                <div className='flex justify-center'>
                    <img className='sm:w-[130px] w-[100px] rounded-full sm:p-5 p-3 bg-red-800 border-2' src="/images/logo.png" alt="" />
                </div>

                <div className='flex justify-between px-2'>
                    <div className='sm:p-7 mt-5 p-0 ml-2'>
                        <input className='sm:w-[350px] sm:h-[50px] w-[250px]  h-[35px] rounded-lg outline-none' type="text" placeholder='Search Now' />
                    </div>

                    <div onClick={() => setOpen(!open)} className='mt-5 p-0 sm:hidden block '>
                        {open ? <i className="fa-solid fa-circle-xmark text-3xl mr-3"></i> : <i className="fa-solid fa-bars text-3xl mr-3"></i>}
                        {/* <div className=''>
                            <div className={`bg-red-800 text-white absolute left-0 right-0 ${open ? 'top-50' : '-top-full'} sm:relative`}>
                                <ul className={`flex flex-col sm:flex-row justify-center py-2 ${open ? "block" : "hidden sm:flex"}`}>
                                    {navData.map((item, i) => (
                                        <li key={i} onClick={() => setOpen(!open)} className="mx-3">
                                            <NavLink to={item.linkTo}>{item.title}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
