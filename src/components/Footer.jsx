import React from 'react'
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import screen from './screen.png'
const Footer = () => {
  return (
    <div className='foot'>
      <div className='foot2'>
      </div>
       < div className='footer-items'>
          <div className='picture'>
            <img src={screen}></img>
          </div>
        <ul>
          <h3>Get to Know Us</h3>
          <br></br>
          <li><a href="#">About us</a></li>
          <br></br>
          <li><a href="#">Careers</a></li>
          <br></br>
          <li><a href="#">Press Release</a></li>
          <br></br>
          <li><a href="#">Book Science</a></li>

        </ul>
        <ul>
          <h3>Connect with Us</h3>
          <br></br>
          <li><a href="#"><FaFacebook /> Facebook</a></li>
          <br></br>
          <li><a href="#"><FaSquareXTwitter /> Twitter</a></li>
          <br></br>
          <li><a href="#"><GrInstagram /> Instagram</a></li>
          <br></br>
        </ul>
        <ul>
          <h3>Make Money with Us</h3>
          <br></br>
          <li><a href="#">Sell on CleverBooks</a></li>
          <br></br>
          <li><a href="#">Sell under our Accelerator</a></li>
          <br></br>
          <li><a href="#">Protect and Build Your Brand</a></li>
          <br></br>
          <li><a href="#">Global Selling</a></li>
          <br></br>
          <li><a href="#">Become an Affiliate</a></li>
          <br></br>
          <li><a href="#">Fulfillment by CleverBooks</a></li>
          <br></br>
          <li><a href="#">Advertise Your Products</a></li>
          <br></br>
          <li><a href="#">CleverBooksPay on Merchants</a></li>
          
          <br></br>
        </ul>
        <ul>
          <h3>Let Us Help You</h3>
          <br></br>
          <li><a href="#">COVID-19 and CleverBooks</a></li>
          <br></br>
          <li><a href="#">Your Account</a></li>
          <br></br>
          <li><a href="#">Return Centre</a></li>
          <br></br>
          <li><a href="#">100% Purchase Protection</a></li>
          <br></br>
          <li><a href="#">CleverBooks App Download</a></li>
          <br></br>
          <li><a href="#">Help</a></li>
        </ul>
      

        </div>
    </div>
  )
}

export default Footer
