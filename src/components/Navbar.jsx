import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CurrtDateTime from './CurrDateTime';

const navData = [
    { title: "Home", linkTo: "" },
    { title: "Veg", linkTo: "veg" },
    { title: "Nonveg", linkTo: "nonveg"},
    { title: "Lunch", linkTo: "lunch"},
    { title: "Dinner", linkTo: "dinner"}
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className=' w-full'>
            <nav className='flex flex-col lg:flex-row md:flex-row justify-between sm:px-5 sm:mt-5 mt-3 '>
                <div className='flex justify-center'>
                    <img className='sm:w-[130px] w-[100px] rounded-full sm:p-5 p-3 bg-red-800 border-2' src="/images/logo.png" alt="" />
                </div>
                {/* <CurrtDateTime/> */}

                <div className='flex justify-between px-2'>
                    <div className='sm:p-7 mt-5 p-0 ml-2 '>
                        <input className='sm:w-[350px] sm:h-[50px] w-[250px]  h-[35px] rounded-lg outline-none text-black'  type="text" placeholder='Search Now' />
                    </div>

                    <div onClick={() => setOpen(!open)} className='mt-5 p-0 sm:hidden block '>
                        {open ? <i className="fa-solid fa-circle-xmark text-3xl mr-3">
                            
                        </i> : <i className="fa-solid fa-bars text-3xl mr-3"></i>}
                    </div>
                </div>
            </nav>

            {/* Navigation Links */}
            <div className=" ml-5  flex justify-start sm:justify-start mt-3 text-w overflow-x-scroll scroll-smooth lg:overflow-hidden scrollbar-hidden">
                {navData.map((item, index) => (
                    <NavLink
                        key={index}
                        to={`/${item.linkTo}`}
                        activeClassName="text-blue-500" // Add your active class here
                        className="mr-3 sm:mr-5 text-black w-28  font-bold  text-sm sm:text-xl sm:p-3 p-1 bg-white  rounded-md  text-center hover:bg-green-800 hover:text-white transition-colors duration-300 "
                        style={{ border: (item.title === "Home" || item.title === "Veg" || item.title === "Nonveg" || item.title === "Lunch" || item.title === "Breakfast") ? "1px solid black" : "none" }}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default Navbar;
