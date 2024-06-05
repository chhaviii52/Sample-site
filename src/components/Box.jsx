import React from 'react'
import './Box.css';
import { GoChecklist } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa6";
import { MdOutlineHouseSiding } from "react-icons/md";
const Box = () => {
  return (<div>
    <br></br>
    <br></br>
    <div >
    <h1 className='key'>Key Problems solved by us</h1>
  </div>
  <br></br>
  <br></br>
  <div className='all'>
  <div className='one'>
    <div className='icon'>
    <GoChecklist size='4rem' />
</div>
<br></br>
    <h3 className='head'>What to order </h3>
    <br></br>
    <p className='detail'>Get accurate demand and days to stock out. Automate purchase planning so you can always have</p>
  </div>
  <div className='one'>
    <div className='icon'>
    <IoBagHandleOutline  size='4rem'  />
    </div>
    <br></br>
    <h3 className='head'>When to order</h3>
    <br></br>
    <p className='detail'>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
  </div>
  <div className='one'>
    <div  className='icon'>
    <FaRegBuilding  size='4rem' />
    </div>
    <br></br>
    <h3 className='head'>How much to stock</h3>
    <br></br>
    <p className='detail'>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
  </div>
  <div className='one'>
    <div className='icon'>
    <MdOutlineHouseSiding   size='4rem'/>
     </div>
     <br></br>
    <h3 className='head'>Where to place</h3>
    <br></br>
    <p className='detail'>Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.</p>
  </div>

  </div>
  </div>
   
  )
}

export default Box