import React from 'react'
import './Review.css'
import picone from './picone.avif'
import pictwo from './pictwo.jpg'
import picthree from './picthree.jpg'
import picfour from './picfour.jpg'
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
const Review = () => {
   
  return (
    <div className='allReview'>
        <div className='mainhead'>
         <h1>What people think about us?</h1>
         <br></br>
         <br></br>
         <p>Insights from years of working in various supply-chain roles (and an itch to write). We hope you find these posts interesting!</p>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
        <div className='buttons'>
            <div>
            <FaLessThan  size='2rem'/>
            </div>
            
            <div>
            <FaGreaterThan  size='2rem'/>
            </div>
        </div>
        </div>
        <br></br>
        <div className='single'>
            <div><img src={picone} className='people'/></div>
            <h3>Allen Stonch</h3>
            <br></br>
            <p>24 June 2024</p>
        </div>
        <div className='single'>
            <div><img src={pictwo} className='people'/></div>
            <h3>Skie Zuckerberg</h3>
            <br></br>
            <p>24 June 2024</p>
        </div>
        
        </div>
  )
}

export default Review
