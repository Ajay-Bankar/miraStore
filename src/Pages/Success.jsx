import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

const Success = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);


  }, []);

  return (
    <div className=' flex flex-col items-center justify-center h-screen text-white'>
      {loading ? (<PropagateLoader className=' mb-2' color="#36d7b7" />)
        : (<div>
          <h1 className=' sm:text-3xl text-xl  font-bold mb-5 text-center text-fuchsia-200'>Order Successful!</h1>
          <p>Your order has been successfully place</p>
        </div>)}


    </div>
  )
}

export default Success
