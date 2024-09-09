import React, { useContext, useEffect, useState } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import FoodSkeleton from '../../FoodSkeleton';

const ViewAllFood = () => {
    const { all_food_list, loading, fetchAllFoodList,filteredFoodList:data } = useContext(StoreContext);
    
    useEffect(() => {
        fetchAllFoodList();
    }, []);

    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value); 
    };
    const filteredFoodList = selectedCategory
        ? data.filter((item) => item.category === selectedCategory)
        : data; 

    return (
        <div>
            <div className='food-display' id='food-display'>
                <div className='above-sort'>
                    <h3 style={{ color: "#49557E" }}>Menu Card</h3>
                    
                    
                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <h5>Sort By</h5>
                        <select onChange={handleCategoryChange} value={selectedCategory}  style={{ borderRadius:"15px", height:"25px"}}>
                            <option value="">All Categories</option>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                </div>
                
                {/* Display filtered food list */}
                <div className="food-display-list">
                    {loading ? (
                        [1, 2, 3, 4, 5, 6].map((item) => <FoodSkeleton key={item} />)
                    ) : (
                        filteredFoodList.map((item) => (
                            <FoodItem
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewAllFood;
