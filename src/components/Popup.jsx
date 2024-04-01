import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs library
import ReactDOM from 'react-dom';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.send('<service_nwkb8rt>', '<template_9gs95rg>', { email })
            .then((response) => {
                console.log('Email sent successfully!', response);
                // Show success message or perform other actions as needed
                alert('Thank you for subscribing!');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                // Show error message or perform other actions as needed
                alert('Failed to subscribe. Please try again later.');
            });

        setEmail('');
        closeModal();
    };

    return isOpen ? (
        <div className="fixed inset-0 flex justify-center items-start pt-8 bg-gray-800 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-black">Welcome to our website!</h2>
                <form onSubmit={handleSubscribe}>
                    <input
                        className='flex justify-center border-2 border-black p-2 w-full placeholder-black text-red-800'
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className='flex justify-between mt-4'>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                        >
                            Subscribe
                        </button>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ) : null;
};

export default Popup;
