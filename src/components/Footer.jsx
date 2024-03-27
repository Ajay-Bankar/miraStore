import React from 'react';
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=' bg-gray-600 mt-3 '>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <div className='flex justify-center'>
                                <img className='sm:w-[80px] w-[100px] h-[100px] rounded-full sm:p-3 p-3 bg-red-800 border-2' src="/images/logo3.png" alt="" />
                            </div>
                            <span className="ml-3 text-xl">MiraFoods</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-200">It's time to new something</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-200 hover:text-white ">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-200 hover:text-white ">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-200 hover:text-white ">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-200 hover:text-white ">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-200 hover:text-white ">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-200 hover:text-white ">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-200 hover:text-white ">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-200 hover:text-white ">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-200 hover:text-white ">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-200 hover:text-white ">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-200 hover:text-white ">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-200 hover:text-white ">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white  tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-200 hover:text-white ">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-200 hover:text-white ">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-200 hover:text-white ">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-200 hover:text-white ">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                    <div className=' text-black text-3xl flex justify-center gap-8 mt-4'>
                        <FaWhatsappSquare className=' text-gray-300 bg-slate-800 ' />
                        <FaFacebookSquare className=' text-gray-300 bg-slate-800 ' />
                        <FaTwitterSquare  className=' text-gray-300 bg-slate-800 '/>
                        <FaInstagramSquare className=' text-gray-300 bg-slate-800 '/>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
