import React from 'react' 
import Navbar from './components/Navbar'
import Body from './components/Body'
import Box from './components/Box'
import KeyMatrix from './components/KeyMatrix'
import Footer from './components/Footer'

import './App.css'
import Review from './components/Review'
const App = () => {
  return (
    <div >
      <Navbar></Navbar>
      <Body></Body>
      <Box></Box>
      <br></br>
      <br></br>
      <KeyMatrix></KeyMatrix>
      <Review></Review>
      <Footer></Footer>
    </div>
  )
}

export default App
