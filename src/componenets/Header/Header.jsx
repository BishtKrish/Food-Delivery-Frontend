import React, { useContext, useState } from 'react'
import './Header.css'
import { StoreContext } from './../Context/StoreContext';
import { food_list } from './../../assets/assets';
import ViewAllFood from '../FoodDisplay/ViewAllFood';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const{food_list, loading} = useContext(StoreContext);
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Order now and enjoy the best food from local restaurants, delivered straight to your door.Your favorite dishes, just a few taps away – Order now and enjoy hassle-free delivery!</p>
        <button onClick={()=>navigate('/list')}>View Menu</button>
        
      </div>
    </div>
  )
}

export default Header
