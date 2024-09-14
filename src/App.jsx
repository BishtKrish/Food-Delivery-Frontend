import React, { useEffect, useState } from 'react'
import Navbar from './componenets/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './componenets/Footer/Footer'
import LoginPopUp from './componenets/LoginPopUp/LoginPopUp'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import Loader from './componenets/Loader'
import ViewAllFood from './componenets/FoodDisplay/ViewAllFood'

const App = () => {

  const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Show loader for 2 seconds
        const timer = setTimeout(() => {
            setLoading(false); // Hide loader after 2 seconds
        }, 1500);

        // Clean up the timer when the component is unmounted
        return () => clearTimeout(timer);
    }, []);

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      {
        loading?<Loader/>:<div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />}/>
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/list' element={<ViewAllFood />} />
        </Routes>
      </div>
      }
      <Footer />
    </>
  )
}

export default App