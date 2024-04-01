import React from 'react'
import FoodCard from './FoodCard'
import FoodData from './FoodData'
import toast, { Toaster } from 'react-hot-toast';
import {  useSelector } from 'react-redux';

const FoodItem = () => {

const search = useSelector((state) => state.search.search);
console.log(search);
  const category = useSelector((state) => state.category.category);
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
        {
          FoodData.filter((food) => {

            if(category === "All"){
              return food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
            }else{
             return category === food.category && food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            }
          }).map((food) => ( <FoodCard 
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
            />))

         
        }
     
      


    </div>
    </>
  )
}

export default FoodItem
