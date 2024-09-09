import React, { useContext, useState } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import FoodSkeleton from '../../FoodSkeleton';


const FoodDisplay = ({category}) => {
    

    const { food_list,loading } = useContext(StoreContext)
    return (
        <div>
           
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near You</h2>
            <div className="food-display-list">
               {
                <>
                {loading ? [1,2,3,3,4,4].map((item)=>(
                    <FoodSkeleton/>
                )) :  food_list.map((item,index)=>{
                    
                    if(category === "All" || category ===item.category){
                    return <FoodItem key={item._id} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
                </>
               }
            </div>

        </div>
        </div>
    )
}

export default FoodDisplay
