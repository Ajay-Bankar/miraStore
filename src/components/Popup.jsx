import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false); // Initially set to false

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true); // Set isOpen to true after 2 seconds
        }, 1000);

        return () => clearTimeout(timer); // Cleanup timer on unmount

    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    return isOpen ? (
        <div className="fixed inset-0 flex justify-center items-start pt-8 bg-gray-800 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-black">Welcome to our website!</h2>
               <input className=' flex justify-center border-2 border-black p-2 w-full placeholder-black text-red-800' type="text" placeholder='enter your email  ' />
               <div className=' flex justify-between'>
               <button onClick={closeModal} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
                Subscribe
                </button>
               
                <button onClick={closeModal} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
                    Close
                </button>
               </div>
              
            </div>
        </div>
    ) : null;
};

export default Popup;
