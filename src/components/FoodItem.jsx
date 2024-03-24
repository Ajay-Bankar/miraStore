import React from 'react'
import FoodCard from './FoodCard'
import FoodData from './FoodData'
import toast, { Toaster } from 'react-hot-toast';

const FoodItem = () => {

  const handleToast = (name) => {

    toast.success(`Added ${name} to cart`);
  }



  return (
    <>

<Toaster
  position="top-center"
  reverseOrder={false}
/>
    
    <div className=' sm:flex sm:flex-wrap sm:gap-10 justify-center ml-5 sm:justify-center sm:my-10 grid grid-cols-2  '>
        {FoodData.map((food) => {

            return(
                <FoodCard 
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

export default FoodItem
