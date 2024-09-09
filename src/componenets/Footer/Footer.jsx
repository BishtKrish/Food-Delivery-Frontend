import React from 'react'
import './Footer.css'
import { assets } from './../../assets/assets';
import Myimage from '../../assets/Myimage.png';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={Myimage} alt="" />
                <p>Tastylane brings your favorite meals from top local restaurants, straight to your door. With a quick, easy ordering process and fast, reliable delivery, we ensure your food arrives fresh every time. Whether it’s a snack or a feast, we’re here to make your dining experience effortless and delicious.</p>
                <div className="footer-social-icon">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={assets.facebook_icon} alt="Facebook" />
    </a>
    <a href="https://x.com/KrishnaBis63077" target="_blank" rel="noopener noreferrer">
        <img src={assets.twitter_icon} alt="Twitter" />
    </a>
    <a href="https://www.linkedin.com/in/krishna-bisht-5619ab255" target="_blank" rel="noopener noreferrer">
        <img src={assets.linkedin_icon} alt="LinkedIn" />
    </a>
</div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>800-600-678</li>
                    <li>contact@tastylane.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ tastylane.com - All Right Reserved</p>
      
    </div>
  )
}

export default Footer
