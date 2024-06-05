import React from 'react'
import './KeyMatrix.css'
import { FaClock } from "react-icons/fa";
import { FaFolderClosed } from "react-icons/fa6";
import { TbBlockquote } from "react-icons/tb";
import { IoIosContacts } from "react-icons/io";
const KeyMatrix = () => {
  return (
    <div>
        <div>
           <h1 className='key'>CleverBooks Offers</h1> 
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className='allData'>
          
          <div className='each' id='box1'>
            <div><FaClock  size='5rem'/>
</div> <br></br>
            <div>
              <h3>Saves your time</h3>
              <br></br>
              <p>Quickly find and reuse the books you need, reducing development time and increasing productivity.</p></div>
          </div>
          <div className='each' id='box2'>
            <div><FaFolderClosed  size='5rem'  />
</div><br></br>
            <div>
              <h3>Stays organised</h3>
              <br></br>
              <p>Quickly find and reuse the books you need, reducing development time and increasing productivity.</p></div>
          </div>

          <div className='each' id='box3'>
            <div><TbBlockquote size='5rem' /></div><br></br>
            <div>
              <h3>Personalised Experience</h3>
              <br></br>
              <p>Quickly find and reuse the books you need, reducing development time and increasing productivity.</p></div>
          </div>

          <div className='each' id='box4'>
            <div><IoIosContacts size='5rem' />
</div><br></br>
            <div>
              <h3>Effortless Collaborations</h3>
              <br></br>
              <p>Quickly find and reuse the books you need, reducing development time and increasing productivity.</p></div>
          </div>


        </div>
    </div>
  )
    
}

export default KeyMatrix

