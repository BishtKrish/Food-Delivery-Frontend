import Lottie from "lottie-react";
import React from 'react'
import Loaderimage from '../assets/loader.json'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loading-wraper">
        <div className="loading">
      <Lottie animationData={Loaderimage} loop={true} />;
      </div>
    </div>
  )
}

export default Loader
