import React, { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen text-white'>
            {loading ? (
                <PropagateLoader className='mb-2' color="#36d7b7" />
            ) : (
                <div className='flex flex-col items-center'>
                    <h1 className='sm:text-3xl text-xl font-bold mb-5 text-center text-fuchsia-200'>
                        Order Successful!
                    </h1>
                    <p className='mb-6'>Your order has been successfully placed</p>
                    <button 
                        onClick={handleGoHome}
                        className='px-6 py-2 bg-fuchsia-500 text-white rounded-md hover:bg-fuchsia-600 transition-colors'
                    >
                        Go Back Home
                    </button>
                </div>
            )}
        </div>
    );
};

export default Success;