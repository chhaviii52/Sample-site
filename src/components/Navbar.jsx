import React from 'react'
import './Navbar.css'
import screen from './screen.png'
const Navbar = () => {
  return (
    <div className='navbar' >
      <div className="part1">
       < img src={screen} alt='img3 'className='logo'/>
      </div>
      <div className="part2">
        
     <div id='product' className='p2'>Product</div>
     <div id='pricing' className='p2'>Pricing</div>
     <div id='industry' className='p2'>Industry</div>
     <div id='custom' className='p2'>Custom Stories</div>
     <div id='about'className='p2'>About</div>
     <div id='blog'className='p2'>Blog</div>
      </div>
      <div className="part3">
<div id='login' className='p3'>Login</div>
<div id='contact' className='p3'>Talk to Us</div>

      </div>
    </div>
  )
}

export default Navbar
