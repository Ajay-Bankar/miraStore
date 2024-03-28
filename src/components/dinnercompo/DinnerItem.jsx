import React from 'react'

import DinnerData from './DinnerData';
import DinnerCard from './DinnerCard';
import toast, {Toaster} from 'react-hot-toast';




const DinnerItem = () => {
  const handleToast = (name)=>{

    toast.success(`Added${name} to the cart`);

  }
   

  return (
    <>
 <Toaster
  position="top-center"
  reverseOrder={false}
/>


    
    <div className=' sm:flex sm:flex-wrap sm:gap-10 justify-center ml-5 sm:justify-center sm:my-10 grid grid-cols-2  '>
        {DinnerData.map((food) => {

            return(
                <DinnerCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                desc={food.desc}
                rating={food.rating}
                img={food.img}
                handleToast={handleToast}
               
                />
            )
        })}
     
    </div>
    </>
  )
}

export default DinnerItem;
