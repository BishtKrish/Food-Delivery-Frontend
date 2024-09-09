import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
import Myimage from '../../assets/Myimage.png';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [searchVisible, setSearchVisible] = useState(false); // To toggle search field
  const [searchQuery, setSearchQuery] = useState(""); // To store the search input
  const navigate = useNavigate()
  // Import the necessary functions and states from context
  const { getTotalCartAmount, token, setToken, setSearchKeyword } = useContext(StoreContext);


  // Handle user logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  // Handle search input change and set the global search keyword
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSearchKeyword(e.target.value); // Update the global search state
  };

  // Handle search icon click
  const handleSearchIconClick = () => {
    setSearchVisible(!searchVisible); // Toggle search visibility
    if (!searchVisible) {
      setSearchQuery(""); // Clear search input when it's hidden
      setSearchKeyword(""); // Clear global search keyword when hiding the search box
    }
  };

  const handleEnter = (e)=>{
   
    if(e.key == 'Enter'){
      navigate('/list')
    }
    
  }

  return (
    <div className='navbar'>
      <Link to='/' ><img src={Myimage} alt="" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
       

        {/* Conditionally render search input field */}
        {searchVisible ? (
          
          <input
          onKeyUp={handleEnter}
            type="text"
            placeholder="Search food items..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ marginLeft: "8px", padding: "5px" }}
          />
        ): <img 
        src={assets.search_icon} 
        alt="Search" 
        onClick={handleSearchIconClick} // Toggle search field visibility
      />}

        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {/* User Profile/Sign-in */}
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
