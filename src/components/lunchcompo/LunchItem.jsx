import React from 'react'
import lunchData from './LunchData';
import LunchCard from './LunchCard';


const LunchItem = () => {
   

  return (



    
    <div className=' sm:flex sm:flex-wrap sm:gap-10 justify-center ml-5 sm:justify-center sm:my-10 grid grid-cols-2  '>
        {lunchData.map((food) => {

            return(
                <LunchCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                desc={food.desc}
                rating={food.rating}
                img={food.img}
               
                />
            )
        })}
     
    </div>

  )
}

export default LunchItem
