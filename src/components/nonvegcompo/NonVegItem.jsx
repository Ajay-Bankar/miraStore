import React from 'react'
import NonVegData from './NonVegData';
import NonVegCard from './NonVegCard';





const NonVegItem = () => {
    console.log(VegItem);

  return (



    
    <div className=' sm:flex sm:flex-wrap sm:gap-10 justify-center ml-5 sm:justify-center sm:my-10 grid grid-cols-2  '>
        {NonVegData.map((food) => {

            return(
                <NonVegCard
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

export default NonVegItem
